'use client';

import { useEffect, useState } from "react";
import SportFreeItem from "./sports-free-item";
import { FootballBoard, UserRole } from "@prisma/client";

interface SportFreeContainerProps {
    boardTitle: string;
    team: string;
    sports: string
}

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

const SportFreeContainer = ({boardTitle, team, sports}: SportFreeContainerProps) => {
    const [data, setData] = useState<BoardWithAuthor[]>()

    useEffect(() => {
        const getData = async() => {
            const res = await fetch(`/api/board/latest/?team=${team}`, {
                method: 'GET',
                cache: 'no-store'
            });
            const result = await res.json();
            setData(result);
        }
        getData();
    },[])
    return (
        <div className='mt-5 p-2 rounded-md flex w-full max-w-[820px] gap-x-5'>
            <div className='flex flex-col w-full p-2'>
                <h1 className='text-2xl'>{boardTitle}</h1>
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
                </div>
            </div>
        </div>
    );
}

export default SportFreeContainer;