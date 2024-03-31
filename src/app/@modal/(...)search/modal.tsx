'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilValue } from 'recoil'
import { searchModalState } from '@/states/searchAtom'

export function Modal({ children }: { children: React.ReactNode }) {
  const isOpen = useRecoilValue(searchModalState)

  // 모달이 열릴 때 body의 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
