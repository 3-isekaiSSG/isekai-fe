'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilState } from 'recoil'
import { JoinState } from '@/states/joinAtom'

export function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useRecoilState(JoinState)

  useEffect(() => {
    setIsOpen(false)
  }, [setIsOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="absolute w-screen h-screen flex justify-center items-center z-[1000] left-0 top-0">
      <div className=" w-full max-w-full h-full max-h-full bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  )
}
