import { SportsHeaderKBL } from "@/components/sports/kbl/sports-header-kbl";
import { SportsHeaderKleague } from "@/components/sports/kleague/sports-header-kleague";
import { SportsHeaderKBO } from '@/components/sports/kbo/sports-header-kbo';
import { SportsHeaderKOVO } from '@/components/sports/kovo/sports-header-kovo';

interface SportHeaderProps {
    sports: string
}
const SportsHeader = ({ sports }: SportHeaderProps) => {
    // 종목을 props로 받아와서 해당되는 종목 구단들 보여주기
    return (
        <div className="relative mt-2 w-full h-[60px] bg-[#292929] flex items-center justify-around p-1">
            {sports === 'kbl' && <SportsHeaderKBL />}
            {sports === 'kleague' && <SportsHeaderKleague />}
            {sports === 'kbo' && <SportsHeaderKBO />}
            {sports === 'kovo' && <SportsHeaderKOVO />}
        </div>
    );
}

export default SportsHeader;