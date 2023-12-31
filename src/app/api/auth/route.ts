import { NextResponse } from 'next/server';

import { verifyToken, JwtErrorType, createToken, TokenType } from "@/lib/jwt";
import { db } from '@/lib/db';

// accessToken 검증.
export async function POST(req: Request) {
    const accessToken = req.headers.get('Authorization');
    if(!accessToken) {
        return new NextResponse(JSON.stringify({msg: 'Missing Authorization'}), {status: 200});
    }
    const check = verifyToken(accessToken);
    if(check === JwtErrorType.EXPIRED) {
        return new NextResponse(JSON.stringify({msg: 'Token was expired'}), {status: 200});
    }
    if(check === JwtErrorType.INVAILD) {
        return new NextResponse(JSON.stringify({msg: 'Invaild Token'}), {status: 200});
    }
    if(check === JwtErrorType.VERIFY) {
        return new NextResponse(JSON.stringify({msg: 'Verify Error'}), {status: 200});
    }
    if(typeof check === 'object') {
        return new NextResponse(JSON.stringify({msg: 'ok'}), { status: 200 });
    }
    return new NextResponse(JSON.stringify({msg: 'Something Error'}), {status: 200});
}

// accessToken 생성.
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { userInfo } = body;
        const accessToken = createToken(userInfo, TokenType.Access);
        return NextResponse.json(accessToken);
    } catch(err) {
        console.log(`[AUTH_PUT_ERROR]`, err)
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}

// refreshToken 찾기.
export async function PATCH(req: Request) {
    try {
        const body: {id: string} = await req.json();
        const { id } = body;
        const result = await db.refreshToken.findUnique({
            where: {
                userId: id
            }
        });
        if(!result) {
            return new NextResponse(JSON.stringify({msg: `Cannot found refreshToken with ID - ${id}`}), { status: 401 });
        }
        return NextResponse.json(result);
    } catch(err) {
        console.log(`[AUTH_PATCH_ERROR]`, err)
    }
}