'use client'

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRecoilState } from 'recoil'
import { animateRightSheetState } from '@/states/SheetAtom'

export function RightSlider({
  children,
  setIsOpen,
}: {
  children: React.ReactNode
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [animate, setAnimate] = useRecoilState<string>(animateRightSheetState)

  const handleClose = () => {
    setAnimate('slide-right')
    setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  useEffect(() => {
    setAnimate('slide-left')
  }, [setAnimate])

  return createPortal(
    <div className="z-[1400] w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
      <div
        className="z-[1400] w-full h-full bg-[color:var(--m-colors-black)] opacity-50"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        className="z-[1500] flex fixed flex-col w-4/5 max-w-[300px] bg-[color:var(--m-colors-white)] shadow-[rgba(0,0,0,0.1)_0px_0px_10px_0px] outline-offset-2 right-0 inset-y-0"
        style={{ animation: `${animate} 0.2s forwards` }}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  )
}
