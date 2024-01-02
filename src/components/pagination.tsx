'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface PaginationProps {
    total: number;
    limit: number;
    page: number;
    sports?: string;
    team?: string;
}

const Pagination = ({ total, limit, page, sports, team }: PaginationProps) => {

    // 총 페이지 수.
    const totalPage = Math.ceil(total / limit);
    // 묶음.
    const pageCount = 5;

    const pageGroup = Math.ceil(page / pageCount);

    let lastPage = pageGroup * pageCount;

    let firstpage = lastPage - (pageCount - 1);
    if (firstpage <= 0) firstpage = 1;

    const next = lastPage + 1 > totalPage
        ? lastPage
        : lastPage + 1;
    const prev = firstpage - 1 <= 0
        ? 1
        : firstpage - 1;

    const router = useRouter();

    const Paging = () => {
        const maps = [];
        const last = lastPage > totalPage ? totalPage : lastPage;
        for (let i = firstpage; i <= last; i++) {
            maps.push(
                <button
                    key={i}
                    onClick={() => router.push(`/sports/${sports}/${team}/free?page=${i}`)}
                    className={`${Number(page) === i ? 'text-[#00A495]' : ''} p-1 w-[35px] h-[35px] text-center rounded-md bg-[#292929] hover:text-[#00A495] hover:border hover:border-[#444]`}
                >
                    {i}
                </button>
            )
        }
        return maps;
    }
    return (
        <div className='flex items-center bg-[#292929] rounded-md h-[35px]'>
            {prev > 1 && (
                <button
                    className='p-1 rounded-md bg-[#292929]'
                    onClick={() => router.push(`/sports/${sports}/${team}/free?page=${prev}`)}
                >
                    <ChevronLeft className='w-5 h-5 hover:text-[#00A495]' />
                </button>
            )}
            <Paging />
            {next < totalPage && (
                <button
                    className='p-1 rounded-md bg-[#292929]'
                    onClick={() => router.push(`/sports/${sports}/${team}/free?page=${next}`)}
                >
                    <ChevronRight className='w-5 h-5 hover:text-[#00A495]' />
                </button>
            )
            }
        </div>
    )
};

export default Pagination;