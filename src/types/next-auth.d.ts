import NextAuth, { DefaultSession, User } from 'next-auth'
import { UserRole } from '@prisma/client'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      no: number;
      id: string;
      nick: string;
      provider: string;
      accessToken: string | unknown;
      role: UserRole;
    } & DefaultSession['user']
  }
}