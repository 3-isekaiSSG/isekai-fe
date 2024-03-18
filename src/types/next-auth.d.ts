import { DefaultSession } from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      token: string
      name: string
      email: string
      uuid: string
    } & DefaultSession['user']
  }
}
