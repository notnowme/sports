import { NextResponse } from "next/server";
import { db } from '@/lib/db';

// 검색된 모든 게시글 가져오는 메소드.
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') as string);
    const pageSize = 10;
    const skip = (page - 1) * pageSize || 0;

    const sc = searchParams.get('sc') as string; // 제목인지 작성자인지.

    const keyword = searchParams.get('keyword') as string 

    let where = {}
    sc === 'title'
        ? where = {
            team: searchParams.get('team') as string,
            title: {
                contains: keyword
            }
        }
        : where = {
            team: searchParams.get('team') as string,
            author: {
                nick: {
                    contains: keyword
                }
            }
        }

    try {
        const count = await db.footballBoard.count({
            where
        });
        const boards = await db.footballBoard.findMany({
            skip,
            take: pageSize,
            where,
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
                createdAt: 'asc'
            }
        });
        return NextResponse.json({boards, count});
    } catch (err) {
        console.log(`[BOARD_SEARCH_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500});
    }
}
