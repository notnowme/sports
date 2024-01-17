import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const SignLayout = async({children}: {children: React.ReactNode}) => {
    const session = await getServerSession(authOptions);

    if(session) {
        return <div>로그인한 사람은 접근할 수 없도록 해야함.</div>
    }
    return (
        <div className="flex w-full justify-center">
            {children}
        </div>
    )
}

export default SignLayout