import { DefaultSession } from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string
      refreshToken: string
    } & DefaultSession['user']
  }

  interface User {
    accessToken: string
    refreshToken: string
  }
}
