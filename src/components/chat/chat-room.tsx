import { ChevronLeft, User } from "lucide-react";

import { ChatMe, ChatOther, ChatWithIconOther, ChatWithNameMe } from '@/components/chat/chat-item'
import { Dispatch, SetStateAction, useState } from "react";

interface ChatRoomProps {
    setShowChat: Dispatch<SetStateAction<boolean>>
}

const ChatRoom = ({setShowChat}: ChatRoomProps) => {
    const [text, setText] = useState('')
    return (
        <>
            <div className='relative flex items-center w-full p-2'>
                <button onClick={() => setShowChat(prev => false)}>
                    <ChevronLeft className='hover:text-[#00A495]' />
                </button>
                <span className='ml-2'>채팅방 이름</span>
                <button className='absolute right-5'>
                    <User className='hover:text-[#00A495]' />
                </button>
            </div>
            <div className='relative w-full h-[450px] flex flex-col justify-end bg-[#1D1D1D] p-2 rounded-md overflow-y-scroll overflow-x-hidden no-scroll'>
                <ChatWithIconOther />
                <ChatWithNameMe />
                <ChatMe />
                <ChatWithIconOther />
                <ChatOther />
            </div>
            <div className='mt-2 flex flex-col w-full h-[40px] bg-[#1D1D1D] rounded-md'>
                <input type='text' placeholder='채팅을 입력해 보세요'
                    onChange={(e) => setText(prev => e.target.value)}
                    className='rounded-md h-full outline-none p-2 text-sm'
                />
            </div>
            <div className='flex justify-end'>
                <button disabled={text.length === 0}
                    className={`mt-2 w-12 h-8 p-1 rounded-md ${text ? 'text-[#eee] bg-[#00A495]' : 'text-[#777] bg-[#1D1D1D]'}`}>채팅</button>
            </div>
        </>
    );
}

export default ChatRoom;