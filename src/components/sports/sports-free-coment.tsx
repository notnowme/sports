'use client'

import { FootballComments, UserRole } from '@prisma/client';
import {
    Heart,
    MoreHorizontal
} from 'lucide-react'


import { useState, useRef, useEffect, SetStateAction, Dispatch } from 'react';

import moment from 'moment';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Author {
    id: string;
    nick: string;
    role: UserRole
}
interface CommentWithAuthor extends FootballComments {
    author: Author;
    likes: Author[];
}
interface SportFreeCommentProps {
    data: CommentWithAuthor;
    author: string | undefined
}

const ContentMenu = (
    { isOpen, onClose, data, modify, setModify, setText }:
        {
            data: CommentWithAuthor,
            isOpen: boolean,
            onClose: Dispatch<SetStateAction<boolean>>,
            modify: boolean,
            setModify: Dispatch<SetStateAction<boolean>>,
            setText: Dispatch<SetStateAction<string>>
        }
) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    const handleOutsideClick = (e: any) => {
        if (modify) return;
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(prev => false);
            setModify(prev => false);
            setText(prev => data.content);
        }
    }

    const handleDelete = async () => {
        const check = prompt("'삭제합니다.'를 정확히 입력해 주세요.");
        if (check !== '삭제합니다.') return;
        const res = await fetch('/api/comment', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                no: data.no,
                id: data.author.id
            })
        });
        const result = await res.json();
        console.log(result);
        router.refresh();
    }
    const handleModifyChk = () => {
        if (modify) {
            onClose(false);
            setModify(false);
            setText(prev => data.content);
        } else {
            setModify(true);
        }
    }
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick)
        } else {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [isOpen, modify])

    return (
        <>
            {
                isOpen && (
                    <div ref={modalRef}
                        className='absolute top-[9px] right-[-100px] w-[150px] flex justify-center items-center gap-x-2'>
                        <button
                            className='px-3 py-2 bg-[#343434] rounded-md text-sm'
                            onClick={handleModifyChk}
                        >
                            {modify ? '취소' : '수정'}
                        </button>
                        <button
                            className='px-3 py-2 bg-[#343434] rounded-md text-sm'
                            onClick={handleDelete}
                        >
                            삭제
                        </button>
                    </div>
                )
            }
        </>
    )
}

const SportFreeComment = ({ data, author }: SportFreeCommentProps) => {
    const [showContentMenu, setShowContentMenu] = useState(false);
    const [modify, setModify] = useState(false);
    const [text, setText] = useState(data.content);
    const router = useRouter();
    const { data: session } = useSession();

    // 일치하는 아이디가 있다면 true.
    const isLike = data.likes.some(el => el.id === session?.user?.id);
    const handleShowMenu = () => {
        setShowContentMenu(prev => true)
    }
    const handleModify = async () => {
        if (!text) {
            alert('내용을 입력해 주세요.');
            return;
        }
        if (text === data.content) {
            alert('수정한 내용이 없습니다.');
            return;
        }
        try {
            const res = await fetch('/api/comment', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: text,
                    no: data.no,
                    id: author
                })
            });
            const result = await res.json();
            console.log(result);
            setModify(false);
            setShowContentMenu(false);
            router.refresh();
        } catch (err) {
            console.log(`[COMMENT_MODIFY_ERR]`, err);
            return;
        }
    };
    const handleLike = async(no: number) => {
        if(!session || !session.user) {
            alert('로그인한 유저만 좋아요 가능');
            return;
        }
        try {
            const res = await fetch('/api/comment', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    no: data.no
                })
            });
            const result = await res.json();
            console.log(result);
            router.refresh();
        } catch(err) {
            console.log(`[COMMENT_LIKE_ERROR]`, err);
            return;
        }
    }
    return (
        <div className='w-full flex flex-col mb-10'>
            <div className='flex items-start'>
                <div className='w-[50px] h-[50px] rounded-[10px] bg-[#292929] mr-4'>

                </div>
                <div className='flex flex-col'>
                    <div className='relative flex items-center'>
                        <span className='text-base mr-2'>{data.author.nick}</span>
                        <span className='text-sm text-[#777] mr-2'>
                            {moment(data.createdAt).format('YY. MM. DD')}
                        </span>
                        {author === data?.author.id && (
                            <div className='relative'>
                                <MoreHorizontal
                                    onClick={handleShowMenu}
                                    className='text-[#777] cursor-pointer hover:text-[#ccc]'
                                />
                                <ContentMenu
                                    isOpen={showContentMenu}
                                    onClose={setShowContentMenu}
                                    modify={modify}
                                    setModify={setModify}
                                    data={data}
                                    setText={setText}
                                />
                            </div>
                        )}
                    </div>
                    {modify ? (
                        <div className='mt-10 flex flex-col w-[600px]'>
                            <textarea
                                className='mb-4 w-full outline-none h-[100px] p-2 resize-none'
                                value={text}
                                onChange={(e) => setText(prev => e.target.value)}
                            />
                            <button
                                className='bg-[#444] p-1'
                                onClick={handleModify}
                            >
                                수정하기
                            </button>
                        </div>
                    ) : (
                        <>
                            <pre className='text-base font-pretendard whitespace-pre-line'>
                                {data.isModify && <span className='text-sm text-[#444]'>(수정됨) </span>} {data.content}
                            </pre>
                            <div className='flex mt-1 gap-x-1'>
                                <Heart
                                    strokeWidth={1}
                                    className={`w-4 h-4 cursor-pointer ${isLike ? 'text-rose-500 fill-rose-500' : ''}`}
                                    onClick={() => handleLike(data.no)}
                                />
                                <span className='text-sm text-[#777]'>
                                    {data.likes.length}
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SportFreeComment;