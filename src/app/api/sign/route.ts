import { NextResponse } from "next/server";
import { db } from "@/lib/db";

interface BodyType {
    id: string;
}

export async function POST (req: Request) {
    const body: BodyType = await req.json();
    const { id } = body;

    const user = await db.user.findFirst({
        where: {
            id
        }
    });

    if(user) {
        return new NextResponse(JSON.stringify({msg:'exists id'}), { status: 400 });
    }
    return new NextResponse(JSON.stringify({msg:'ok'}), { status: 200 });
}