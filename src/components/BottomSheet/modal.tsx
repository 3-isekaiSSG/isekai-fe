'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilState } from 'recoil'
import { animateSheetState, bottomSheetState } from '@/states/bottomSheet'

export function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(bottomSheetState)
  const [animate, setAnimate] = useRecoilState<string>(animateSheetState)

  const handleClose = () => {
    setAnimate('slide-down')
    setTimeout(() => {
      if (!isOpen) return
      setIsOpen(false)
    }, 200)
  }

  useEffect(() => {
    setAnimate('slide-up')

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isOpen) return null

  return createPortal(
    <div className="z-[1400] w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
      <div
        className="z-[1400] fixed max-w-screen-sm max-h-[84vh] shadow-[rgba(0,0,0,0.2)_0px_-4px_16px] rounded-t-2xl bottom-0 inset-x-0 bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden"
        style={{ animation: `${animate} 0.2s forwards` }}
      >
        {children}
      </div>
      <div
        className="fixed overscroll-contain w-full h-full bg-[color:var(--m-colors-black\_alpha60)] z-[1300] left-0 top-0"
        onClick={handleClose}
        aria-hidden="true"
      />
    </div>,
    document.getElementById('modal-root')!,
  )
}
