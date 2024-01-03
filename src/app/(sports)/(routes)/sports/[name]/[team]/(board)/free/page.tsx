import SportsBoardMain from '@/components/sports/sports-board-main';

interface IPrams {
    params: {
        name: string;
        team: string;
    }
}

async function getData(team: string, page: string) {
    const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/?team=${team}&page=${page}`, {
        method: 'GET',
        cache: 'no-store'
    });
    if(res.status === 404) {
        // 없는 게시글일 경우 Error
        throw new Error('404');
    }
    return res.json();
};

async function getSearchData(team: string, sc: string, keyword: string) {
    const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/search/?sc=${sc}&keyword=${keyword}&team=${team}&page=1`, {
        method: 'GET',
        cache: 'no-store'
    });
    return res.json();
}
const SportsTeamBoard = async(
    {params, searchParams}:
    {params: {name: string, team: string}, searchParams: any}
) => {

    const {sc, keyword, page} = searchParams;
    if(sc && keyword) {
        const data = await getSearchData(params.team, sc, keyword);
        return (
            <SportsBoardMain data={data.boards} count={data.count} sports={params.name} team={params.team} page={page}/>
        );
    } else {
        const data = await getData(params.team, page);
        return (
            <SportsBoardMain data={data.boards} count={data.count} sports={params.name} team={params.team} page={page}/>
        );

    }

    
}
 
export default SportsTeamBoard;