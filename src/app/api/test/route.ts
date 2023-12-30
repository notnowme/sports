import type { NextApiRequest, NextApiResponse } from 'next';
import getDb from '@/config/db';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db'

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