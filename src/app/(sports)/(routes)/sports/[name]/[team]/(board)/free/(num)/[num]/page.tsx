import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BoardBodyPage from "@/components/board/board-body";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function getData(num: string, team: string) {
    const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/${num}?team=${team}`, {
        method: 'GET',
        cache: 'no-store'
    });
    if(res.status === 404) {
        console.log('찾지 못했다.')
        return null;
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
    const data = await getData(params.num, params.team);
    return <BoardBodyPage data={data} isLogin={isLogin}/> 
}

export default SportBoardPage;