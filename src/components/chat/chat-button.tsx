'use client'
import { MessagesSquare, X } from 'lucide-react'
import { useRecoilState } from 'recoil'
import { chatModal } from '@/lib/atoms/atom'


export const ChatButton = () => {
    const [open, setOpen] = useRecoilState(chatModal)
    return (
        <div
            onClick={() => setOpen(prev => !prev)}
            className='fixed right-[30px] bottom-[30px] rounded-full p-[15px] cursor-pointer shadow-lg bg-[#343434]'>
            {open ? (
                <X className='w-[35px] h-[35px]'/>
            ) : (
                <MessagesSquare className='w-[35px] h-[35px]'/>
            )}
        </div>
    )
}