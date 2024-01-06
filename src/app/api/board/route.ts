import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import { db } from '@/lib/db';

interface WriteProps {
    category: string;
    title: string;
    content: string;
    team: string;
    type: string;
}

// 모든 게시글 가져오는 메소드.
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') as string);
    const pageSize = 10;
    const skip = (page - 1) * pageSize || 0;
    const type = searchParams.get('type') as string;

    try {
        const count = await db.footballBoard.count({
            where: {
                team: searchParams.get('team') as string || undefined
            }
        });
        const boards = await db.footballBoard.findMany({
            skip,
            take: pageSize,
            where: {
                team: searchParams.get('team') as string || undefined,
                board: type
            },
            include: {
                author: {
                    select: {
                        id: true,
                        nick: true,
                        role: true
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
        return NextResponse.json({boards, count});
    } catch(err) {
        console.log(`[BOARD_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}


// 게시글 작성 메소드.
export async function PUT(req: Request) {
    try {
        const body: WriteProps = await req.json();
        const { category, title, content, team, type } = body;
        const session = await getServerSession(authOptions);

        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthroized'}), { status: 401})
        }
        const board = await db.footballBoard.create({
            data: {
                category,
                team,
                title,
                content,
                authorNo: session.user?.no as number,
                board: type
            }
        });

        return NextResponse.json(board);
    } catch(err) {
        console.log(`[BOARD_PUT_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
};

// 게시글 삭제 메소드.
export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { no, id } = body;
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthroized'}), { status: 401})
        }
        if(session.user?.id !== id) {
            return new NextResponse(JSON.stringify({msg: 'Only can delete Board author'}), { status: 403})
        }
        await db.footballBoard.delete({
            where: {
                no
            }
        });
        return new NextResponse(JSON.stringify({msg: 'deleted'}), { status: 200 });
    } catch(err) {
        console.log(`[BOARD_DELETE_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}

