import { DefaultSession } from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string
      refreshToken: string
    } & DefaultSession['user']
  }
}
