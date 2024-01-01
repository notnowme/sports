import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface GetProps {
    params: {
        num: string;
        team: string;
    }
}

export async function GET(req: Request, { params }: GetProps) {
    const { searchParams } = new URL(req.url);
    try {
        const board = await db.footballBoard.findUnique({
            where: {
                no: parseInt(params.num),
                team: searchParams.get('team') as string
            },
            include: {
                author: {
                    select: {
                        id: true,
                        nick: true,
                        role: true
                    }
                },
                comment: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                nick: true,
                                role: true
                            }
                        }
                    }
                },
                likes: {
                    select: {
                        id: true,
                        nick: true,
                        role: true
                    }
                }
            }
        });
        if(!board) {
            return new NextResponse(JSON.stringify({msg: 'Cannot find board with No'}), { status: 404 })
        }
        return NextResponse.json(board);
    } catch(err) {
        console.log(`[BOARDNUM_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internval Server Error'}), { status: 500 })
    }
}