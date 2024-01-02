import Image  from 'next/image'

interface TeamPageLayoutProps {
    children: React.ReactNode
    params: {
        team: string
    }
}

const TeamPageLayout = ({children, params}: TeamPageLayoutProps) => {
    return (
        <div className="relative mt-5 flex flex-col w-full max-w-[1280px]">
            {/* <div className='relative w-full h-[500px] bg-[#1D1D1D] mb-10'>
                <Image src='/img/kleague/ulsan/ulsan-01.jpg' fill alt='img'/>
            </div> */}
            {children}
        </div>
    )
}
export default TeamPageLayout