import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import { db } from '@/lib/db';


interface PutProps {
    content: string;
    sport: string;
    boardNo: string;
}

// 댓글 작성 메소드.
export async function PUT(req: Request) {
    try {
        const body: PutProps = await req.json();
        const { content, sport, boardNo } = body;
        const session = await getServerSession(authOptions);

        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthorized'}), { status: 401 });
        }
        const comment = await db.footballComments.create({
            data: {
                content,
                authorNo: session.user?.no as number,
                footballBaordNo: parseInt(boardNo)
            }
        });
        return NextResponse.json(comment);
    } catch(err) {
        console.log(`[COMMENT_PUT_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
};

// 댓글 좋아요 메소드.
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { no } = body;
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthorized'}), {status: 401})
        }
        const isLike = await db.footballComments.count({
            where: {
                no: parseInt(no),
                likes: {
                    some: {
                        no: session.user?.no as number
                    }
                }
            }
        });
        if(isLike === 1) {
            // 좋아요 눌렀을 경우 취소.

            await db.footballComments.update({
                where: {
                    no: parseInt(no)
                },
                data: {
                    likes: {
                        disconnect: {
                            no: session.user?.no as number
                        }
                    }
                }
            })
        } else {
            // 0일 경우 좋아요.

            await db.footballComments.update({
                where: {
                    no: parseInt(no)
                },
                data: {
                    likes: {
                        connect: {
                            no: session.user?.no as number
                        }
                    }
                }
            })
        }
        return new NextResponse(JSON.stringify({msg: 'ok'}), {status: 200});
    } catch(err) {
        console.log(`[COMMENT_POST_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}

// 댓글 수정 메소드.
export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { content, no, id } = body;
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthorized'}), { status: 401 });
        }
        if(id !== session.user?.id) {
            return new NextResponse(JSON.stringify({msg: 'Only can modify Comment author'}), { status: 403 });
        }
        const comment = await db.footballComments.update({
            where: {
                no
            },
            data: {
                content,
                isModify: true
            }
        });
        return NextResponse.json(comment);
    } catch(err) {
        console.log(`[COMMENT_PATCH_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}

// 댓글 삭제 메소드.
export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { no, id } = body;
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthorized'}), { status: 401 });
        }
        if(id !== session.user?.id) {
            return new NextResponse(JSON.stringify({msg: 'Only can delete Comment author'}), { status: 403 });
        }
        await db.footballComments.delete({
            where: {
                no
            }
        });
        return new NextResponse(JSON.stringify({msg: 'deleted'}), {status: 200});
    } catch(err) {
        console.log(`[COMMENT_DELETE_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}