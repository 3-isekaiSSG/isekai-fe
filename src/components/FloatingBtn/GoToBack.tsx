'use client'

import { usePathname, useRouter } from 'next/navigation'
import { PiArrowLeftThin } from 'react-icons/pi'

export default function GoToBack() {
  const router = useRouter()
  const pathName = usePathname()

  const goBack = () => {
    router.back()
  }

  return (
    pathName !== '/' && (
      <button
        className="w-10 h-10 box-border bg-[rgba(255,255,255,0.95)] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] flex items-center justify-center mt-2.5 rounded-[15px] border-[solid] border-[rgba(255,255,255,0.95)]"
        type="button"
        onClick={goBack}
      >
        <PiArrowLeftThin size={20} />
        <span className="text-[0px]">이전 페이지로 돌아가기</span>
      </button>
    )
  )
}
