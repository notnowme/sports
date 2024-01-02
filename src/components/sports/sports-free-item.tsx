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

const categoryMap = (cat: string) => {
    return cat === 'normal' ? '잡담' : '후기';
}

const SportFreeItem = ({ data, sports, team }: {data: BoardWithAuthor, sports: string, team: string}) => {
    return (
        <div className='flex items-center justify-between w-full p-2 rounded-md text-base hover:bg-[#343434]'>
            <div className='flex items-center'>
                <span className='w-[40px] p-1 rounded-md mr-2 text-center text-sm bg-[#292929]'>{categoryMap(data.category)}</span>
                <Link
                    href={`/sports/${sports}/${team}/free/${data.no}`}
                    className="p-1 mr-2"
                >
                    {data.title}
                </Link>

                <span className="text-sm text-[#00A495]">
                    {data.comment.length}
                </span>
            </div>
            <div className='flex'>
                <div className="flex items-center gap-x-1 w-[200px]">
                    <div className="w-[25px] h-[25px] bg-[#292929] rounded-md mr-1">

                    </div>
                    <span>{data.author.nick}</span>
                </div>
                <span className='w-[120px] p-1 mr-2 text-right text-sm'>{moment(data.createdAt).format('YY. MM. DD')}</span>
            </div>
        </div>
    );
}

export default SportFreeItem;