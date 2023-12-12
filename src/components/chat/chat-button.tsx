import { MessagesSquare } from 'lucide-react'

export const ChatButton = () => {
    return (
        <div className='fixed right-[30px] bottom-[30px] rounded-full p-[15px] cursor-pointer shadow-lg bg-[#343434]'>
            <MessagesSquare className='w-[35px] h-[35px]'/>
        </div>
    )
}