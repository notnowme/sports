import moment from "moment";
import Link from "next/link";
import React from "react";

import { allBoards, allComments } from '@prisma/client';
interface MyRecentWritesProps<T> {
    title: string;
    data: T[];
    type: 'writes' | 'comments'
}
const render = <T,>(data: T[], type: string) => {
    if (type === 'writes') {
        return (
            <>
                {data && data.map((el: any, index: number) => (
                    <React.Fragment key={index}>
                        {el.footBoard && (
                            <div key={el.footBoard.no} className='group flex flex-col'>
                                <Link href={`/sports/${el.footBoard.sport}/${el.footBoard.team}/${el.footBoard.board}/${el.footBoard.no}?page=1`} className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>
                                    {el.footBoard.title}
                                </Link>
                                <span className='text-sm text-[#777]'>{moment(el.footBoard.createdAt).format('YY. MM. DD')}</span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </>
        )
    } else if (type === 'comments') {
        return (
            <>
                {data && data.map((el: any, index: number) => (
                    <React.Fragment key={index}>
                        {el.footComment && (
                            <div key={el.no} className='group flex flex-col'>
                                <Link href={`/sports/${el.footComment.footballBoard.sport}/${el.footComment.footballBoard.team}/${el.footComment.board}/${el.footComment.footballBoard.no}?page=1#${el.footCommentNo}`} className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>
                                    {el.footComment.content.length > 10 ? el.footComment.content.substring(0, 10) : el.footComment.content}
                                </Link>
                                <span className='text-sm text-[#777]'>{moment(el.createdAt).format('YY. MM. DD')}</span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </>
        )
    }
}
const MyRecentWrites = <T,>({ title, data, type }: MyRecentWritesProps<T>) => {
    return (
        <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
            <span className='text-3xl font-semibold mb-2'>{title}</span>
            {type === 'writes' ? (
                <>
                    {render(data, 'writes')}
                </>
            ) : (
                <>
                    {render(data, 'comments')}
                </>
            )
            }
        </div>
    )
};

export default MyRecentWrites;