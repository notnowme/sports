import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

interface MyPageLayoutProps {
    children: React.ReactNode
}

const MyPageLayout = async({children}: MyPageLayoutProps) => {
    const session = await getServerSession(authOptions);

    if(!session) {
        return <div>로그인하지 않아 볼 수 없음.</div>
    }
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth`, {
        method: 'POST',
        headers: {
            'Authorization': session.user?.accessToken as string
        }
    });
    if(res.status !== 200) {
        return <div>인증되지 않아 볼 수 없음.</div>
    }
    return (
        <div className="w-full max-w-[1280px] mt-10 flex p-2">
            {children}
        </div>
    );
}
 
export default MyPageLayout;