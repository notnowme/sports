import SportsBoardMain from "@/components/sports/sports-board-main";

interface SportBoardPageLayout {
    children: React.ReactNode
    params: {
        name: string;
        team: string;
    }
}

async function getData(team: string) {
    const res = await fetch(`${[process.env.NEXTAUTH_URL]}/api/board/?team=${team}`, {
        method: 'GET',
        cache: 'no-store'
    });
    if(res.status === 404) {
        // 없는 게시글일 경우 Error
        throw new Error('404');
    }
    return res.json();
}

const SportBoardPageLayout = async({children, params}: SportBoardPageLayout) => {
    console.log(params, '-----a-------');
    const data = await getData(params.team);
    return (
        <SportsBoardMain
            data={data}
            children={children}
            sports={params.name}
        />
    );
};
 
export default SportBoardPageLayout;