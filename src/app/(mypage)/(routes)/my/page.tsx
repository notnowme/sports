'use client';

import {
    Camera,
    FileEdit,
    MessageCircle,
    X
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

import { User, FootballBoard, FootballComments } from '@prisma/client';
import { getCsrfToken, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import ChangeNick from '@/components/my-change-nick';
import ChangePw from '@/components/my-change-pw';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';

interface commentsWithFootball extends FootballComments {
    footballBoard: FootballBoard;
}

interface UserWithBoards extends User {
    free: FootballBoard[];
    comments: commentsWithFootball[];
}

const MyPage = () => {
    const router = useRouter()
    const [user, setUser] = useState<UserWithBoards>()
    const fileRef = useRef<HTMLInputElement>(null)
    const nickRef = useRef<HTMLInputElement>(null);
    const [nick, setNick] = useState('');
    const [verifyPw, setVerifyPw] = useState(false)
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [img, setImg] = useState('');
    const [nickModal, setNickModal] = useState(false);
    const [pwModal, setPwModal] = useState(false);
    const [changeImg, setChangeImg] = useState(false);
    const [boardData, setBoardData] = useState<any[]>([]);
    const [commentData, setCommentData] = useState<any[]>([]);
    const { data: session } = useSession()

    const imgReset = () => {
        URL.revokeObjectURL(img);
        setImg(prev => '');
        setChangeImg(false);
    }

    const handleImg = (e: React.ChangeEvent<{ files: FileList | null }>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            URL.revokeObjectURL(img);

            setImg(prev => URL.createObjectURL(file));
            setChangeImg(true);
        }
    }

    const handleDelete = async () => {
        const check = prompt("'탈퇴합니다.'를 정확히 입력해 주세요.")
        if (check !== '탈퇴합니다.') return;
        const res = await fetch('/api/user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user?.id
            })
        });
        if (res.status === 200) {
            signOut({ callbackUrl: '/' });
        } else {
            console.log('뭔가 오류');
        }
    };
    const handleNickModal = () => {
        setNickModal(prev => !prev);
        setNick(user?.nick || '');
    }
    const handleNickChange = async () => {
        if (!nick || nick.length <= 1) {
            alert('최소 두 글자 이상을 입력해야 합니다.');
            return;
        }
        if (nick === user?.nick) {
            alert('변경 전 닉네임은 사용할 수 없습니다.');
            return;
        }
        try {
            const res = await fetch(`/api/my`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: user?.id,
                    nick,
                    type: 'nick'
                })
            });
            const result = await res.json();
            console.log(result);
            setNickModal(false);
            const userInfo = {
                no: user?.no,
                id: user?.id,
                nick: nick,
                provider: user?.provider,
                role: user?.role
            };
            const createRes = await fetch('/api/auth', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userInfo
                })
            });
            const createResult = await createRes.json();
            if (session?.user) {
                session.user.accessToken = createResult;
                session.user.nick = nick
            };
            await getCsrfToken();
            router.refresh();
            window.location.href = '/my';
            return;
            // 세션 정보도 업데이트 해줘야 될 듯!
            // 그러면 토큰도 재생성해야되나?
        } catch (err) {
            console.log(`[NICK_CHANGE_ERROR]`, err);
            return;
        }
    };

    const handlePwModal = () => {
        setPwModal(prev => !prev);
        setPassword('');
        setPasswordChk('');
        setVerifyPw(false);
    };

    const handlePwChange = async () => {
        if (!verifyPw) {
            if (!password) {
                alert('비밀번호를 입력하지 않았습니다.');
                return;
            }
            try {
                const res = await fetch('/api/auth/pw', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: user?.id,
                        password
                    })
                });
                if (res.status !== 200) {
                    const result = await res.json();
                    console.log(result.msg);
                    return;
                }
                setVerifyPw(true);
                setPassword('');
            } catch (err) {
                console.log(`[NICK_CHECK_ERROR]`, err);
                return;
            }
        } else {
            try {
                if (!password || password.length <= 7) {
                    alert('최소 여덟 글자 이상을 입력해야 합니다.');
                    return;
                }
                if (password !== passwordChk) {
                    alert('비밀번호가 일치하지 않습니다.');
                    return;
                }
                const res = await fetch('/api/auth/pw', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: user?.id,
                        password
                    })
                });
                const result = await res.json();
                console.log(result);
                setVerifyPw(false);
                setPassword('');
                setPasswordChk('');
                setPwModal(false);
                router.refresh();
                window.location.href = '/my';
            } catch (err) {
                console.log(`[NICK_CHANGE_ERROR]`, err);
                return;
            }
        }
    };

    const handleImgChange = async() => {
        const formData = new FormData();
        if(fileRef.current && fileRef.current.files && fileRef.current.files.length > 0) {
            const file = fileRef.current.files[0];
            formData.append('image', file);
        } else {
            console.error('file not found');
            return;
        }
        try {
            const res = await axios.patch('/api/user/s3', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
            if(res.status === 200) {
                console.log('OK');
                imgReset();
                router.refresh();
            }
        } catch (err) {
            console.error('[USER_IMAGE_ERR]', err);
            return;
        }
    }
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('/api/my', {
                    method: 'POST'
                });
                const data = await res.json();
                setUser(prev => data);
                setImg(data.imgUrl);
                setNick(data.nick);
                const res2 = await fetch('/api/board/all', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: session?.user?.id
                    })
                });
                const data2 = await res2.json();
                console.log(data2);
                setBoardData(data2.boards);
                setCommentData(data2.comments);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
        console.log(session?.user);
    }, []);
    return (
        <div className="flex flex-col w-full items-start">
            {nickModal && (
                <ChangeNick
                    nick={nick}
                    setNick={setNick}
                    handleNickChange={handleNickChange}
                    handleNickModal={handleNickModal}
                />
            )}
            {pwModal && (
                <ChangePw
                    password={password}
                    setPassword={setPassword}
                    passwordChk={passwordChk}
                    setPasswordChk={setPasswordChk}
                    handlePwModal={handlePwModal}
                    handlePwChange={handlePwChange}
                    verifyPw={verifyPw}
                />
            )}
            <div className="flex rounded-md p-2 bg-[#1D1D1D]">
                <div className="relative flex flex-col w-[200px] justify-center items-center">
                    <div className="relative w-[120px] h-[120px] bg-[#292929] rounded-[16px] overflow-hidden">
                        <Image
                            src={changeImg ? img : user?.imageUrl ? user.imageUrl : '/img/yuumi.webp'} fill alt='user_image'
                            className='object-cover'
                        />
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <span className="text-base">
                            {user?.nick}
                        </span>
                        <span className="text-sm text-[#777]">
                            {user?.id}
                        </span>
                    </div>
                    <div className='mt-2 flex gap-x-2'>
                        {changeImg ? (
                            <button
                                className='p-1 text-sm bg-[#292929] rounded-md'
                                onClick={handleImgChange}
                            >
                                이미지 변경
                            </button>
                        ) : (
                            <>
                                <button
                                    className='p-1 text-sm bg-[#292929] rounded-md'
                                    onClick={() => setNickModal(true)}
                                >
                                    닉네임 변경
                                </button>
                                <button
                                    className='p-1 text-sm bg-[#292929] rounded-md'
                                    onClick={() => setPwModal(true)}
                                >
                                    비밀번호 변경
                                </button>
                            </>
                        )}
                    </div>
                    {changeImg ? (
                        <X
                            className='absolute right-[30px] bottom-[90px] w-7 h-7 rounded-full p-1 cursor-pointer bg-rose-500'
                            onClick={imgReset}
                        />
                    ) : (
                        <Camera
                            className='absolute right-[30px] bottom-[90px] w-7 h-7 bg-[#1D1D1D] rounded-full p-1 cursor-pointer'
                            onClick={() => fileRef.current?.click()}
                        />
                    )}
                    <input hidden type='file' ref={fileRef} onChange={handleImg} accept='image/jpeg, image/png, image/jpg, image/webp' />
                </div>
                <div className="border-l border-[#292929]" />
                <div className='flex justify-center'>
                    <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
                        <FileEdit className='w-[70px] h-[70px]' strokeWidth={1} />
                        <span className='text-base'>작성 글 수</span>
                        <span className='mt-2 text-3xl font-semibold'>
                            {boardData?.length}
                        </span>
                    </div>
                    <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
                        <MessageCircle className='w-[70px] h-[70px]' strokeWidth={1} />
                        <span className='text-base'>작성 댓글 수</span>
                        <span className='mt-2 text-3xl font-semibold'>
                            {commentData?.length}
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex gap-x-8'>
                <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
                    <span className='text-3xl font-semibold mb-2'>나의 최근 작성 글</span>
                    {boardData && boardData.map((el: any, index: number) => (
                        <React.Fragment key={index}>
                            {el.footBoard && (
                                <div key={el.footBoard.no} className='group flex flex-col'>
                                    <Link href={`/sports/${el.footBoard.sport}/${el.footBoard.team}/${el.footBoard.board}/${el.footBoard.no}?page=1`} className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>
                                        {el.footBoard.title}
                                    </Link>
                                    <span className='text-sm text-[#777]'>{moment(el.footBoard.createdAt).format('YY. MM. DD')}</span>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
                    <span className='text-3xl font-semibold mb-2'>나의 최근 작성 댓글</span>
                    {commentData && commentData.map((data, index: number) => (
                        <React.Fragment key={index}>
                            {data.footComment && (
                                <div key={data.no} className='group flex flex-col'>
                            <Link href={`/sports/kleague/${data.footComment.footballBoard.team}/${data.footComment.board}/${data.footComment.footballBoard.no}?page=1#${data.footCommentNo}`} className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>
                                {data.footComment.content.length > 10 ? data.footComment.content.substring(0, 10) : data.footComment.content}
                            </Link>
                            <span className='text-sm text-[#777]'>{moment(data.createdAt).format('YY. MM. DD')}</span>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex flex-col px-10 py-6 rounded-md bg-[#1D1D1D] gap-y-4'>
                    <span className='text-3xl font-semibold mb-2'>최근 접속 기록</span>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#d32f2f]'>실패</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#d32f2f]'>실패</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                </div>
            </div>
            <div className='mt-20 flex flex-col bg-[#1D1D1D] rounded-md px-10 py-4 items-center mb-20'>
                <span className='text-3xl font-semibold mb-2'>계정 탈퇴</span>
                <span className='text-xl'>한 번 탈퇴하면 복구할 수 없습니다. 신중하게 결정해 주세요.</span>
                <button
                    className='bg-[#d32f2f] mt-10 rounded-md text-xl px-6 py-2'
                    onClick={handleDelete}
                >
                    계정 탈퇴
                </button>
            </div>
        </div>
    );
}

export default MyPage;