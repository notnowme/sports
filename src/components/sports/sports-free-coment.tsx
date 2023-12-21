'use client'

import {
    MoreHorizontal
} from 'lucide-react'


import { useState, useRef, useEffect, SetStateAction, Dispatch } from 'react';
const ContentMenu = ({isOpen, onClose}: {isOpen: boolean, onClose: Dispatch<SetStateAction<boolean>>}) => {
    const modalRef = useRef<HTMLDivElement>(null)

    const handleOutsideClick = (e: any) => {
        if(modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(prev => false)
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
    },[isOpen])

    return (
        <>
        {
            isOpen && (
                <div ref={modalRef}
                className='absolute top-[9px] right-[-100px] w-[150px] flex justify-center items-center gap-x-2'>
                <button className='px-3 py-2 bg-[#343434] rounded-md text-sm'>수정</button>
                <button className='px-3 py-2 bg-[#343434] rounded-md text-sm'>삭제</button>
            </div>
            )
        }
        </>
    )
}

const SportFreeComment = () => {
    const [showContentMenu, setShowContentMenu] = useState(false)
    const handleShowMenu = () => {
        setShowContentMenu(prev => true)
    }
    return (
        <div className='w-full flex flex-col mb-10'>
            <div className='flex items-start'>
                <div className='w-[50px] h-[50px] rounded-[10px] bg-[#292929] mr-4'>

                </div>
                <div className='flex flex-col'>
                    <div className='relative flex items-center'>
                        <span className='text-base mr-2'>작성ddddd자</span>
                        <span className='text-sm text-[#777] mr-2'>23. 12. 24</span>
                        <div className='relative'>
                            <MoreHorizontal
                                onClick={handleShowMenu}
                                className='text-[#777]'
                            />
                            <ContentMenu isOpen={showContentMenu} onClose={setShowContentMenu}/>
                        </div>
                    </div>
                    <pre className='text-base font-pretendard whitespace-pre-line'>
                        asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                        asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                        asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                        asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                        adfajsdlfasdjflkasdf아아아아ㅇㅁ라ㅣㅁㄴㅇ리ㅏㅓㅁㄴㅇ리ㅏㅇ러ㅏㅣㅁㅇㄹㄴ미ㅏ
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default SportFreeComment;