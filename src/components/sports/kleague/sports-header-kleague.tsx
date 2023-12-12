'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { kleague1, kleague2 } from '@/components/sports/data/kleagueTeam'

interface Emblem {
    name: string
    imgUrl: string
}

export const SportsHeaderKleague = () => {
    const [current, setCurrent] = useState('kleague1')
    const [emblemArr, setEmblemArr] = useState<Emblem[]>(kleague1)

    useEffect(() => {
        if (current === 'kleague1') {
            setEmblemArr(prev => kleague1)
        } else {
            setEmblemArr(prev => kleague2)
        }
    }, [current])
    return (
        <div className='flex w-full justify-around'>
            <div className='flex items-center'>
                <div className="relative w-[110px] h-[35px] ">
                    <Image src={`/img/kleague/emblem_login.png`} fill alt='kbl_logo' />
                </div>
                <div className='ml-6 flex items-center gap-4 text-sm'>
                    <span
                        onClick={() => setCurrent(prev => 'kleague1')}
                        className={`cursor-pointer ${current === 'kleague1' ? "text-[#eee]" : "text-[#777]"}`}>K-league 1
                    </span>
                    <span>|</span>
                    <span
                        onClick={() => setCurrent(prev => 'kleague2')}
                        className={`cursor-pointer ${current === 'kleague2' ? "text-[#eee]" : "text-[#777]"}`}>K-league 2
                    </span>
                </div>
            </div>
            <div className='ml-10 flex gap-4'>
                {emblemArr.map((data) => (
                    <div key={data.name} className='relative w-[35px] h-[35px] p-1 rounded-md cursor-pointer hover:bg-[#343434]'>
                        <Image src={data.imgUrl} fill alt={`${data.name} logo`} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}