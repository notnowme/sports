'use client';

import SportFreeComment from '@/components/sports/sports-free-coment';
import { FootballBoard, FootballComments, UserRole } from '@prisma/client';
import {
    MessageSquare,
    Eye,
    MoreHorizontal
} from 'lucide-react'
import { useState, useRef, useEffect, SetStateAction, Dispatch, useLayoutEffect } from 'react';
import moment from 'moment';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import DOMpurify from 'dompurify';

interface Author {
    id: string;
    nick: string;
    role: UserRole
}
interface CommentWithAuthor extends FootballComments {
    author: Author;
}
interface BoardWithUserWithComment extends FootballBoard {
    author: Author;
    comment: CommentWithAuthor[];
    likes: Author[];
}
interface BoardBodyPageProps {
    data: BoardWithUserWithComment;
    isLogin: boolean;
}

const ContentMenu = (
    { isOpen, onClose, data } :
    { 
        isOpen: boolean,
        onClose: Dispatch<SetStateAction<boolean>>,
        data: BoardWithUserWithComment
    }) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const router = useRouter();
    const pathname = usePathname().split('/');
    const url = `/${pathname[1]}/${pathname[2]}/${pathname[3]}/${pathname[4]}`
    const handleOutsideClick = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(prev => false)
        }
    };
    const handleDelete = async() => {
        const check = prompt("'삭제합니다.'를 정확히 입력해 주세요.");
        if(check !== '삭제합니다.') return;
        try {
            const res = await fetch('/api/board', {
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    no: data.no,
                    id: data.author.id
                })
            });
            router.push(url);
        } catch(err) {
            console.log(`[BOARD_DELETE_ERR]`, err);
            return;
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
    }, [isOpen])

    return (
        <>
            {
                isOpen && (
                    <div ref={modalRef}
                        className='absolute top-[9px] right-[-100px] w-[150px] flex justify-center items-center gap-x-2'>
                        <button className='px-3 py-2 bg-[#343434] rounded-md text-sm'>수정</button>
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

const categoryText = (text: string) => {
    return text === 'normal' ? '잡담' : '후기';
}
const BoardBodyPage = ({data, isLogin}: BoardBodyPageProps) => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter();
    const [showContentMenu, setShowContentMenu] = useState(false)
    const handleShowMenu = () => {
        setShowContentMenu(prev => true)
    }
    const { data: session } = useSession();
    useLayoutEffect(() => {
        if(!data) {
            alert('없는 게시글입니다.');
            router.push('/');
        }
    },[])
    const handleSubmit = async() => {
        if(textRef.current) {
            const content = textRef.current.value;
            if(!content) {
                alert('내용을 입력해 주세요.');
                return;
            }
            try {
                const res = await fetch(`/api/comment`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        content,
                        sport: 'football',
                        boardNo: data.no
                    })
                });
                if(res.status !== 200) {
                    console.log(`[COMMENT_SERVER_ERROR]`);
                    return;
                }
                router.refresh();
                textRef.current.value = '';
            } catch(err) {
                console.log('[COMMENT_FETCH_ERROR]', err);
                return;
            }
        }
    };
    return (
        <div className="w-full flex flex-col bg-[#1D1D1D] p-4 mt-5 mb-10">
            <div className="w-full flex items-center mb-10">
                <div className="w-[60px] h-[60px] rounded-[15px] bg-[#292929] mr-4">

                </div>
                <div className="relative flex flex-col text-base">
                    <div className='flex items-center'>
                        <span className='mr-2'>{data?.author.nick}</span>
                        {data?.author.id === session?.user?.id && (
                            <div className='relative'>
                                <MoreHorizontal
                                    onClick={handleShowMenu}
                                    className='text-[#777]'
                                />
                                <ContentMenu
                                    isOpen={showContentMenu}
                                    onClose={setShowContentMenu}
                                    data={data}
                                />
                            </div>
                        )}
                    </div>
                    <span className="text-sm text-[#777]">{moment(data?.createdAt).format('YY. MM. DD')}</span>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <span className="text-base mb-2">{categoryText(data?.category)}</span>
                <span className="text-3xl font-semibold">{data?.title}</span>
                <div className='flex items-center gap-x-4 mt-2'>
                    <div className="flex items-center gap-x-1">
                        <div className='flex gap-x-2'>
                            <MessageSquare
                                strokeWidth={1}
                                className='w-6 h-6'
                            />
                            <span className='text-base text-[#777]'>
                            {data?.comment.length ? data.comment.length : 0 }
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className='flex gap-x-2'>
                            <Eye
                                strokeWidth={1}
                                className='w-6 h-6'
                            />
                            <span className='text-base text-[#777]'>1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col mt-10 pb-10 border-b border-[#444]'>
                {data?.content && (
                    <pre className='text-base font-pretendard whitespace-pre-line'
                        dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(String(data?.content))}}
                    >
                    </pre>
                )}
            </div>
            <div className='w-full flex flex-col mt-2'>
                <div className='flex items-center mb-5'>
                    <span className='text-xl'>
                        {data?.comment.length > 0
                            ? `${data.comment.length}개의 댓글이 있습니다.`
                            : '작성된 댓글이 없습니다.'
                        }
                    </span>
                </div>
                {data?.comment && (
                    data.comment.map(data => (
                        <SportFreeComment
                            key={data.no}
                            data={data}
                            author={session?.user?.id}
                        />
                    ))
                )}
            </div>
            {isLogin && (
                <div className='w-full flex mt-5 mb-5'>
                    <div className='w-[50px] h-[50px] rounded-[10px] bg-[#292929] mr-2'>

                    </div>
                    <div className='flex flex-col w-full justify-end'>
                        <textarea
                            ref={textRef}
                            className='resize-none outline-none h-[100px] rounded-md p-2 text-base'
                        />
                        <button
                            className='w-[60px] h-[35px] mt-2 rounded-md bg-[#292929] self-end'
                            onClick={handleSubmit}
                        >
                            등록
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BoardBodyPage;