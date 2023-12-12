'use client'

import SportsMatchResult from '@/components/sports/sports-match'
import { CalendarDays, ChevronRight, ChevronLeft, FileSpreadsheet, MapPinned } from 'lucide-react'
import { kbl_matches } from '@/data/kbl_matches'

import { useState } from 'react'
import SportsReviewList from '@/components/sports/sports-review'
import SportsMeetList from '@/components/sports/sports-meet'

interface MatchData {
    matchDate: string
    matchTime: string
    matchPlace: string
    matchTeams: string[]
}

const chunk = (arr: MatchData[], size: number) => (
    Array.from(
        {length: Math.ceil(arr.length / size)}, (_, index) => arr.slice(index * size, (index + 1) * size)
    )
)
const SportsKBLMain = () => {
    const [page, setPage] = useState(1)
    const [marginLeft, setMarginLeft] = useState(0)

    const kbl_matches_map: MatchData[] = []
    kbl_matches.map((data, index) => {
        data.matchTime.map((match, matchIndex) => {
            const input: MatchData = {
                matchDate: data.matchDate,
                matchTime: match,
                matchPlace: data.matchPlace[matchIndex],
                matchTeams: data.matchTeams.slice(matchIndex * 2, (matchIndex + 1) * 2)
            }
            kbl_matches_map.push(input)
        })
    })

    const chunkedMap = chunk(kbl_matches_map, 6)
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
        <div className="mt-20 flex flex-col w-full max-w-[1280px]">
            <div className="flex w-full justify-between">
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
                            style={{marginLeft:`${marginLeft}px`}}
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
                <div className='flex flex-col w-full max-w-[300px]'>
                    <div className='flex items-center text-[#eee] mb-4'>
                        <MapPinned
                            strokeWidth={1}
                            className='mr-2'/>
                        <span>같이 보실 분</span>
                    </div>
                    <div className='mt-2 w-full h-[430px] flex flex-col items-center rounded-md bg-[#1D1D1D] p-2 gap-y-4'>
                        <SportsMeetList />
                        <SportsMeetList />
                        <SportsMeetList />
                        <SportsMeetList />
                        <SportsMeetList />
                        <SportsMeetList />
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
                    <div className='flex flex-col w-full rounded-md bg-[#1D1D1D] p-2 gap-y-4'>
                        <SportsReviewList />
                        <SportsReviewList />
                        <SportsReviewList />
                        <SportsReviewList />
                        <SportsReviewList />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SportsKBLMain;