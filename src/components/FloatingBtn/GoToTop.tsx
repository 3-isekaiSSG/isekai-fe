'use client'

import { useEffect, useState } from 'react'
import { PiArrowUpThin } from 'react-icons/pi'

export default function GoToTop() {
  const [visibleBtn, setVisibleBtn] = useState(false)

  // scroll 이벤트를 감지하고 나타냄
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setVisibleBtn(true)
    } else {
      setVisibleBtn(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    visibleBtn && (
      <button
        className="w-10 h-10 box-border bg-[rgba(255,255,255,0.95)] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] flex items-center justify-center mt-2.5 rounded-[15px] border-[solid] border-[rgba(255,255,255,0.95)]"
        type="button"
        onClick={handleClick}
      >
        <PiArrowUpThin size={20} />
        <span className="text-[0px]">TOP</span>
      </button>
    )
  )
}
