import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    try {

        const boards = await db.footballBoard.findMany({
            take: 5,
            where: {
                team: searchParams.get('team') as string || undefined,
                NOT: {
                    category: 'circle'
                }
            },
            include: {
                author: {
                    select: {
                        id: true,
                        nick: true,
                        role: true,
                        imageUrl: true
                    }
                },
                likes: {
                    select: {
                        id: true
                    }
                },
                comment: {
                    select: {
                        authorNo: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(boards);
    } catch(err) {
        console.log(`[BOARD_LATEST_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}