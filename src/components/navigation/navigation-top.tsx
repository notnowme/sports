'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

// 단계 1: #121212
// 단계 2: #1D1D1D
// 단계 3: #292929
// 단계 4: #343434
// 단계 5: #404040
export const NavigationTop = () => {
    const router = useRouter()
    return (
        <nav className="relative w-full max-w-[1280px] flex h-[62px] items-center justify-between px-5 py-3">
            <div
                className='flex items-center h-full cursor-pointer'
                onClick={() => router.push('/')}
            >
                <div className='relative flex justify-center items-center w-[48px] h-full overflow-hidden object-cover'>
                    <Image fill src={`/img/temp-logo.webp`} alt='logo' />
                </div>
                <span className='text-[24px]'>embers</span>
            </div>
            <div className='flex items-center h-full'>
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
                {/* <div className='relative flex mx-3 h-[44px] w-[44px] rounded-[24px] bg-[#343434] overflow-hidden cursor-pointer'>
                    <Image fill src={`/img/yuumi.webp`} alt='user' />
                </div> */}
            </div>
        </nav>
    )
}