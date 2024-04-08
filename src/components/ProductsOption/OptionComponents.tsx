'use client'

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useRecoilState, useRecoilValue } from 'recoil'
import { postOptionIdCountAtom } from '@/states/optionAtom'
import Toast from '../Toast'

export function UpdateCount() {
  const [toast, setToast] = useState<boolean>(false)
  const [optionCount, setOptionCount] = useRecoilState(postOptionIdCountAtom)

  const handleMinus = () => {
    setOptionCount((prev) => {
      if (prev.count === 1) {
        setToast(true)
        return prev
      }
      return {
        ...prev,
        count: prev.count - 1,
      }
    })
  }

  const handlePlus = () => {
    setOptionCount((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      }
    })
  }

  return (
    <div className="inline-block relative min-w-[117px] text-center align-top py-0">
      <div className="relative h-[30px] w-full flex justify-between bg-[color:var(--m-colors-white)] text-center box-border px-2 py-0">
        <button
          type="button"
          className="left-0  p-1 top-0"
          onClick={handleMinus}
        >
          <span className="hidden">주문수량빼기</span>
          <FiMinus />
        </button>

        <span className="hidden">현재수량</span>
        <span className="flex text-[color:var(--m-colors-gray900)] items-center">
          {optionCount.count}
        </span>

        <button
          type="button"
          className="right-0  p-1 top-0"
          onClick={handlePlus}
        >
          <span className="hidden">주문수량더하기</span>
          <FiPlus />
        </button>
      </div>
      {toast && (
        <Toast
          setToast={setToast}
          message="1회 최소 구매 가능한 수량은 1개입니다."
          position="bottom"
        />
      )}
    </div>
  )
}

export function TotalPrice({ salePrice }: { salePrice: number }) {
  const optionCount = useRecoilValue(postOptionIdCountAtom)

  return (
    <div className="flex items-center justify-end flex-wrap overflow-hidden w-full h-[68px] leading-none text-[color:var(--m-colors-primary,#ff5452)] text-right box-border pl-0 pr-5 pt-1.5 pb-[5px]">
      <strong className="text-base tracking-[-1px] text-[color:var(--m-colors-gray900)] ml-0 mr-1.5 mt-0.5 mb-0">
        총 합계
      </strong>
      <strong className="text-[25px] font-semibold">
        {(salePrice * optionCount.count).toLocaleString('ko-KR')}원
      </strong>
    </div>
  )
}
