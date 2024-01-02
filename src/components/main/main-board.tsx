import React from "react";
import MainBoardItem from "./main-board-item";
import SportFreeItem from "../sports/sports-free-item";

const MainBoard = () => {
    const arr = new Array(6).fill(0)
    return (
        <div className="flex flex-col items-center w-full max-w-[600px] h-[450px] p-[10px] bg-[#1D1D1D] rounded-md">
            <div className="flex w-full justify-around">
                <span className="text-lg px-[20px] py-[7px] rounded-md bg-[#000]">같이 만나서 보기</span>
                <span className="text-lg px-[20px] py-[7px] rounded-md text-[#bbb] bg-[#121212]">오늘 경기 후기</span>
            </div>
            <div className="flex flex-col justify-center w-full h-full mt-[10px]">
                {arr.map((data, index) => (
                    <React.Fragment key={index}>
                        {/* <SportFreeItem tag='잡담' /> */}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
 
export default MainBoard;