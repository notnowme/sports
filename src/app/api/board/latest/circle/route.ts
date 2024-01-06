import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {

        const boards = await db.footballBoard.findMany({
            take: 6,
            where: {
                category: 'circle'
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
        console.log(`[BOARD_LATEST_CIRCLE_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}