import Image from 'next/image'


interface SportsMatchResultProps {
    matchDate: string
    matchTime: string
    matchPlace: string
    matchTeams: string[]
}

const teamEmblems: { [key: string]: string
} = {
    '안양 정관장 레드부스터스': 'img/kbl/emblem-kgc-dark.svg',
    '울산 현대모비스 피버스': 'img/kbl/emblem-hd.svg',
    '서울 삼성 썬더스': 'img/kbl/emblem-ss-dark.svg',
    '고양 소노 스카이거너스': 'img/kbl/emblem-sono.svg',
    '원주 DB 프로미': 'img/kbl/emblem-db.svg',
    '창원 LG 세이커스': 'img/kbl/emblem-lg-dark.svg',
    '서울 SK 나이츠': 'img/kbl/emblem-sk.svg',
    '부산 KCC 이지스': 'img/kbl/emblem-kcc.svg',
    '대구 한국가스공사 페가수스': 'img/kbl/emblem-gas.svg',
    '수원 KT 소닉붐': 'img/kbl/emblem-kt-dark.svg',
    '상무': 'img/kbl/emblem-sangmu.svg',
    'LG': 'img/kbl/emblem-lg-dark.svg',
    'DB': 'img/kbl/emblem-db.svg',
    '현대모비스': 'img/kbl/emblem-hd.svg',
    '한국가스공사': 'img/kbl/emblem-gas.svg',
    'KT': 'img/kbl/emblem-kt-dark.svg',
    'KCC': 'img/kbl/emblem-kcc.svg',
    'SK': 'img/kbl/emblem-sk.svg',
}

const SportsMatchResult = (
    {matchDate, matchPlace, matchTeams, matchTime}: SportsMatchResultProps
) => {
    return (
        <div className='flex flex-col w-[250px] h-[195px] p-4 rounded-md bg-[#343434]'>
            <div className='flex items-center gap-2 text-[12px] text-[#ccc] mb-2'>
                <span>{matchDate} {matchTime}</span>
                <span>|</span>
                <span>{matchPlace}</span>
            </div>
            <div className='mb-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='relative w-[30px] h-[30px]'>
                            <Image src={`/${teamEmblems[matchTeams[0]]}`} fill alt='logo' />
                        </div>
                        <span>{matchTeams[0]}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='relative w-[30px] h-[30px]'>
                            <Image src={`/${teamEmblems[matchTeams[1]]}`} fill alt='logo' />
                        </div>
                        <span>{matchTeams[1]}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between text-[#777] text-[12px] mb-2'>
                <span>경기 예정</span>
            </div>
            <div className='flex items-center justify-around gap-2'>
                <button className='w-[90px] px-[14px] py-[7px] text-sm rounded-md bg-[#00A495] text-[#eee]'>티켓 예매</button>
                <button className='w-[120px] px-[14px] py-[7px] text-sm rounded-md bg-[#1D1D1D] text-[#ccc]'>경기 기록 보기</button>
            </div>
        </div>
    );
}

export default SportsMatchResult;