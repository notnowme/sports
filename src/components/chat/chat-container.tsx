'use client'
import {
    ChevronLeft,
    User
} from 'lucide-react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { chatModal } from '@/lib/atoms/atom'
import ChatList from '@/components/chat/chat-list'
import ChatRoom from './chat-room'

const ChatContainer = () => {
    const [open, setOpen] = useRecoilState(chatModal)
    const [showChat, setShowChat] = useState(false)
    if(!open) {
        return null
    }
    return (
        <div className='fixed flex flex-col right-[50px] bottom-[110px] w-[400px] h-[600px] bg-[#292929] rounded-lg p-2 z-10'>
            {showChat ? (
                <ChatRoom setShowChat={setShowChat} />
            ) : (
                <ChatList setShowChat={setShowChat}/>
            )
            }
        </div>
    );
}
 
export default ChatContainer;