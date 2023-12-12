import moment from "moment"

interface BoardItemProps {
    teamImg: string
    title: string
    author: string
    date: Date
}

const MainBoardItem = ({teamImg, title, author, date}: BoardItemProps) => {
    return (
        <div className="flex items-center justify-around h-[40px] p-1 hover:bg-[#333] rounded-md text-[#ddd] ">
            <span className="w-[34px] h-full rounded-full mr-[10px] bg-[#343434]"></span>
            <span className="w-[30%]">{title}</span>
            <span className="w-[25%] text-right">{author}</span>
            <span className="w-[25%] text-right">{moment(date).format('YY. MM. DD')}</span>
        </div>
    );
}

export default MainBoardItem;