import { FileEdit, MessageCircle } from "lucide-react";

interface MyCountWritesProps {
    type: 'writes' | 'comments';
    title: string;
    count: number
}
const MyCountWrites = ({type, title, count}: MyCountWritesProps) => {
    return (
        <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
            {type === 'writes' && <FileEdit className='w-[70px] h-[70px]' strokeWidth={1} />}
            {type === 'comments' && <MessageCircle className='w-[70px] h-[70px]' strokeWidth={1} />}
            <span className='text-base'>{title}</span>
            <span className='mt-2 text-3xl font-semibold'>
                {count}
            </span>
        </div>
    )
};

export default MyCountWrites;