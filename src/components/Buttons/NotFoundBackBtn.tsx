'use client'

import { useRouter } from 'next/navigation'

export default function NotFoundBackBtn() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="block bg-[#222] text-white text-[15px] leading-[52px] no-underline max-w-[315px] mt-[30px] mb-0 mx-auto rounded-lg w-full"
    >
      이전 페이지로 돌아가기
    </button>
  )
}
