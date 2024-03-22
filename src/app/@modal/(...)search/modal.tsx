'use client'

import React, { type ElementRef, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  // 모달이 열릴 때 body의 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const onDismiss = () => {
    router.back()
  }

  return createPortal(
    <div className="absolute w-screen h-screen flex justify-center items-center z-[1000] left-0 top-0">
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        className=" w-full max-w-full h-full max-h-full bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden"
      >
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  )
}
