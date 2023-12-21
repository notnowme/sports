import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import ChatDesc from "./chat-desc";

interface ChatListProps {
    setShowChat: Dispatch<SetStateAction<boolean>>
}

const ChatList = ({setShowChat}: ChatListProps) => {
    return (
        <>
            <div className='flex flex-col items-center w-full rounded-md p-2 mb-2'>
                <span className='text-2xl mb-2 font-semibold'>embers 채팅방</span>
                <span className='text-sm'>매너를 지켜주세요 :)</span>
            </div>
            <div className='flex flex-col p-2 w-full gap-y-2 h-[353px]'>
                <ChatDesc setShowChat={setShowChat}/>
                <ChatDesc setShowChat={setShowChat}/>
                <ChatDesc setShowChat={setShowChat}/>
                <ChatDesc setShowChat={setShowChat}/>
                <ChatDesc setShowChat={setShowChat}/>
            </div>
            <div className="mt-10 w-full p-2 flex items-center justify-center gap-x-3 rounded-md">
                <button
                    className='p-1 rounded-md bg-[#292929]'
                >
                    <ChevronLeft className='w-5 h-5 hover:text-[#00A495]' />
                </button>
                <div className='flex items-center bg-[#292929] rounded-md h-[35px]'>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#444] text-[#00A495]'>1</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>2</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>3</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>4</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>5</button>
                </div>
                <button
                    className='p-1 rounded-md bg-[#292929]'
                >
                    <ChevronRight className='w-5 h-5 hover:text-[#00A495]' />
                </button>
            </div>
        </>
    );
}

export default ChatList;