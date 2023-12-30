'use client'

import { useSession } from "next-auth/react";

interface MyPageLayoutProps {
    children: React.ReactNode
}

const MyPageLayout = ({children}: MyPageLayoutProps) => {

    const { status } = useSession();

    if(status === 'unauthenticated') {
        return <div>로그인하지 않아서 볼 수 없는 페이지.</div>
    }
    return (
        <div className="w-full max-w-[1280px] mt-10 flex p-2">
            {children}
        </div>
    );
}
 
export default MyPageLayout;