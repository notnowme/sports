'use client';

import { Search } from "lucide-react";
import { useSetRecoilState } from 'recoil'
import { mapPos } from "@/lib/atoms/atom";
import { posObj } from "@/data/map_pos";
const MainSearch = () => {
    // 값만 변경시킬 것이므로, SetRecoilState를 씀.
    const setMarker = useSetRecoilState(mapPos);
    
    const handleMarker = (sport: string) => {
        setMarker(posObj[sport]);
    };
    return (
        <div className="relative w-full flex flex-col items-center justify-center mb-[50px]">
            <div className="relative w-full max-w-[768px]">
                <input type="text"
                    className="w-full p-[20px] rounded-md text-lg outline-none border-2 border-[#00A495] bg-[#1D1D1D]"
                    placeholder="지역 및 구단을 검색해 보세요"
                />
                <Search
                    className="absolute top-[50%] right-[30px] translate-y-[-50%] w-[30px] h-[30px] text-[#888]"
                />
            </div>
            <div className="flex gap-x-5">
                <button className="mt-5 p-2 bg-[#292929]"
                    onClick={() => handleMarker('kleague')}
                >k-league</button>
                <button className="mt-5 p-2 bg-[#292929]"
                    onClick={() => handleMarker('kbo')}
                >kbo</button>
            </div>
        </div>
    );
}
 
export default MainSearch;