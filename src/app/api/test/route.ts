import type { NextApiRequest, NextApiResponse } from 'next';
import getDb from '@/config/db';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db'
import { verifyToken } from '@/lib/jwt';

export async function GET(req : NextApiRequest, res : NextApiResponse) {
    console.log('hi');
    try {
        const db = await getDb();
        const [rows] = await db.query("SELECT * FROM Test");
        await db.end();
        return NextResponse.json(rows);
    } catch(err) {
        console.log(`CATCH_ERR`, err);
        return new NextResponse('CATCH ERR', { status: 500 })
    }
}

export async function POST(req: Request) {
    const accessToken = req.headers.get('authorization');
    if(accessToken && verifyToken(accessToken)) {
        return new NextResponse('OK', { status: 200 })
    };
    return new NextResponse('FAIL', { status: 400 });
}