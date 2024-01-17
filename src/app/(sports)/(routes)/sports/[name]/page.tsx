import SportsKBLMain from "@/components/sports/kbl/sports-kbl-main"
import SportsKBOMain from "@/components/sports/kbo/sports-kbl-main"
import SportsKleagueMain from "@/components/sports/kleague/sports-kleague-main"
import SportsKOVOMain from "@/components/sports/kovo/sports-kovo-main"

interface SportPageProps {
    params: {
        name: string
    }
}

const SportPage = ({params}: SportPageProps) => {
    return (
        <>
            {params.name === 'kbl' && <SportsKBLMain />}
            {params.name === 'kleague' && <SportsKleagueMain />}
            {params.name === 'kbo' && <SportsKBOMain />}
            {params.name === 'kovo' && <SportsKOVOMain />}
        </>
    );
}
 
export default SportPage;