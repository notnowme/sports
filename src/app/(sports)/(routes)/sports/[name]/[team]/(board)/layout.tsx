import { BoardHeader } from "@/components/board/board-header";

interface SportBoardLayoutProps {
    children: React.ReactNode
}

const SportBoardLayout = ({children}:SportBoardLayoutProps ) => {
    return (
        <div className="w-full flex flex-col max-w-[1280px]">
            <BoardHeader />
            {children}
        </div>
    );
}
 
export default SportBoardLayout;