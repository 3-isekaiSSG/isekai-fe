import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/login?callbackUrl=myssg', request.url))
}

export const config = {
  matcher: ['/myssg'],
}
