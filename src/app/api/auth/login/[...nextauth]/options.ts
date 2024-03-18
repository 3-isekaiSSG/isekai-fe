import { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
import KakaoProvider from 'next-auth/providers/kakao'

export const options: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     loginId: {
    //       label: 'LoginId',
    //       type: 'text',
    //       placeholder: '아이디',
    //     },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //       placeholder: '비밀번호',
    //     },
    //   },
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   async authorize(credentials, req) {
    //     if (!credentials?.loginId || !credentials?.password) {
    //       return null
    //     }

    //     const res = await fetch('localhost:8000/api/login', {
    //       method: 'POST',
    //       body: JSON.stringify(credentials),
    //       headers: { 'Content-type': 'application/json' },
    //     })

    //     if (res.ok) {
    //       const user = await res.json()
    //       return user
    //     }

    //     return null
    //   },
    // }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // async signIn({ user, profile }) {
    //   if (profile) {
    //     // console.log(profile)
    //     const res = await fetch('http://localhost:3000/auth/oauth2', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         oauthId: user.id,
    //       }),
    //     })

    //     if (res.ok) {
    //       // const user = await res.json()
    //       console.log(user, 'ssg_user')
    //     }

    //     console.log(user, 'not_ssg_user')
    //   }

    //   return true
    // },

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
