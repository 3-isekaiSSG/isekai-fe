'use client'

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { SlArrowDown } from 'react-icons/sl'
import { useRecoilState } from 'recoil'
import { depthBottomSheetState } from '@/states/SheetAtom'

export function OptionDepthModal({
  children,
  setIsOpen,
}: {
  children: React.ReactNode
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}) {
  const [animate, setAnimate] = useRecoilState<string>(depthBottomSheetState)

  const handleClose = () => {
    setAnimate('slide-down')
    setTimeout(() => {
      setIsOpen!(false)
    }, 200)
  }

  useEffect(() => {
    setAnimate('slide-up')
  }, [setAnimate])

  return createPortal(
    <div className="z-[9900] w-screen h-screen fixed left-0 top-0 flex justify-center items-center">
      <div
        className="fixed bottom-0 max-h-[84vh] shadow-[rgba(0,0,0,0.2)_0px_-4px_16px] rounded-t-2xl inset-x-0 bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden"
        style={{ animation: `${animate} 0.2s forwards` }}
      >
        {setIsOpen && (
          <div className="bg-inherit h-[29px] flex items-center justify-center rounded-t-lg">
            <button
              type="button"
              onClick={handleClose}
              aria-label="구매 옵션 닫기"
            >
              <SlArrowDown color="gray" />
            </button>
          </div>
        )}

        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  )
}
