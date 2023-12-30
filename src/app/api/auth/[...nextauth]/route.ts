import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const handler = NextAuth({
    providers: [
        CredentialsProvider({ // 회원가입 메소드
            name: 'Credentials',
            credentials: {
                id: { label: '아이디', type: 'text', placeholder: '아이디를 입력하세요'},
                password: { label: '비밀번호', type: 'password' }
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: credentials?.id,
                            password: credentials?.password
                        })
                    });
                    const user = await res.json();
                    if(user.msg) {
                        // msg에 내용이 있을 경우 에러를 발생시켜서 핸들링.
                        throw new Error(`${user.msg}`)
                    } else {
                        return user;
                    }
                } catch(error) {
                    if(error instanceof Error) {
                        throw new Error(`${error.message}`);
                    }
                }
            },
        })
    ],

    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token}) {
            session.user = token as any;
            return session;
        }
    },

    pages: {
        signIn: '/signin'
    },
});

export { handler as GET, handler as POST }