import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import { db } from '@/lib/db';

export async function POST() {
    try {
        const session = await getServerSession(authOptions);

        if(!session) {
            return new NextResponse(JSON.stringify({msg:'Unauthorized.'}), { status: 403 })
        }

        const id = session.user?.id;
    
        const user = await db.user.findFirst({
            where: {
                id
            },
            include: {
                free: true,
                comments: true,
            }
        });

        if(!user) {
            return new NextResponse(JSON.stringify({msg: 'No USER'}), { status: 401 });
        }
        
        const {pw, ...result} = user;
        return NextResponse.json(result);
    } catch(err) {
        console.log(`[MY_POST_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 });
    }
}