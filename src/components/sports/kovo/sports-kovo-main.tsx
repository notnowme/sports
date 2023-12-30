'use client'

import { FileSpreadsheet, MapPinned } from 'lucide-react'
import { kovo_man_matches, kovo_woman_matches } from '@/data/kovo_matches'

import SportsReviewList from '@/components/sports/sports-review'
import SportsMeetList from '@/components/sports/sports-meet'
import SportMatchContainer from '../sports-match-container'
import SportFreeItem from '../sports-free-item'

const SportsKOVOMain = () => {
    const kovo_all_matches = kovo_man_matches.concat(kovo_woman_matches)
    return (
        <div className="mt-20 flex flex-col w-full max-w-[1280px]">
            <div className="flex w-full justify-between">
                <SportMatchContainer
                    dataArr={kovo_all_matches}
                />
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
                    <div className='flex flex-col w-full rounded-md bg-[#1D1D1D] p-2 gap-y-1'>
                        <SportFreeItem tag='잡담' />
                        <SportFreeItem tag='잡담' />
                        <SportFreeItem tag='잡담' />
                        <SportFreeItem tag='잡담' />
                        <SportFreeItem tag='잡담' />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SportsKOVOMain;