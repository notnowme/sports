import SportsBoardMain from "@/components/sports/sports-board-main";

interface SportBoardPageLayout {
    children: React.ReactNode
    params: {
        name: string;
        team: string;
    }
}

const SportBoardPageLayout = ({children, params}: SportBoardPageLayout) => {

    return (
        <SportsBoardMain
            children={children}
            sports={params.name}
        />
    );
};
 
export default SportBoardPageLayout;