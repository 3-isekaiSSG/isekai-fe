'use client'

import { useRouter } from 'next/navigation'

export default function HeaderBackBtn() {
  const router = useRouter()

  return (
    <button
      className="flex items-center justify-center w-8 h-full"
      type="button"
      onClick={() => router.back()}
    >
      <span className="text-[0px]">이전 페이지</span>
      <svg
        className="w-6 h-6 leading-[1em] text-[color:var(--m-colors-current)]"
        viewBox="0 0 24 24"
        focusable="false"
        name="ArrowLeftIcon"
      >
        <path
          d="M21.5999 11.4H4.43991L11.2799 4.67997L10.3199 3.71997L2.15991 12L10.3199 20.28L11.2799 19.32L4.43991 12.6H21.5999V11.4Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
