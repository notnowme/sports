import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BoardBodyPage from "@/components/board/board-body";
import SportsBoardMain from "@/components/sports/sports-board-main";
import { getServerSession } from "next-auth";

async function getData(num: string, team: string, name: string) {
    const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/${num}?team=${team}`, {
        method: 'GET',
        cache: 'no-store'
    });
    if(res.status === 404) {
        // 없는 게시글일 경우 Error
        throw new Error('404');
    }
    return res.json();
}

async function getAllData(team: string, page: string) {
    const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/?team=${team}&page=${page}&type=free`, {
        method: 'GET',
        cache: 'no-store'
    });
    if(res.status === 404) {
        // 없는 게시글일 경우 Error
        throw new Error('404');
    }
    return res.json();
}

interface SportBoardPageProps {
    params: {
        name: string;
        team: string;
        num: string;
    };
    searchParams: any
}
const SportBoardPage = async(
    {params, searchParams}: SportBoardPageProps
    ) => {
    const page = searchParams.page;
    const session = await getServerSession(authOptions);
    const isLogin = session ? true : false;
    const data = await getData(params.num, params.team, params.name);
    const allData = await getAllData(params.team, page);
    return(
        <>
            <BoardBodyPage data={data} isLogin={isLogin}/>
            <SportsBoardMain
                data={allData.boards}
                count={allData.count}
                sports={params.name}
                team={params.team}
                page={page}
            />
        </>
    )
}

export default SportBoardPage;