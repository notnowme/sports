'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { kleague1, kleague2 } from '@/components/sports/data/kleagueTeam'
import { useSelectedLayoutSegments } from "next/navigation";
import Link from 'next/link';

import { Emblem } from '@/types/type';


export const SportsHeaderKleague = () => {
    const [current, setCurrent] = useState('kleague1')
    const [emblemArr, setEmblemArr] = useState<Emblem[]>(kleague1)
    const segment = useSelectedLayoutSegments();
    console.log(segment)

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
                    {/* <span>|</span>
                    <span
                        onClick={() => setCurrent(prev => 'kleague2')}
                        className={`cursor-pointer ${current === 'kleague2' ? "text-[#eee]" : "text-[#777]"}`}>K-league 2
                    </span> */}
                </div>
            </div>
            <div className='ml-10 flex gap-4'>
                {emblemArr.map((data) => (
                    <Link key={data.name} href={`/sports/kleague/${data.name}`}>
                        <div 
                            className={`relative w-[50px] h-[50px] p-2 rounded-md cursor-pointer hover:bg-[#444] ${segment.includes(data.name) ? 'bg-[#444]' : ''}`}>
                            <Image src={data.imgUrl} width={35} height={35} alt={`${data.name} logo`} />
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}