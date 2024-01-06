import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

interface GetProps {
    params: {
        num: string;
    }
}
interface PatchProps {
    params: {
        no: string
    }
}
interface PatchBody {
    no: string;
    type: 'like' | 'modify';
    id?: string;
    category?: string;
    title?: string;
    content?: string;
    team?: string;
}
// 번호 게시글 가져오는 메소드.
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
                        role: true,
                        imageUrl: true
                    }
                },
                comment: {
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

// 번호 게시글 수정.
export async function PATCH(req: Request, { params }: PatchProps & GetProps) {
    try {
        const body: PatchBody = await req.json();
        const { no, type, category, content, team, title, id } = body;
        const { searchParams } = new URL(req.url);
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg: 'Unauthorized'}), {status: 401})
        }
        if(type === 'like') {
            const isLike = await db.footballBoard.count({
                where: {
                    no: parseInt(no),
                    likes: {
                        some: {
                            no: session.user?.no as number,
                        }
                    }
                }
            });
            if(isLike === 1) {
                // 이미 좋아요를 눌렀을 경우 취소.
    
                await db.footballBoard.update({
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
                });
            } else {
                // 0일 경우 아직 좋아요를 하지 않은 글.
    
                await db.footballBoard.update({
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
                });
            }
            return new NextResponse(JSON.stringify({msg: 'ok'}), {status: 200});
        } else {
            if(session.user?.id !== id) {
                return new NextResponse(JSON.stringify({msg: 'Only can modify Board author'}), { status: 400 })
            }
            const board = await db.footballBoard.update({
                where: {
                    no: parseInt(params.num),
                    team: searchParams.get('team') as string,
                },
                data: {
                    category,
                    content,
                    title,
                    isModify: true
                }
            });
            return new NextResponse(JSON.stringify({msg: 'ok'}), { status: 200});
        }
    } catch(err) {
        console.log(`[BOARDNUM_PATCH_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internval Server Error'}), { status: 500 })
    }
}