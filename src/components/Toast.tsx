'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function Toast({
  message,
  setToast,
  position,
}: {
  message: string
  setToast: Dispatch<SetStateAction<boolean>>
  position: 'top' | 'bottom'
}) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)

      setTimeout(() => {
        setToast(false)
      }, 500)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [setToast])

  return (
    <div
      className={`
      fixed z-[1500] h-11 w-full flex items-center justify-center left-0
      ${position === 'bottom' ? 'bottom-2.5 animate-[slide-top_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]' : 'top-2.5 animate-[slide-bottom_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]'} ${isVisible ? '' : 'animate-[fade-out_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]'}
      `}
    >
      <div className="bg-[color:var(--m-colors-gray800)] opacity-80 w-[90%] h-full flex items-center justify-center rounded-[10px]">
        <p className="text-sm font-normal text-white">{message}</p>
      </div>
    </div>
  )
}
