import SportsBoardMain from "@/components/sports/sports-board-main";
import { useRouter } from "next/router";
interface SportBoardPageLayout {
    children: React.ReactNode
    params: {
        name: string;
        team: string;
    };
    searchParams: any
}

// async function getData(team: string, page: string) {
//     const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/?team=${team}&page=${page}`, {
//         method: 'GET',
//         cache: 'no-store'
//     });
//     if(res.status === 404) {
//         // 없는 게시글일 경우 Error
//         throw new Error('404');
//     }
//     return res.json();
// }

const SportBoardPageLayout = async(
    {params, searchParams, children}:
    {params: {name: string, team: string}, searchParams: any, children:React.ReactNode}
) => {
    // const router = useRouter();
    // console.log(router.query);
    // console.log(searchParams)
    // const page = searchParams?.page;
    // const data = await getData(params.team, page);
    return (
        <>
            {children}
        </>
    );
};
 
export default SportBoardPageLayout;