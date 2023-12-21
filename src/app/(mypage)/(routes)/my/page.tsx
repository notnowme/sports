import {
    Camera,
    FileEdit,
    MessageCircle
} from 'lucide-react'

const MyPage = () => {
    // 가입 날짜
    // 마지막 접속 기록
    // 작성 글 수
    // 작성 댓글 수

    return (
        <div className="flex flex-col w-full items-start">
            <div className="flex rounded-md p-2 bg-[#1D1D1D]">
                <div className="relative flex flex-col w-[200px] justify-center items-center">
                    <div className="relative w-[120px] h-[120px] bg-[#292929] rounded-[16px]">

                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <span className="text-base">
                            이름
                        </span>
                        <span className="text-sm text-[#777]">
                            아이디
                        </span>
                    </div>
                    <div className='mt-2 flex gap-x-2'>
                        <button className='p-1 text-sm bg-[#292929] rounded-md'>닉네임 변경</button>
                        <button className='p-1 text-sm bg-[#292929] rounded-md'>비밀번호 변경</button>
                    </div>
                    <Camera className='absolute right-[30px] bottom-[90px] w-7 h-7 bg-[#1D1D1D] rounded-full p-1' />
                </div>
                <div className="border-l border-[#292929]" />
                <div className='flex justify-center'>
                    <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
                        <FileEdit className='w-[70px] h-[70px]' strokeWidth={1} />
                        <span className='text-base'>작성 글 수</span>
                        <span className='mt-2 text-3xl font-semibold'>10</span>
                    </div>
                    <div className='ml-4 flex flex-col justify-center items-center w-[200px] h-full'>
                        <MessageCircle className='w-[70px] h-[70px]' strokeWidth={1} />
                        <span className='text-base'>작성 댓글 수</span>
                        <span className='mt-2 text-3xl font-semibold'>10</span>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex gap-x-8'>
                <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
                    <span className='text-3xl font-semibold mb-2'>나의 최근 작성 글</span>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                </div>
                <div className='flex flex-col px-10 py-6 gap-y-2 rounded-md bg-[#1D1D1D]'>
                    <span className='text-3xl font-semibold mb-2'>나의 최근 작성 댓글</span>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                    <div className='group flex flex-col'>
                        <span className='text-xl group-hover:text-[#00A495] hover:cursor-pointer'>작성 글 제목</span>
                        <span className='text-sm text-[#777]'>23. 12. 24</span>
                    </div>
                </div>
                <div className='flex flex-col px-10 py-6 rounded-md bg-[#1D1D1D] gap-y-4'>
                    <span className='text-3xl font-semibold mb-2'>최근 접속 기록</span>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#d32f2f]'>실패</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#388e3c]'>성공</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='rounded-md px-2 py-1 text-base bg-[#d32f2f]'>실패</span>
                        <span className='rounded-md px-2 py-1 text-base bg-[#292929]'>2023. 12. 24 00:00</span>
                    </div>
                </div>
            </div>
            <div className='mt-20 flex flex-col bg-[#1D1D1D] rounded-md px-10 py-4 items-center mb-20'>
                <span className='text-3xl font-semibold mb-2'>계정 탈퇴</span>
                <span className='text-xl'>한 번 탈퇴하면 복구할 수 없습니다. 신중하게 결정해 주세요.</span>
                <button className='bg-[#d32f2f] mt-10 rounded-md text-xl px-6 py-2'>계정 탈퇴</button>
            </div>
        </div>
    );
}

export default MyPage;