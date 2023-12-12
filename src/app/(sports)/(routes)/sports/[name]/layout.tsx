import SportsHeader from "@/components/sports/sports-header"

interface SportLayoutProps {
    children: React.ReactNode
    params: {
        name: string
    }
}

const SportPage = ({children, params}: SportLayoutProps) => {
    const sports = ['kbl', 'kbo', 'kleague', 'kovo']

    if(!sports.includes(params.name)) {
        // 4종목 이외의 주소로 접근하면 다른 데로 넘기기.
        return <div>잘못된 접근</div>
    }

    return (
        <div className="flex flex-col w-full justify-center items-center mb-20">
            <SportsHeader sports={params.name} />
            {children}
        </div>
    );
}
 
export default SportPage;