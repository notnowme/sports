'use client'
import { usePathname } from 'next/navigation';
import SportsBoardMain from '@/components/sports/sports-board-main';

const SportsTeamBoard = () => {
    const pathname = usePathname().split('/')
    return (
        <SportsBoardMain sports={pathname[2]}/>
    );
}
 
export default SportsTeamBoard;