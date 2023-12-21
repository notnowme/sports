'use client'

import { kbo_matches_map } from '@/data/kbo_matches'
import { kbo_goods_map } from '@/data/kbo_goods'
import SportMatchContainer from '@/components/sports/sports-match-container'
import SportFreeContainer from '@/components/sports/sports-free-container'
import SportsGoodsContainer from '@/components/sports/sports-goods-container'

interface TeamPageProps {
    teamName: string
}
const teamObj: {[key: string]: string[]} = {
    eagles: ['한화'],
    kia: ['KIA'],
    wiz: ['KT wiz'],
    twins: ['LG twins'],
    giants: ['롯데'],
    dinos: ['NC'],
    bears: ['두산'],
    landers: ['SSG'],
    sangmu: ['상무'],
    lions: ['삼성'],
    heroes: ['키움']
}

const teamArr = [
    'eagles', 'kia', 'wiz', 'twins',
    'giants', 'dinos', 'bears', 'landers',
    'sangmu', 'lions', 'heroes'
]

const SportsKBOTeamMainPage = ({teamName}: TeamPageProps) => {
    if(!teamArr.includes(teamName)) {
        return <div>잘못된 접근</div>
    }
    // some은 하나라도 일치하면 조건 해당되는 걸 반환해주는 배열 함수.
    const teamMatchData =
        kbo_matches_map
        .filter(data =>
            data.matchTeams.some(team =>
                team.includes(teamObj[teamName][0])
            )
        )
    const teamGoodsData = kbo_goods_map.filter(data => data.team === teamObj[teamName][0])

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
 
export default SportsKBOTeamMainPage;