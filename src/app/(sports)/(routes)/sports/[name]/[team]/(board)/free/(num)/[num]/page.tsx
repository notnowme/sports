import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BoardBodyPage from "@/components/board/board-body";
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

interface SportBoardPageProps {
    params: {
        name: string;
        team: string;
        num: string;
    }
}
const SportBoardPage = async({params}: SportBoardPageProps) => {
    const session = await getServerSession(authOptions);
    const isLogin = session ? true : false;
    const data = await getData(params.num, params.team, params.name);
    return <BoardBodyPage data={data} isLogin={isLogin}/> 
}

export default SportBoardPage;