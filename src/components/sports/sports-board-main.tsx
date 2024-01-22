'use client'

import { useEffect, useRef, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import SportFreeItem from "@/components/sports/sports-free-item";
import Pagination from '../pagination';

import { FootballBoard } from '@prisma/client';
import { BoardWithAuthor } from '@/types/type';

import {
    Pencil
} from 'lucide-react'

interface BoardType extends FootballBoard, BoardWithAuthor {};

interface SportBoardPageLayout {
    data: BoardType[];
    count: number;
    page: number;
    team: string;
    children?: React.ReactNode;
    sports: string;
}

const SportsBoardMain = ({data, children, sports, team, count, page}: SportBoardPageLayout) => {
    const pathname = usePathname().split('/');
    const selectRef = useRef<HTMLSelectElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [categories, setCategories] = useState('all');
    const [filteredData, setFilterData] = useState<BoardType[]>(data);

    useEffect(() => {
        let filtered: BoardType[] = [];
        if(data && categories === 'all') {
            filtered = [...data];
        } else {
            filtered = data?.filter(el => el.category === categories);
        }
        setFilterData(filtered);
    },[categories]);
    
    const handleSearch = () => {
        if(selectRef.current && textRef.current) {
            const query = selectRef.current.value;
            const keyword = textRef.current.value;
            if(!keyword || keyword.length <= 1) {
                alert('두 글자 이상만 검색 가능합니다.');
                return;
            }
            router.push(`/sports/${sports}/${team}/free?sc=${query}&keyword=${keyword}&page=1`)
        }
    };

    return (
        <div className="flex flex-col w-full p-2">
            {children}
            <div className="flex items-center gap-x-6 text-base mb-6">
                <div onClick={() => setCategories('all')}>
                    <span className="text-[white] cursor-pointer">전체</span>
                    <div className={`border-t-[2px] ${categories === 'all' ? 'border-[#00A495]' : 'border-[#777]'}`} />
                </div>
                <div onClick={() => setCategories('normal')}>
                    <span className="text-[#eee] cursor-pointer">잡담</span>
                    <div className={`border-t-[2px] ${categories === 'normal' ? 'border-[#00A495]' : 'border-[#777]'}`} />
                </div>
                <div onClick={() => setCategories('review')}>
                    <span className="text-[#eee] cursor-pointer">후기</span>
                    <div className={`border-t-[2px] ${categories === 'review' ? 'border-[#00A495]' : 'border-[#777]'}`} />
                </div>
            </div>
            <div className="flex flex-col w-full p-2 bg-[#1D1D1D] rounded-md">
                {filteredData?.length > 0 && filteredData.map(data => (
                    <SportFreeItem
                        key={data.no}
                        data={data}
                        sports={sports}
                        team={pathname[3]}
                        page={page}
                    />
                ))}
                {filteredData && filteredData.length === 0 && (
                    <span>작성된 글이 없습니다.</span>
                )}
            </div>
            <div className='mt-4 flex items-center justify-end'>
                <Link
                    href={`/sports/${sports}/${pathname[3]}/${pathname[4]}/write`}
                    className='p-2 bg-[#292929] rounded-md'
                >
                    <Pencil className='w-5 h-5' />
                </Link>
            </div>
            <div className="mt-4 w-full flex items-center justify-end">
                <div className="h-[30px]">
                    <select name="search" id="search" ref={selectRef}
                        className="px-1 h-full mr-2 text-sm text-center rounded-md"
                    >
                        <option value="title" className='text-center'>제목</option>
                        <option value="content" className='text-center'>내용</option>
                        <option value="author" className='text-center'>작성자</option>
                    </select>
                    <input type="text" ref={textRef}
                        className="w-[250px] h-full text-sm px-2 p-1 rounded-md outline-none mr-2"
                    />
                    <button
                        className="bg-[#292929] rounded-md h-full px-2 text-sm"
                        onClick={() => handleSearch()}
                    >
                        검색
                    </button>
                </div>
            </div>
            <div className="mt-10 w-full p-2 flex items-center justify-center gap-x-3">
                    <Pagination
                        total={count} limit={10} page={page}
                        sports={sports} team={team}
                    />
            </div>
        </div>
    );
}

export default SportsBoardMain;