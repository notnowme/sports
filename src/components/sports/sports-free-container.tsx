'use client';

import Link from "next/link";

import { useEffect, useState } from "react";

import SportFreeItem from "./sports-free-item";

import { BoardWithAuthor } from "@/types/type";
import { FootballBoard } from "@prisma/client";

interface SportFreeContainerProps {
    boardTitle: string;
    team: string;
    sports: string;
    type: 'free' | 'tasty';
}

interface BoardType extends FootballBoard, BoardWithAuthor {}

const SportFreeContainer = ({boardTitle, team, sports, type}: SportFreeContainerProps) => {
    const [data, setData] = useState<BoardType[]>()

    useEffect(() => {
        const getData = async() => {
            const res = await fetch(`/api/board/latest/?team=${team}`, {
                method: 'GET',
                cache: 'no-store'
            });
            const result = await res.json();
            const filtered = result.filter((el: any) => el.board === type);
            setData(filtered);
        }
        getData();
    },[])
    return (
        <div className='mt-5 p-2 rounded-md flex w-full max-w-[820px] gap-x-5'>
            <div className='flex flex-col w-full p-2'>
                <h1 className='text-2xl'>{boardTitle}
                    <Link href={`/sports/${sports}/${team}/${type}?page=1`}
                        className="ml-2 text-sm text-[#444] hover:underline">
                        더보기
                    </Link>
                </h1>
                <div className='mt-4 flex flex-col w-full rounded-md p-2 bg-[#1D1D1D] gap-y-1'>
                        {data && data.map(data => (
                            <SportFreeItem
                                key={data.no}
                                sports={sports}
                                team={data.team}
                                data={data}
                                page={1}
                            />
                        ))}
                        {data?.length === 0 && (
                            <span>작성된 글이 없습니다.</span>
                        )}
                </div>
            </div>
        </div>
    );
}

export default SportFreeContainer;