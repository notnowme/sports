'use client'

import { useState } from 'react'

import SportsMatchResult from './sports-match'

import { MatchData } from '@/types/type'

import { CalendarDays, ChevronRight, ChevronLeft } from 'lucide-react'

interface SportsMatchContainerProps {
    dataArr: MatchData[]
}
const chunk = (arr: MatchData[], size: number) => (
    Array.from(
        {length: Math.ceil(arr.length / size)}, (_, index) => arr.slice(index * size, (index + 1) * size)
    )
)

const SportMatchContainer = ({dataArr}:SportsMatchContainerProps) => {
    const [page, setPage] = useState(1)
    const [marginLeft, setMarginLeft] = useState(0)
    const chunkedMap = chunk(dataArr, 6)

    const handleLeftSlide = () => {
        setPage(prev => {
            if(prev === 1) {
                return 1
            }
            return prev - 1
        })
        if(page !== 1) {
            setMarginLeft(prev => prev + 806)
        }
    }
    const handleRighttSlide = () => {
        setPage(prev => {
            if(prev === chunkedMap.length) {
                return chunkedMap.length
            }
            return prev + 1
        })
        if(page !== chunkedMap.length) {
            setMarginLeft(prev => prev - 806)
        }
    }
    return (
        <div className="flex flex-col w-full max-w-[820px]">
            <div className="flex w-full justify-between p-2 mb-2">
                <div className='flex items-center text-[#eee]'>
                    <CalendarDays
                        strokeWidth={1}
                        className='mr-2'
                    />
                    <span>경기 일정</span>
                </div>
                <div className='flex gap-x-2 text-sm'>
                    <button>
                        <ChevronLeft
                            className={`${page === 1 ? 'text-[#333]' : 'text-[#eee]'}`}
                            onClick={handleLeftSlide}
                        />
                    </button>
                    <span>{page} / {chunkedMap.length}</span>
                    <button>
                        <ChevronRight
                            className={`${page === chunkedMap.length ? 'text-[#333]' : 'text-[#eee]'}`}
                            onClick={handleRighttSlide}
                        />
                    </button>
                </div>
            </div>
            <div className='flex w-full h-[436px] rounded-md p-4 bg-[#1D1D1D] overflow-hidden'>
                <div className={`flex flex-nowrap transition-all`}
                    style={{ marginLeft: `${marginLeft}px` }}
                >
                    {chunkedMap.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className='flex w-[790px] h-[405px] flex-wrap gap-4 mr-[16px]'>
                            {chunk.map((data, index) => (
                                <SportsMatchResult
                                    key={index + `-${data.matchDate}`}
                                    matchDate={data.matchDate}
                                    matchPlace={data.matchPlace}
                                    matchTime={data.matchTime}
                                    matchTeams={data.matchTeams}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SportMatchContainer;