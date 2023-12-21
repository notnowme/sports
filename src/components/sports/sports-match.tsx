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
    '강원': 'img/kleague/emblem_K21.png',
    '대전': 'img/kleague/emblem_K10.png',
    '제주': 'img/kleague/emblem_K04.png',
    '광주': 'img/kleague/emblem_K22.png',
    '울산': 'img/kleague/emblem_K01.png',
    '인천': 'img/kleague/emblem_K18.png',
    '대구': 'img/kleague/emblem_K17.png',
    '수원FC': 'img/kleague/emblem_K29.png',
    '서울': 'img/kleague/emblem_K09.png',
    '전북': 'img/kleague/emblem_K05.png',
    '수원삼성': 'img/kleague/emblem_K02.png',
    '포항': 'img/kleague/emblem_K03.png',
    '부산':'img/kleague/emblem_K06.png',
    '김포':'img/kleague/emblem_K36.png',
    'KIA':'img/kbo/emblemF_HT.png',
    'SSG':'img/kbo/emblemF_SK.png',
    'LG twins':'img/kbo/emblemF_LG.png',
    '두산':'img/kbo/emblemF_OB.png',
    'KT wiz':'img/kbo/emblemF_KT.png',
    'NC':'img/kbo/emblemF_NC.png',
    '한화':'img/kbo/emblemF_HH.png',
    '삼성':'img/kbo/emblemF_SS.png',
    '롯데':'img/kbo/emblemF_LT.png',
    '키움':'img/kbo/emblemF_WO.png',
    '삼성화재': 'img/kovo/bluefangs.png',
    '현대캐피탈': 'img/kovo/walkers.png',
    '한국전력': 'img/kovo/vixtorm.png',
    'KB손해보험': 'img/kovo/kbstars.png',
    'OK금융그룹': 'img/kovo/okman.png',
    '우리카드': 'img/kovo/won.png',
    '대한항공': 'img/kovo/jumbos.png',
    '페퍼저축은행': 'img/kovo/peppers.png',
    '흥국생명': 'img/kovo/spiders.png',
    '정관장': 'img/kovo/redsparks.png',
    'IBK기업은행': 'img/kovo/altos.png',
    'GS칼텍스': 'img/kovo/kixx.png',
    '현대건설': 'img/kovo/hillstate.png',
    '한국도로공사': 'img/kovo/hipass.png',
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
                <div className='flex items-center justify-between mb-1'>
                    <div className='flex items-center'>
                        <div className='relative w-[30px] h-[30px] mr-2'>
                            <Image src={`/${teamEmblems[matchTeams[0]]}`} fill alt='logo' />
                        </div>
                        <span>{matchTeams[0]}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='relative w-[30px] h-[30px] mr-2'>
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