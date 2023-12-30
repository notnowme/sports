'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChevronDown, LogOut, UserRound } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'

// 단계 1: #121212
// 단계 2: #1D1D1D
// 단계 3: #292929
// 단계 4: #343434
// 단계 5: #404040
const ContentMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: Dispatch<SetStateAction<boolean>> }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    const handleOutsideClick = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(false)
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
                    <div ref={modalRef} className='mt-2 absolute flex flex-col left-0 p-1 text-sm w-[100px] bg-[#1D1D1D] gap-y-1 rounded-md'>
                        <Link onClick={() => onClose(false)} href='/sports/kleague' className='rounded-md p-1 hover:bg-[#343434] hover:text-[#00A495]'>K-league</Link>
                        <Link onClick={() => onClose(false)} href='/sports/kbo' className='rounded-md p-1 hover:bg-[#343434] hover:text-[#00A495]'>KBO</Link>
                        <Link onClick={() => onClose(false)} href='/sports/kbl' className='rounded-md p-1 hover:bg-[#343434] hover:text-[#00A495]'>KBL</Link>
                        <Link onClick={() => onClose(false)} href='/sports/kovo' className='rounded-md p-1 hover:bg-[#343434] hover:text-[#00A495]'>KOVO</Link>
                    </div>
                )
            }
        </>
    )
}
const MyModalMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: Dispatch<SetStateAction<boolean>> }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleOutsideClick = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(false)
        }
    }

    const handleLogOut = () => {
        // 나중에 provider에 따라 로그아웃 함수 살짝 다르게 해야될 것 같음.

        onClose(false);
        signOut();
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
                    <div ref={modalRef} className='absolute flex flex-col bg-[#292929] left-[50%] translate-x-[-50%] bottom-[-120px] items-start rounded-md p-2 w-[140px] gap-y-2'>
                        <button
                            onClick={() => { router.push('/my'); onClose(false) }}
                            className='p-2 bg-[#1D1D1D] w-full rounded-md flex'>
                            <UserRound />
                            <span className='ml-1 hover:text-[#00A495]'>마이 페이지</span>
                        </button>
                        <button
                            onClick={() => handleLogOut()}
                            className='p-2 bg-[#1D1D1D] w-full rounded-md flex'>
                            <LogOut />
                            <span className='ml-1 hover:text-[#00A495]'>로그아웃</span>
                        </button>
                    </div>
                )
            }
        </>
    )
}
export const NavigationTop = () => {
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const [viewMy, setViewMy] = useState(false);

    // 세션 정보 가져오는 함수.
    const { data: session } = useSession();

    // 로그인 여부 확인하는 enum.
    const isLogin = session && session.user;
    return (
        <nav className="relative w-full max-w-[1280px] flex h-[62px] items-center justify-between px-5 py-3">
            <div
                className='relative flex items-center h-full'
            >
                <div
                    className='relative flex h-full cursor-pointer'
                    onClick={() => router.push('/')}
                >
                    <div className='relative flex justify-center items-center w-[48px] h-full overflow-hidden object-cover'>
                        <Image fill src={`/img/temp-logo.webp`} alt='logo' />
                    </div>
                    <span className='text-[24px]'>embers</span>
                </div>
                <div className='relative z-50'>
                    <ChevronDown
                        onClick={() => setMenu(prev => !prev)}
                        className={`ml-2 w-5 h-5 cursor-pointer hover:text-[#404040] ${menu ? 'text-[#404040]' : 'text-[white]'}`}
                    />
                    <ContentMenu isOpen={menu} onClose={setMenu} />
                </div>
            </div>
            <div className='relative flex items-center h-full'>
                {isLogin ? (
                    <>
                        <div
                            onClick={() => setViewMy(true)}
                            className='relative flex mx-3 h-[44px] w-[44px] rounded-[24px] bg-[#343434] overflow-hidden cursor-pointer'>
                            <Image fill src={`/img/yuumi.webp`} alt='user' />
                        </div>
                        <MyModalMenu isOpen={viewMy} onClose={setViewMy} />
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => router.push('/signin')}
                            className='px-2 py-1 text-[14px] rounded-md bg-[#343434] opacity-90 hover:opacity-100'>
                            로그인
                        </button>
                        <button
                            onClick={() => router.push('/signup')}
                            className='px-2 py-1 text-[14px] rounded-md ml-[12px] bg-[#00A495] opacity-90 hover:opacity-100'>
                            회원가입
                        </button>
                    </>
                )}
            </div>
        </nav>
    )
}