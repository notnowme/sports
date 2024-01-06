import SportsBoardMain from "@/components/sports/sports-board-main";

interface SportBoardPageLayout {
    children: React.ReactNode
}

const SportBoardPageLayout = ({children}: SportBoardPageLayout) => {
    return (
        <>
            {children}
        </>
    );
}
 
export default SportBoardPageLayout;