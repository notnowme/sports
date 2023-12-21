interface TeamPageLayoutProps {
    children: React.ReactNode
    params: {
        team: string
    }
}

const TeamPageLayout = ({children, params}: TeamPageLayoutProps) => {
    return (
        <div className="relative mt-5 flex flex-col w-full max-w-[1280px]">
            <div className='w-full h-[300px] bg-[#1D1D1D] mb-10'>
                팀 구단 이미지나 소개할 수 있는 내용들 넣기
            </div>
            {children}
        </div>
    )
}
export default TeamPageLayout