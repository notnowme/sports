import Image from 'next/image'

import { kblTeamArr } from '@/components/sports/data/kblTeam'

export const SportsHeaderKBL = () => {
    return (
        <div className='flex w-full justify-around'>
            <div className="relative w-[50px] h-[50px] ">
                <Image src={`/img/kbl/logo-kbl-white.svg`} fill alt='kbl_logo' />
            </div>
            <div className='ml-10 flex gap-4'>
                {kblTeamArr.map((data) => (
                    <div key={data.name} className='relative w-[50px] h-[50px] p-1 rounded-md cursor-pointer hover:bg-[#343434]'>
                        <Image src={data.imgUrl} fill alt={`${data.name} logo`} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}