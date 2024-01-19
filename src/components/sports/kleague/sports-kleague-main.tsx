'use client'

import { FileSpreadsheet, MapPinned } from 'lucide-react'
import { kleague_matches_map } from '@/data/kleague_matches'

import SportsMeetList from '@/components/sports/sports-meet'
import SportMatchContainer from '../sports-match-container'
import SportFreeItem from '../sports-free-item'
import { useEffect, useState } from 'react'
import { FootballBoard, UserRole } from '@prisma/client'

interface BoardWithAuthor extends FootballBoard{
    author: {
        id: string;
        nick: string;
        role: UserRole;
        imageUrl: string;
    }
    likes: {
        id: string
    }[]
    comment: {
        authorNo: number
    }[]
}

const SportsKleagueMain = () => {
    const [data, setData] = useState<BoardWithAuthor[]>()
    const [circleData, setCircleData] = useState<BoardWithAuthor[]>();

    useEffect(() => {
        const getData = async() => {
            const res = await fetch(`/api/board/latest`, {
                method: 'GET',
                cache: 'no-store'
            });
            const result = await res.json();
            setData(result);
        }
        const getData2 = async() => {
            const res = await fetch(`/api/board/latest/circle`, {
                method: 'GET',
                cache: 'no-store'
            });
            const result = await res.json();
            console.log(result);
            setCircleData(result);
        }
        getData();
        getData2();
    },[])
    return (
        <div className="mt-20 flex flex-col w-full max-w-[1280px]">
            <div className="flex w-full justify-between">
                <SportMatchContainer
                    dataArr={kleague_matches_map}
                />
                <div className='flex flex-col w-full max-w-[300px]'>
                    <div className='flex items-center text-[#eee] mb-4'>
                        <MapPinned
                            strokeWidth={1}
                            className='mr-2'/>
                        <span>같이 보실 분</span>
                    </div>
                    <div className='mt-2 w-full h-[430px] flex flex-col items-center rounded-md bg-[#1D1D1D] p-2 gap-y-4'>
                        {circleData && circleData.map(data => (
                            <SportsMeetList
                                key={data.no}
                                data={data}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-between mt-10'>
                <div className='flex flex-col w-full max-w-[820px]'>
                    <div className='flex items-center text-[#eee] mb-4'>
                        <FileSpreadsheet
                            strokeWidth={1}
                            className='mr-2'
                        />
                        <span>오늘 경기 후기</span>
                    </div>
                    <div className='flex flex-col w-full rounded-md bg-[#1D1D1D] p-2 gap-y-1'>
                        {data && data.map(data => (
                            <SportFreeItem
                                key={data.no}
                                sports='kleague'
                                team={data.team}
                                data={data}
                                page={1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SportsKleagueMain;