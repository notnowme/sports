import Image from "next/image";
import Link from "next/link";

import moment from "moment";

import { BoardWithAuthor } from "@/types/type";
import { FootballBoard } from "@prisma/client";

interface BoardType extends FootballBoard, BoardWithAuthor {}


const categoryMap = (cat: string) => {
    return cat === 'normal' ? '잡담' : '후기';
}

const SportFreeItem = ({ data, sports, team, page, main }: { data: BoardType, sports: string, team: string, page: number, main?: boolean }) => {
    return (
        <div className='flex items-center justify-between w-full p-2 rounded-md text-base hover:bg-[#343434]'>
            <div className='flex items-center'>
                <span className='w-[40px] p-1 rounded-md mr-2 text-center text-sm bg-[#292929]'>{categoryMap(data.category)}</span>
                <Link
                    href={`/sports/${sports}/${team}/${data.board}/${data.no}?page=${page}`}
                    className="p-1 mr-2 w-[250px]"
                >
                    {main && data.title.length > 17 ? data.title.substring(0, 16) + '...' : data.title}
                    <span className="ml-2 text-sm text-[#00A495]">
                        {data.comment.length}
                    </span>
                </Link>

            </div>
            <div className='flex'>
                <div className="flex items-center gap-x-1 w-[100px]">
                    <div className="relative w-[25px] h-[25px] bg-[#292929] rounded-md mr-1 overflow-hidden">
                        <Image src={data.author.imageUrl ? data.author.imageUrl : '/img/yuumi.webp'} fill alt='userImg' />
                    </div>
                    <span>{data.author.nick}</span>
                </div>
                <span className='w-[120px] p-1 mr-2 text-right text-sm'>{moment(data.createdAt).format('YY. MM. DD')}</span>
            </div>
        </div>
    );
}

export default SportFreeItem;