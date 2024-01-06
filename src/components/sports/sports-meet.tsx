import { FootballBoard, UserRole } from "@prisma/client";
import moment from "moment";
import Link from "next/link";

interface BoardWithAuthor extends FootballBoard{
    author: {
        id: string;
        nick: string;
        role: UserRole
    }
    likes: {
        id: string
    }[]
    comment: {
        authorNo: number
    }[]
}
interface SportsMeetListProps {
    data: BoardWithAuthor
}

const SportsMeetList = ({data}: SportsMeetListProps) => {
    return (
        <div className='flex w-full items-center p-1 rounded-md hover:bg-[#343434]'>
            <div className='w-[45px] h-[45px] rounded-md bg-[#292929] mr-6'>

            </div>
            <div className='flex flex-col'>
                <Link href={`/sports/${data.sport}/${data.team}/${data.board}/${data.no}?page=1`}
                    className='text-base'>
                    {data.title}
                </Link>
                <span className='text-sm text-[#777] text-end'>{moment(data.createdAt).format('YY. MM. DD')}</span>
            </div>
        </div>
    );
}

export default SportsMeetList;