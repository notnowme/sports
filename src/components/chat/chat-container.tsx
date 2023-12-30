'use client'
import {
    ChevronLeft,
    User
} from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { chatModal } from '@/lib/atoms/atom'
import ChatList from '@/components/chat/chat-list'
import ChatRoom from './chat-room'

const CreateChatInput = ({ isOpen, onClose }: { isOpen: boolean, onClose: Dispatch<SetStateAction<boolean>> }) => {
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
                    <div ref={modalRef} className='p-4 flex flex-col bg-[#000] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg justify-center items-center'>
                        <div>
                            <input type="text" placeholder='채팅방 이름'
                                className='text-base p-2 pl-5 rounded-md outline-none'
                            />
                        </div>
                        <div className='mt-5 flex gap-x-2'>
                            <button className='bg-[#404040] p-2 rounded-md'>채팅방 생성</button>
                            <button
                                onClick={() => onClose(false)}
                                className='bg-[#404040] p-2 rounded-md'>취소
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

const ChatContainer = () => {
    const [open, setOpen] = useRecoilState(chatModal)
    const [showChat, setShowChat] = useState(false)
    const [chatInput, setChatInput] = useState(false)
    if (!open) {
        return null
    }
    return (
        <div className='fixed flex flex-col right-[50px] bottom-[110px] w-[400px] h-[600px] bg-[#292929] rounded-lg p-2 z-10'>
            {showChat ? (
                <ChatRoom setShowChat={setShowChat} />
            ) : (
                <ChatList setShowChat={setShowChat} />
            )
            }
            {!showChat && (
                <div className='w-full flex justify-end p-2'>
                    <button
                        onClick={() => setChatInput(true)}
                        className='bg-[#1D1D1D] p-2 rounded-md'>채팅방 생성
                    </button>
                </div>
            )}
            <CreateChatInput isOpen={chatInput} onClose={setChatInput} />
        </div>
    );
}

export default ChatContainer;