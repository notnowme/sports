import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import { db } from '@/lib/db';

import * as bcrypt from 'bcryptjs';

// 비밀번호 변경 시 확인하는 메소드.
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, password } = body;
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg:'Unauthorized.'}), { status: 401 })
        }
        const user = await db.user.findFirst({
            where: {
                id
            }
        });

        if(!user) {
            return new NextResponse(JSON.stringify({msg:'No User'}), { status: 401 })
        }

        const check = await bcrypt.compare(password, user.pw);
        if(check) {
            return new NextResponse(JSON.stringify({msg: 'veryfied'}), {status: 200})
        } else {
            return new NextResponse(JSON.stringify({msg: 'Cannot update password'}), {status: 400})
        }
    } catch(err) {
        console.log(`[MY_PW_POST_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 });
    }
};

// 비밀번호 변경 메소드.
export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, password } = body;
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg:'Unauthorized.'}), { status: 401 })
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await db.user.update({
            where: {
                id
            },
            data: {
                pw: hashedPassword
            }
        });
        const { pw, ...result } = user;
        return NextResponse.json(result);

    } catch(err) {
        console.log(`[MY_PW_PATCH_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 });
    }
}