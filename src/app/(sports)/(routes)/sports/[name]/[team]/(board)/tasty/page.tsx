import {
    ChevronLeft,
    ChevronRight
} from 'lucide-react'

import SportFreeItem from "@/components/sports/sports-free-item";
const SportsTeamBoard = () => {
    return (
        <div className="flex flex-col w-full p-2">
            <div className="flex items-center gap-x-6 text-base mb-6">
                <div>
                    <span className="text-[white] cursor-pointer">전체</span>
                    <div className="border-t-[2px] border-[#00A495]"/>
                </div>
                <div>
                    <span className="text-[#eee] cursor-pointer">모임</span>
                    <div className="border-t-[2px] border-[#777]"/>
                </div>
                <div>
                    <span className="text-[#eee] cursor-pointer">맛집</span>
                    <div className="border-t-[2px] border-[#777]"/>
                </div>
            </div>
            <div className="flex flex-col w-full p-2 bg-[#1D1D1D] rounded-md">
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
                <SportFreeItem tag='잡담' />
            </div>
            <div className="mt-4 w-full flex items-center justify-end">
                <div className="h-[30px]">
                    <select name="search" id="search"
                        className="h-full mr-2 text-sm text-center rounded-md"
                    >
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                        <option value="author">작성자</option>
                    </select>
                    <input type="text"
                        className="w-[250px] h-full text-sm px-2 p-1 rounded-md outline-none mr-2"
                    />
                    <button className="bg-[#292929] rounded-md h-full px-2 text-sm">검색</button>
                </div>
            </div>
            <div className="mt-10 w-full p-2 flex items-center justify-center gap-x-3">
                <button
                    className='p-1 rounded-md bg-[#292929]'
                >
                    <ChevronLeft className='w-5 h-5 hover:text-[#00A495]'/>
                </button>
                <div className='flex items-center bg-[#292929] rounded-md h-[35px]'>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#444] text-[#00A495]'>1</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>2</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>3</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>4</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>5</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>6</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>7</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>8</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>9</button>
                    <button className='p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]'>10</button>
                </div>
                <button
                    className='p-1 rounded-md bg-[#292929]'
                >
                    <ChevronRight className='w-5 h-5 hover:text-[#00A495]'/>
                </button>
            </div>
        </div>
    );
}
 
export default SportsTeamBoard;