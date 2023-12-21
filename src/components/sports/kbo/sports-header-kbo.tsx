'use client'

import Image from 'next/image'
import { useSelectedLayoutSegments } from "next/navigation";
import { kboTeamArr } from '@/components/sports/data/kboTeam'
import Link from 'next/link'

const teamLink: { [key: string]: string
} = {
    '한화': 'eagles',
    'KIA': 'kia',
    'KT wiz': 'wiz',
    'LG twins': 'twins',
    '롯데': 'giants',
    'NC': 'dinos',
    '두산': 'bears',
    'SSG': 'landers',
    '상무': 'sangmu',
    '삼성': 'lions',
    '고양': 'heroes'
}

export const SportsHeaderKBO = () => {
    const segment = useSelectedLayoutSegments();
    return (
        <div className='flex w-full justify-around items-center'>
            <div className={`relative flex w-[100px] h-[40px] p-1 rounded-md hover:bg-[#444] ${segment.length === 0 ? 'bg-[#444]' : ''}`}>
                <Link href={`/sports/kbo`}>
                    <Image src={`/img/kbo/h1_logo.png`} width={100} height={40} alt='kbo_logo' />
                </Link>
            </div>
            <div className='ml-10 flex items-center gap-4'>
                {kboTeamArr.map((data) => (
                    <Link key={data.name} href={`/sports/kbo/${teamLink[data.name]}`}>
                        <div 
                            className={`relative flex items-center w-[60px] h-[60px] p-2 rounded-md cursor-pointer hover:bg-[#444] ${segment.includes(teamLink[data.name]) ? 'bg-[#444]' : ''}`}>
                            <Image src={data.imgUrl} width={50} height={50} alt={`${data.name} logo`} />
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}