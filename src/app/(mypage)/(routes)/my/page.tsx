'use client';


import React from 'react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';


import Image from 'next/image'

import { useRouter } from 'next/navigation';

import { getCsrfToken, signOut, useSession } from 'next-auth/react';

import { User, FootballBoard, FootballComments, allBoards, allComments } from '@prisma/client';

import ChangeNick from '@/components/my-change-nick';
import ChangePw from '@/components/my-change-pw';

import {
    Camera,
    X
} from 'lucide-react'
import MyCountWrites from '@/components/my/my-count-writes';
import MyRecentWrites from '@/components/my/my-recent-writes';

interface commentsWithFootball extends FootballComments {
    footballBoard: FootballBoard;
}

interface UserWithBoards extends User {
    free: FootballBoard[];
    comments: commentsWithFootball[];
}

const MyPage = () => {
    const [user, setUser] = useState<UserWithBoards>();
    const [nick, setNick] = useState('');
    const fileRef = useRef<HTMLInputElement>(null);
    const [verifyPw, setVerifyPw] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [img, setImg] = useState('');
    const [nickModal, setNickModal] = useState(false);
    const [pwModal, setPwModal] = useState(false);
    const [changeImg, setChangeImg] = useState(false);
    const [boardData, setBoardData] = useState<any[]>([]);
    const [commentData, setCommentData] = useState<any[]>([]);
    
    const { data: session } = useSession();
    const router = useRouter();

    // 이미지 미리보기 없애기.
    const imgReset = () => {
        URL.revokeObjectURL(img);
        setImg('');
        setChangeImg(false);
    }

    // 이미지 미리보기 설정.
    const handleImg = (e: React.ChangeEvent<{ files: FileList | null }>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            URL.revokeObjectURL(img);

            setImg(URL.createObjectURL(file));
            setChangeImg(true);
        }
    }
    
    // 회원 탈퇴.
    const handleDelete = async () => {
        // 확인 여부.
        const check = prompt("'탈퇴합니다.'를 정확히 입력해 주세요.");
        if (check !== '탈퇴합니다.') return;

        try {
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
                console.log('문제가 발생했습니다.');
            }
        } catch(err) {
            console.error(`[MYPAGE_DELETE]`, err);
        }
    };
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

    const handlePwChange = async () => {
        if (!verifyPw) {
            if (!password) {
                alert('비밀번호를 입력하지 않았습니다.');
                return;
            }
            try {
                // 비밀번호 변경 전 현재 비밀번호 확인.
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
    };

    const handleNickModal = () => {
        setNickModal(prev => !prev);
        setNick(user?.nick || '');
    };

    const handlePwModal = () => {
        setPwModal(prev => !prev);
        setPassword('');
        setPasswordChk('');
        setVerifyPw(false);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('/api/my', {
                    method: 'POST'
                });
                const data = await res.json();
                setUser(data);
                setImg(data.imgUrl);
                setNick(data.nick);

                // 최신 글 정보.
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
                setBoardData(data2.boards);
                setCommentData(data2.comments);
            } catch (err) {
                console.error(`[BOARDALL_ERROR]`,err);
            }
        };
        getData();
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
                    <MyCountWrites
                        type='writes'
                        title='작성 글 수'
                        count={boardData?.length}
                    />
                    <MyCountWrites
                        type='comments'
                        title='작성 댓글 수'
                        count={commentData?.length}
                    />
                </div>
            </div>
            <div className='mt-10 flex gap-x-8'>
                <MyRecentWrites
                    title='나의 최근 작성 글'
                    data={boardData as allBoards[]}
                    type='writes'
                />
                <MyRecentWrites
                    title='나의 최근 작성 댓글'
                    data={commentData as allComments[]}
                    type='comments'
                />
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