import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server";
import { db } from '@/lib/db';

// 유저 정보 가져오기.
export async function POST() {
    try {
        const session = await getServerSession(authOptions);

        if(!session) {
            return new NextResponse(JSON.stringify({msg:'Unauthorized.'}), { status: 401 })
        }

        const id = session.user?.id;
    
        const user = await db.user.findFirst({
            where: {
                id
            },
            include: {
                free: {
                    take: 6,
                    orderBy: {
                        createdAt: 'asc'
                    },
                    
                },
                comments: {
                    take: 6,
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        });

        if(!user) {
            return new NextResponse(JSON.stringify({msg: 'No USER'}), { status: 401 });
        }
        
        const {pw, ...result} = user;
        return NextResponse.json(result);
    } catch(err) {
        console.log(`[MY_POST_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 });
    }
};

// 유저 정보 변경.
export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, nick, type } = body;
        
        const session = await getServerSession(authOptions);
        if(!session) {
            return new NextResponse(JSON.stringify({msg:'Unauthorized.'}), { status: 401 })
        }

        if(session.user?.id !== id) {
            return new NextResponse(JSON.stringify({msg:'Only can modify User Info own'}), { status: 401 })
        }


        if(type === 'nick') {
            const chk = await db.user.count({
                where: {
                    nick
                }
            });
            if(chk === 1) {
                return new NextResponse(JSON.stringify({msg:'Exists Nick'}), { status: 401 })
            }
            const user = await db.user.update({
                where: {
                    id
                },
                data: {
                    nick
                }
            });
            return new NextResponse(JSON.stringify({msg: 'ok'}), {status: 200});
        }
    } catch(err) {
        console.log(`[MY_PATCH_ERROR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 });
    }
}