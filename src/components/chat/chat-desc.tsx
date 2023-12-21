import { Dispatch, SetStateAction } from "react";

interface ChatDescProps {
    setShowChat: Dispatch<SetStateAction<boolean>>
}

const ChatDesc = ({setShowChat}: ChatDescProps) => {
    return (
        <div
            onClick={()=>setShowChat(prev => true)}
            className='group flex items-center rounded-md bg-[#1D1D1D] w-full p-2 hover:cursor-pointer'>
            <div className='w-[45px] h-[45px] rounded-md bg-[#292929] mr-2'>

            </div>
            <div className='flex items-center'>
                <span className='group-hover:text-[#00A495]'>채팅방 제목 <span className='text-sm'>(1/10)</span></span>
            </div>
        </div>
    );
}

export default ChatDesc;