'use client'

import SportsKBLTeamMainPage from '@/components/sports/kbl/sports-kbl-team-main';
import SportsKBOTeamMainPage from '@/components/sports/kbo/sports-kbo-team-main';
import SportsKleagueTeamMainPage from '@/components/sports/kleague/sports-kleague-team-main';
import SportsKOVOTeamMainPage from '@/components/sports/kovo/sports-kovo-team-main';
import { usePathname } from 'next/navigation';

interface TeamPageProps {
    params: {
        team: string
    }
}


const TeamPage = ({params}: TeamPageProps) => {
    const sport = usePathname().split('/')[2]

    return (
        <>
        {sport === 'kbl' && <SportsKBLTeamMainPage teamName={params.team} />}
        {sport === 'kleague' && <SportsKleagueTeamMainPage teamName={params.team} />}
        {sport === 'kbo' && <SportsKBOTeamMainPage teamName={params.team} />}
        {sport === 'kovo' && <SportsKOVOTeamMainPage teamName={params.team} />}
        </>
    )
}

export default TeamPage