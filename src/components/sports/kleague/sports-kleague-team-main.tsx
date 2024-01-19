'use client'

import { kleague_matches_map } from '@/data/kleague_matches'
import { kleage_goods_map } from '@/data/kleague_goods'
import SportMatchContainer from '@/components/sports/sports-match-container'
import SportFreeContainer from '@/components/sports/sports-free-container'
import SportsGoodsContainer from '@/components/sports/sports-goods-container'

interface TeamPageProps {
    teamName: string
}
const teamObj: {[key: string]: string[]} = {
    k1_ulsan: ['울산', ''],
    k1_pohang: ['포항', ''],
    k1_gwangju: ['광주', ''],
    k1_jeonbuk: ['전북', ''],
    k1_incheon: ['인천', ''],
    k1_daegu: ['대구', ''],
    k1_seoul: ['서울', ''],
    k1_daejeon: ['대전', ''],
    k1_jeju: ['제주', ''],
    k1_gangwon: ['강원', ''],
    k1_suwonfc: ['수원FC', ''],
    k1_gimcheon: ['김천상무',''],
}

const teamArr = [
    'k1_ulsan', 'k1_pohang', 'k1_gwangju', 'k1_jeonbuk',
    'k1_incheon', 'k1_daegu', 'k1_seoul', 'k1_daejeon',
    'k1_jeju', 'k1_gangwon', 'k1_suwonfc', 'k1_gimcheon'
]

const SportsKleagueTeamMainPage = ({teamName}: TeamPageProps) => {
    if(!teamArr.includes(teamName)) {
        return <div>잘못된 접근</div>
    }
    // some은 하나라도 일치하면 조건 해당되는 걸 반환해주는 배열 함수.
    const teamMatchData =
        kleague_matches_map
        .filter(data =>
            data.matchTeams.some(team =>
                team.includes(teamObj[teamName][0])
            )
        )
    const teamGoodsData = kleage_goods_map.filter(data => data.team === teamObj[teamName][0])

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
                sports='kleague'
                type='free'
                team={teamName}
            />
            <SportFreeContainer
                boardTitle='맛집/모집 게시판'
                sports='kleague'
                type='tasty'
                team={teamName}
            />
        </>
    )
}
 
export default SportsKleagueTeamMainPage;