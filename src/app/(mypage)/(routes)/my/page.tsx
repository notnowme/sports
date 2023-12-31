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
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface UserWithBoards extends User {
    free: FootballBoard[];
    comments: FootballComments[];
}

const MyPage = () => {
    const router = useRouter()
    const [user, setUser] = useState<UserWithBoards>()
    const fileRef = useRef<HTMLInputElement>(null)
    const [img, setImg] = useState('');
    const [changeImg, setChangeImg] = useState(false);

    const imgReset = () => {
        URL.revokeObjectURL(img);
        setImg(prev => '');
        setChangeImg(false);
    }

    const handleImg = (e: React.ChangeEvent<{files: FileList | null}>) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            URL.revokeObjectURL(img);

            setImg(prev => URL.createObjectURL(file));
            setChangeImg(true);
        }
    }

    const handleDelete = async() => {
        const check = prompt("'탈퇴합니다.'를 정확히 입력해 주세요.")
        if(check !== '탈퇴합니다.') return;
        const res = await fetch('/api/user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user?.id
            })
        });
        if(res.status === 200) {
            signOut({callbackUrl: '/'});
        } else {
            console.log('뭔가 오류');
        }
    }
    useEffect(() => {
        const getData = async() => {
            try {
                const res = await fetch('/api/my', {
                    method: 'POST'
                });
                const data = await res.json();
                console.log(data);
                setUser(prev => data);
                setImg(data.imgUrl);
            } catch(err) {
                console.log(err);
            }
        };
        getData();
    },[])
    return (
        <div className="flex flex-col w-full items-start">
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
                                <button className='p-1 text-sm bg-[#292929] rounded-md'>이미지 변경</button>
                        ) : (
                            <>
                                <button className='p-1 text-sm bg-[#292929] rounded-md'>닉네임 변경</button>
                                <button className='p-1 text-sm bg-[#292929] rounded-md'>비밀번호 변경</button>
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
                    <input hidden type='file' ref={fileRef}  onChange={handleImg} accept='image/jpeg, image/png, image/jpg, image/webp'/>
                </div>
                <div className="border-l border-[#292929]" />
                <div className='flex justify-center'>
                    <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
                        <FileEdit className='w-[70px] h-[70px]' strokeWidth={1} />
                        <span className='text-base'>작성 글 수</span>
                        <span className='mt-2 text-3xl font-semibold'>
                            {user?.free?.length}
                        </span>
                    </div>
                    <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
                        <MessageCircle className='w-[70px] h-[70px]' strokeWidth={1} />
                        <span className='text-base'>작성 댓글 수</span>
                        <span className='mt-2 text-3xl font-semibold'>
                        {user?.comments?.length}
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex gap-x-8'>
                <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
                    <span className='text-3xl font-semibold mb-2'>나의 최근 작성 글</span>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                </div>
                <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
                    <span className='text-3xl font-semibold mb-2'>나의 최근 작성 댓글</span>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
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