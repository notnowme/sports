'use client';
import { useSession } from 'next-auth/react'

const SignLayout = ({children}: {children: React.ReactNode}) => {
    const { status } = useSession();

    if(status === 'authenticated') {
        return <div>로그인한 사람은 접근할 수 없도록 해야함.</div>
    }
    return (
        <div className="flex w-full justify-center">
            {children}
        </div>
    )
}

export default SignLayout