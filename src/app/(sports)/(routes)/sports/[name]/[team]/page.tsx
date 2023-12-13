import { kbl_matches_map } from '@/data/kbl_matches'
import SportMatchContainer from '@/components/sports/sports-match-container'
import SportFreeContainer from '@/components/sports/sports-free-container'

interface TeamPageProps {
    params: {
        team: string
    }
}
const teamObj: {[key: string]: string[]} = {
    red: ['안양', '정관장'],
    phdebus: ['울산', '현대'],
    thunders: ['삼성', '썬더스'],
    sky: ['고양', '소노'],
    promy: ['원주', 'DB'],
    sakers: ['창원', 'LG'],
    nights: ['SK', '나이츠'],
    egis: ['부산', 'KCC'],
    pegasus: ['대구', '한국가스공사'],
    sonic: ['수원', 'KT'],
    sangmu: ['상무', '상무']
}

const teamArr = [
    'red', 'phdebus', 'thunders', 'sky',
    'promy', 'sakers', 'nights', 'egis',
    'pegasus', 'sonic'
]

const TeamPage = ({params}: TeamPageProps) => {
    if(!teamArr.includes(params.team)) {
        return <div>잘못된 접근</div>
    }
    // some은 하나라도 일치하면 조건 해당되는 걸 반환해주는 배열 함수.
    const teamMatchData =
        kbl_matches_map
        .filter(data =>
            data.matchTeams.some(team =>
                team.includes(teamObj[params.team][0]) || team.includes(teamObj[params.team][1])
            )
        )

    return (
        <div className="mt-10 flex flex-col w-full max-w-[1280px]">
            <div className='w-full h-[200px] bg-[#1D1D1D] mb-10'>
                팀 구단 이미지나 소개할 수 있는 내용들 넣기
            </div>
            <div className="flex w-full justify-between">
                <SportMatchContainer
                    dataArr={teamMatchData}
                />
                <div className='flex flex-col w-full max-w-[400px] p-2 rounded-md bg-[#1D1D1D]'>
                    굿즈 같은 거 보여주기?
                </div>
            </div>
            <SportFreeContainer
                boardTitle='잡담/후기 게시판'
            />
            <SportFreeContainer
                boardTitle='맛집/모집 게시판'
            />
        </div>
    )
}

export default TeamPage