import SportsBoardMain from "@/components/sports/sports-board-main";

interface SportBoardPageLayout {
    children: React.ReactNode
}

const SportBoardPageLayout = ({children}: SportBoardPageLayout) => {
    return (
        <SportsBoardMain children={children}/>
    );
}
 
export default SportBoardPageLayout;