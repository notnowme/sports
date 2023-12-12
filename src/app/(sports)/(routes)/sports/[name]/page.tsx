import SportsKBLMain from "@/components/sports/kbl/sports-kbl-main"

interface SportPageProps {
    params: {
        name: string
    }
}


const SportPage = ({params}: SportPageProps) => {
    if(params.name === 'kbl') {
        return <SportsKBLMain />
    }
    return (
        <></>
    );
}
 
export default SportPage;