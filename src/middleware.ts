import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const sessionRequest = new Request(
    `${request.nextUrl.origin}/api/auth/session`,
    {
      headers: request.headers,
    },
  )
  const sessionResponse = await fetch(sessionRequest)
  const session = await sessionResponse.json()

  if (!session.user) {
    return NextResponse.redirect(
      new URL('/login?callbackUrl=myssg', request.url),
    )
  }

  return NextResponse.next()
}

export const config = { matcher: ['/myssg'] }
