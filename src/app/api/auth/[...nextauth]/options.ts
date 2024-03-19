import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        loginId: {
          label: 'LoginId',
          type: 'text',
          placeholder: '아이디',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '비밀번호',
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials) {
        if (!credentials?.loginId || !credentials?.password) {
          alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
          return null
        }

        //     const res = await fetch('localhost:8000/api/login', {
        //       method: 'POST',
        //       body: JSON.stringify(credentials),
        //       headers: { 'Content-type': 'application/json' },
        //     })

        //     if (res.ok) {
        //       const user = await res.json()
        //       return user
        //     }

        return null
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user = token as unknown
      return session
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth_error',
  },
}
