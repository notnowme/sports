'use client'

import { kbl_matches_map } from '@/data/kbl_matches'
import { kbl_goods } from '@/data/kbl_goods'
import SportMatchContainer from '@/components/sports/sports-match-container'
import SportFreeContainer from '@/components/sports/sports-free-container'
import SportsGoodsContainer from '@/components/sports/sports-goods-container'

interface TeamPageProps {
    teamName: string
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

const SportsKBLTeamMainPage = ({teamName}: TeamPageProps) => {
    if(!teamArr.includes(teamName)) {
        return <div>잘못된 접근</div>
    }
    // some은 하나라도 일치하면 조건 해당되는 걸 반환해주는 배열 함수.
    const teamMatchData =
        kbl_matches_map
        .filter(data =>
            data.matchTeams.some(team =>
                team.includes(teamObj[teamName][0]) || team.includes(teamObj[teamName][1])
            )
        )
    const teamGoodsData = kbl_goods.filter(data => data.team === teamName)

    return (
        <>
            <div className="flex w-full justify-between">
                <SportMatchContainer
                    dataArr={teamMatchData}
                />
                <SportsGoodsContainer
                    dataArr={teamGoodsData}
                />
            </div>
            <SportFreeContainer
                boardTitle='잡담/후기 게시판'
            />
            <SportFreeContainer
                boardTitle='맛집/모집 게시판'
            />
        </>
    )
}
 
export default SportsKBLTeamMainPage;