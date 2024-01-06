import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface BodyType {
    id?: string
    nick?: string
}

export async function POST(req: Request) {
    try {
        const body: BodyType = await req.json();
        const { id, nick } = body;

        let where = {};
        if(id) {
            where = {
                id
            }
        } else {
            where = {
                nick
            }
        }

        const user = await db.user.findFirst({
            where
        });

        if (user) {
            return new NextResponse(JSON.stringify({ msg: 'exists' }), { status: 400 });
        }
        return new NextResponse(JSON.stringify({ msg: 'ok' }), { status: 200 });
        
    } catch (err) {
        console.error(`[SIGN_POST_ERR]`, err);
        return new NextResponse(JSON.stringify({ msg: 'Internal Server Error' }), { status: 500 })
    }
}