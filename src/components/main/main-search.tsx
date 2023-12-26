import { Search } from "lucide-react";

const MainSearch = () => {

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
        </div>
    );
}
 
export default MainSearch;