'use client';

import { SessionProvider } from 'next-auth/react';



// NextAuth에서 제공하는 세션을 프로젝트 전역에서 쓸 수 있게 해주는 프로바이더.
const NextSessionProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
};

export default NextSessionProvider;