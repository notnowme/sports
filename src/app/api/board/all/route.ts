import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('cat') as string;
    const userId = searchParams.get('user') as string;
    try {
        const boards = await db.allBoards.findMany({
            take: 6,
            where: {
                OR: [
                    {
                        footBoard: {
                            category,
                        }
                    },
                    {
                        baseBoard: {
                            category,
                        }
                    }
                ]
            },
            include: {
                footBoard: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                nick: true
                            }
                        },
                        comment: {
                            select: {
                                no: true,
                                content: true,
                                createdAt: true
                            }
                        }
                    }
                },
                baseBoard: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                nick: true
                            }
                        },
                        comment: {
                            select: {
                                no: true,
                                content: true,
                                createdAt: true
                            }
                        }
                    }
                },
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(boards)
    } catch(err) {
        console.log(`[BOARD_ALL_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internval Server Error'}), { status: 500 })
    }
}

export async function POST(req: Request) {
    const body = await req.json();
    const { id } = body;
    try {
        const boards = await db.allBoards.findMany({
            take: 6,
            where: {
                OR: [
                    {
                        footBoard: {
                            author: {
                                id
                            }
                        }
                    },
                    {
                        baseBoard: {
                            author: {
                                id
                            }
                        }
                    }
                ]
            },
            include: {
                footBoard: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                nick: true
                            }
                        },
                        comment: {
                            select: {
                                no: true
                            }
                        }
                    }
                },
                baseBoard: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                nick: true
                            }
                        },
                        comment: {
                            select: {
                                no: true
                            }
                        }
                    }
                },
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        const comments = await db.allComments.findMany({
            take: 6,
            where: {
                OR: [
                    {
                        footComment: {
                            author: {
                                id
                            }
                        }
                    },
                ]
            },
            include: {
                footComment: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                nick: true
                            }
                        },
                        footballBoard: {
                            select: {
                                team: true,
                                no: true
                            }
                        }
                    },
                },
            }
        })
        return NextResponse.json({boards, comments});
    } catch(err) {
        console.log(`[BOARD_ALL_GET_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internval Server Error'}), { status: 500 })
    }
}