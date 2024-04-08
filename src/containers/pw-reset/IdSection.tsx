'use client'

import { useSearchParams } from 'next/navigation'

export default function IdSection() {
  const params = useSearchParams().get('result')

  return (
    <p className="text-lg leading-[1.22] text-center text-[#222] font-['Roboto-Medium']">
      {params}
    </p>
  )
}
