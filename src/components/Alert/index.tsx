'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface AlertProps {
  isOpen: boolean
  close: () => void
  children: React.ReactNode
}

export default function Alert({ isOpen, close, children }: AlertProps) {
  const elRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    elRef.current = document.createElement('div')
    if (elRef.current) {
      document.body.appendChild(elRef.current)
    }

    return () => {
      if (elRef.current) {
        document.body.removeChild(elRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !elRef.current) return null

  return createPortal(
    <div className="fixed w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center left-0 top-0">
      <div className="w-[70%]">
        <div className="bg-white px-4 pb-4 pt-5 rounded-t-lg h-full">
          <p className="text-xs text-gray-500 ml-3">{children}</p>
        </div>
        <button
          type="button"
          className="inline-flex w-full justify-center bg-[#ff5452] px-3 py-2 text-[13px] text-white shadow-sm rounded-b-lg"
          onClick={close}
        >
          확인
        </button>
      </div>
    </div>,
    elRef.current,
  )
}
