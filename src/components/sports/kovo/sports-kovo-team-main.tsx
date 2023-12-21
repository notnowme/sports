'use client'

import { kovo_man_matches, kovo_woman_matches } from '@/data/kovo_matches'
import { kovo_goods_map } from '@/data/kovo_goods'
import SportMatchContainer from '@/components/sports/sports-match-container'
import SportFreeContainer from '@/components/sports/sports-free-container'
import SportsGoodsContainer from '@/components/sports/sports-goods-container'

interface TeamPageProps {
    teamName: string
}
const teamObj: {[key: string]: string[]} = {
    jumbos: ['대한항공', ''],
    walkers: ['현대캐피탈', ''],
    vixtorm: ['한국전력', ''],
    won: ['우리카드', ''],
    okman: ['OK금융그룹', ''],
    stars: ['KB손해보험', ''],
    bluefangs: ['삼성화재', ''],
    hipass: ['한국도로공사', ''],
    spiders: ['흥국생명', ''],
    hillstate: ['현대건설', ''],
    sparks: ['정관장', ''],
    kixx: ['GS칼텍스',''],
    altos: ['IBK기업은행',''],
    peppers: ['페퍼저축은행',''],
}


const teamArr = [
    'jumbos', 'walkers', 'vixtorm', 'won',
    'okman', 'stars', 'bluefangs', 'hipass',
    'spiders', 'hillstate', 'sparks', 'kixx',
    'altos','peppers'
]

const SportsKOVOTeamMainPage = ({teamName}: TeamPageProps) => {
    const kovo_all_matches = kovo_man_matches.concat(kovo_woman_matches)
    if(!teamArr.includes(teamName)) {
        return <div>잘못된 접근</div>
    }
    // some은 하나라도 일치하면 조건 해당되는 걸 반환해주는 배열 함수.
    const teamMatchData =
        kovo_all_matches
        .filter(data =>
            data.matchTeams.some(team =>
                team.includes(teamObj[teamName][0])
            )
        )
    const teamGoodsData = kovo_goods_map.filter(data => data.team === teamObj[teamName][0])

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
 
export default SportsKOVOTeamMainPage;