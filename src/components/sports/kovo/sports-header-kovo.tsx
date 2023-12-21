'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { kovo_man_team, kovo_woman_team } from '@/components/sports/data/kovoTeam'
import { useSelectedLayoutSegments } from "next/navigation";
import Link from 'next/link';

interface Emblem {
    name: string
    imgUrl: string
}

const teamLink: { [key: string]: string
} = {
    '인천 점보스': 'jumbos',
    '천안 스카이워커스': 'walkers',
    '수원 VIXTORM': 'vixtorm',
    '서울 우리WON': 'won',
    '안산 읏맨': 'okman',
    '의정부 스타즈': 'stars',
    '대전 블루팡스': 'bluefangs',
    '한국도로공사 하이패스': 'hipass',
    '흥국생명 핑크스파이더스': 'spiders',
    '현대건설 힐스테이트': 'hillstate',
    '정관장 레드스파크스': 'sparks',
    'GS칼텍스 서울Kixx': 'kixx',
    'IBK기업은행 알토스': 'altos',
    '페퍼저축은행 AI PEPPERS': 'peppers',
}

export const SportsHeaderKOVO = () => {
    const [current, setCurrent] = useState('man')
    const [emblemArr, setEmblemArr] = useState<Emblem[]>(kovo_man_team)
    const segment = useSelectedLayoutSegments();
    console.log(segment)

    useEffect(() => {
        if (current === 'man') {
            setEmblemArr(prev => kovo_man_team)
        } else {
            setEmblemArr(prev => kovo_woman_team)
        }
    }, [current])
    return (
        <div className='flex w-full justify-around'>
            <div className='flex items-center'>
                <div className="relative w-[110px] h-[35px] ">
                    <Image src={`/img/kovo/kovo_logo.svg`} fill alt='kovo_logo' />
                </div>
                <div className='ml-6 flex items-center gap-4 text-sm'>
                    <span
                        onClick={() => setCurrent(prev => 'man')}
                        className={`cursor-pointer ${current === 'man' ? "text-[#eee]" : "text-[#777]"}`}>남자부
                    </span>
                    <span>|</span>
                    <span
                        onClick={() => setCurrent(prev => 'woman')}
                        className={`cursor-pointer ${current === 'woman' ? "text-[#eee]" : "text-[#777]"}`}>여자부
                    </span>
                </div>
            </div>
            <div className='ml-10 flex gap-4'>
                {emblemArr.map((data) => (
                    <Link key={data.name} href={`/sports/kovo/${teamLink[data.name]}`}>
                        <div 
                            className={`relative w-[60px] h-[60px] p-2 rounded-md cursor-pointer hover:bg-[#444] ${segment.includes(teamLink[data.name]) ? 'bg-[#444]' : ''}`}>
                            <Image src={data.imgUrl} width={50} height={50} alt={`${data.name} logo`} />
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}