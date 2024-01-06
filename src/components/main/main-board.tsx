'use client'

import React, { useEffect, useState } from "react";
import MainBoardItem from "./main-board-item";
import SportFreeItem from "../sports/sports-free-item";

const MainBoard = () => {
    const [cat, setCat] = useState('normal');
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const res = await fetch(`/api/board/all?cat=${cat}`, {
                method: 'GET',
                cache: 'no-store'
            });
            const result = await res.json();
            console.log(result);
            setData(result);
        }
        getData();
    },[cat])

    const arr = new Array(6).fill(0)
    return (
        <div className="flex flex-col items-center w-full max-w-[600px] h-[450px] p-[10px] bg-[#1D1D1D] rounded-md">
            <div className="flex w-full justify-around">
                <span className={`text-lg px-[20px] py-[7px] rounded-md ${cat === 'normal' ? 'bg-[#000]' : 'text-[#bbb] bg-[#121212]'} cursor-pointer`}
                    onClick={() => setCat('normal')}
                >
                    같이 만나서 보기
                </span>
                <span className={`text-lg px-[20px] py-[7px] rounded-md ${cat === 'review' ? 'bg-[#000]' : 'text-[#bbb] bg-[#121212]'} cursor-pointer`}
                    onClick={() => setCat('review')}
                >
                    오늘 경기 후기
                </span>
            </div>
            <div className="flex flex-col justify-center w-full h-full mt-[10px]">
                {data && data.map((el: any) => (
                    <React.Fragment key={el.no}>
                        {el.footBoard && (
                            <SportFreeItem
                                data={el.footBoard}
                                sports={el.footBoard.sport}
                                team={el.footBoard.team}
                                page={1}
                                main={true}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
 
export default MainBoard;