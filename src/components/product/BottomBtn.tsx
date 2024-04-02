'use client'

import { useState } from 'react'
import { OptionModal } from '../BottomSheet/OptionModal'
import LikeBtn from '../Buttons/LikeBtn'

export default function BottomBtn({ code }: { code: number }) {
  const [isToggle, setIsToggle] = useState<boolean>(false)

  if (isToggle)
    return (
      <div className="z-[1200] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
        <div className="flex justify-around h-full -mt-px">
          <button
            type="button"
            className="w-6/12 bg-[color:var(--m-colors-cart)] text-[17px] text-[color:var(--m-colors-white)] tracking-[-0.3px]"
          >
            장바구니
          </button>
          <button
            type="button"
            className="w-6/12 bg-[color:var(--m-colors-primary)] text-[17px] text-[color:var(--m-colors-white)] tracking-[-0.3px]"
          >
            바로구매
          </button>
        </div>
        <OptionModal setIsOpen={setIsToggle}>밑에서 드르륵</OptionModal>
      </div>
    )

  return (
    <div className="z-[99] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        {/* TODO: 데이터 수정 */}
        <div className="w-[54px] flex items-center justify-center">
          <LikeBtn itemId={code} isLiked={false} likeDivision={0} />
        </div>
        <button
          type="button"
          onClick={() => setIsToggle(true)}
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          구매하기
        </button>
      </div>
    </div>
  )
}
