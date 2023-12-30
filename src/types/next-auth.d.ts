import NextAuth, { DefaultSession, User } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id: string
      nick: string
      provider: string
      accessToken: string | unknown
    } & DefaultSession['user']
  }
}