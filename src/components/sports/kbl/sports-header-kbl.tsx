'use client'

import Image from 'next/image'
import { useSelectedLayoutSegments } from "next/navigation";
import { kblTeamArr } from '@/components/sports/data/kblTeam'
import Link from 'next/link'

export const SportsHeaderKBL = () => {
    const segment = useSelectedLayoutSegments();
    return (
        <div className='flex w-full justify-around'>
            <div className={`relative w-[50px] h-[50px] p-1 rounded-md hover:bg-[#444] ${segment.length === 0 ? 'bg-[#444]' : ''}`}>
                <Link href={`/sports/kbl`}>
                    <Image src={`/img/kbl/logo-kbl-white.svg`} fill alt='kbl_logo' />
                </Link>
            </div>
            <div className='ml-10 flex gap-4'>
                {kblTeamArr.map((data) => (
                    <Link key={data.name} href={`/sports/kbl/${data.name}`}>
                        <div
                            className={`relative w-[50px] h-[50px] p-1 rounded-md cursor-pointer hover:bg-[#444] ${segment.includes(data.name) ? 'bg-[#444]' : ''}`}
                        >
                            <Image src={data.imgUrl} fill alt={`${data.name} logo`} />
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}