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
    if(params.name === 'kbl') {
        return <SportsKBLMain />
    }
    if(params.name === 'kleague') {
        return <SportsKleagueMain />
    }
    if(params.name === 'kbo') {
        return <SportsKBOMain />
    }
    if(params.name === 'kovo') {
        return <SportsKOVOMain />
    }
    return (
        <></>
    );
}
 
export default SportPage;