import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcryptjs';
import { createAccessToken } from "@/lib/jwt";

interface SignInBody {
    id: string;
    password: string;
}

// SignInBody를 상속받아서 타입 설정.
interface SignUpBody extends SignInBody {
    nick: string;
    birth: string;
}

// 로그인 할 때 메소드
export async function POST(req: Request) {
    try {
        const body: SignInBody = await req.json();
        const { id, password } = body;
    
        const user = await db.user.findFirst({
            where: {
                id: id
            }
        });
    
        // 해당되는 아이디가 없을 경우.
        if(!user) {
            console.log(`[USER_POST] - CANNOT FOUND USER WITH ID - ${id}`);
            return NextResponse.json({msg: 'no id'});
        }
    
        // bcrypt로 암호화된 패스워드를 확인.
        const check = await bcrypt.compare(password, user.pw);
        if(check) {
            const userInfo = {
                id: user.id,
                nick: user.nick,
                provider: user.provider
            };
            // ID와 NICK을 JWT 정보에 담음. JWT에는 중요 정보 담으면 안 됨.
            const accessToken = createAccessToken(userInfo);
            const result = {
                ...userInfo,
                accessToken
            }
            return NextResponse.json(result);
        } else {
            return NextResponse.json({msg: 'wrong pw'});
        }

    } catch(err) {
        console.error(`[USER_POST_ERR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}

// 회원가입 할 때 메소드
export async function PUT(req: Request) {
    try {
        
        const body: SignUpBody = await req.json();

        const { id, password, nick, birth } = body;
    
        // bcrypt에서 제공해주는 salt 생성.
        const salt = await bcrypt.genSalt();
    
        // 암호화.
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const user = await db.user.create({
            data: {
                id,
                pw: hashedPassword,
                nick,
                birth,
                provider: 'credentials'
            }
        });
    
        const { pw, ...result } = user;
        return NextResponse.json(result);

    } catch(err) {
        console.error(`[USER_PUT_ERR]`, err);
        return new NextResponse(JSON.stringify({msg: 'Internal Server Error'}), { status: 500 })
    }
}