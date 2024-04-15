'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function MiniFooter() {
  const { data: session } = useSession()
  const logOut = () => {
    signOut()
  }

  return (
    <footer className="bg-[#555] flex justify-center pt-[30px] pb-[170px]">
      <ul className="flex">
        <li className="text-[#cccccc] text-xs leading-8 pr-2.5 after:content-['|'] after:pl-2.5">
          고객센터
        </li>
        <li className="text-[#cccccc] text-xs leading-8 pr-2.5 after:content-['|'] after:pl-2.5">
          공지사항
        </li>
        <li className="text-[#cccccc] text-xs leading-8 pr-2.5 after:content-['|'] after:pl-2.5">
          입점상담
        </li>

        <li className="text-[#cccccc] text-xs leading-8 pr-2.5">
          {session ? (
            <Link href="/" onClick={logOut} scroll={false}>
              로그아웃
            </Link>
          ) : (
            <Link href="/login" scroll={false}>
              로그인
            </Link>
          )}
        </li>
      </ul>
    </footer>
  )
}
