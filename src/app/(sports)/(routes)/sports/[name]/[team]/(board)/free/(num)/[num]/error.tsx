'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
    const router = useRouter();
    const pathname = usePathname().split('/');
    useEffect(() => {
        // router.push(`/${pathname[1]}/${pathname[2]}/${pathname[3]}/${pathname[4]}`);
    },[])
    return (
        <div> 404 Not Found </div>
    )
};

export default ErrorPage;