/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { SlArrowDown } from 'react-icons/sl'
import { useRecoilState } from 'recoil'
import { nowSelectDepth, savedOptionAtom } from '@/states/optionAtom'
import { OptionCategoryType } from '@/types/OptionType'
import { CardDetailType, DiscountType } from '@/types/productDataType'
import { OptionDepthModal } from '../BottomSheet/OptionDepthModal'
import Toast from '../Toast'

export function UpdateCount({
  count,
  setCount,
}: {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}) {
  const [toast, setToast] = useState<boolean>(false)

  // TODO:  추가 제거
  const handleMinus = () => {
    setCount((prev) => {
      if (prev <= 1) {
        setToast(true)
        return prev
      }
      return prev - 1
    })
  }
  const handlePlus = () => {
    setCount((prev) => {
      return prev + 1
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
          {count}
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

export function TotalPrice({
  salePrice,
  count,
}: {
  salePrice: number
  count: number
}) {
  return (
    <div className="flex items-center justify-end flex-wrap overflow-hidden w-full h-[68px] leading-none text-[color:var(--m-colors-primary,#ff5452)] text-right box-border pl-0 pr-5 pt-1.5 pb-[5px]">
      <strong className="text-base tracking-[-1px] text-[color:var(--m-colors-gray900)] ml-0 mr-1.5 mt-0.5 mb-0">
        총 합계
      </strong>
      <strong className="text-[25px] font-semibold">
        {(salePrice * count).toLocaleString('ko-KR')}원
      </strong>
    </div>
  )
}

export default function OptionCheck({
  optionAllData,
  productDiscount,
  productData,
}: {
  optionAllData: OptionCategoryType[]
  productDiscount?: DiscountType
  productData?: CardDetailType
}) {
  const salePrice = productDiscount?.discounted
    ? productDiscount.discountPrice
    : productData!.originPrice

  const [count, setCount] = useState<number>(0)
  const [optionData, setOptionData] = useState<OptionCategoryType>()
  const [isToggle, setIsToggle] = useState<boolean>(false)

  const [selectedDepth, setSelectedDepth] = useRecoilState(nowSelectDepth)
  const [savedOptions, setSavedOptions] = useRecoilState(savedOptionAtom)

  const [toast, setToast] = useState<boolean>(false)

  const handleClick = (data: OptionCategoryType) => {
    if (data.depth > selectedDepth + 1) {
      setToast(true)
    } else if (data.depth === selectedDepth + 1) {
      setIsToggle(!isToggle)
      setOptionData(data)
    }
    // TODO: 이전 데이터 선택
    // else {
    //   setIsToggle(!isToggle)
    //   setOptionData(data)
    //   setSelectedDepth((prev) => {
    //     return prev - 1
    //   })
    // }

    // else if (data.depth < selectedDepth + 1) {
    //   setIsToggle(!isToggle)
    //   setSelectedDepth(data.depth - 1)
    //   setOptionName(data.category)
    // }

    //  else if (data.depth < selectedDepth + 1) {
    //   // setSelectedDepth(data.depth - 1)
    //   // setIsToggle(!isToggle)
    //   // setOptionName(data.category)
    //   // setSavedOptions(savedOptions.slice(0, data.depth - 1))
    // }
  }

  useEffect(() => {
    if (optionAllData[0].category === '옵션없음') {
      setCount(1)
    }
  }, [optionAllData])

  if (optionAllData[0].category === '옵션없음')
    return (
      <div className="max-h-[391px] pb-[15px]">
        <div className="overflow-auto max-h-[255px] pt-3 pb-0 px-[15px]">
          <div className="relative bg-[#f8f8f8] box-border pt-3.5 pb-[15px] px-[15px] rounded-lg">
            <div className="text-[color:var(--m-colors-gray900)] text-[13px] tracking-[-0.3px] leading-[17px] break-keep pr-[27px]">
              {productData!.name}
            </div>
            <div className="flex justify-between items-center mt-3">
              <UpdateCount count={count} setCount={setCount} />
              <div className="leading-5 text-[color:var(--m-colors-gray900)] tracking-[-0.5px] text-lg font-semibold">
                {(salePrice * count).toLocaleString('ko-KR')}원
              </div>
            </div>
          </div>
        </div>

        <TotalPrice salePrice={salePrice} count={count} />
      </div>
    )

  return (
    <div className="pb-[15px]">
      <div className="overflow-auto min-h-[255px] pt-3 px-[15px]">
        <div>
          {optionAllData.map((data) => (
            <button
              type="button"
              onClick={() => handleClick(data)}
              key={data.depth}
              className="flex w-full relative h-[42px] box-border border border-neutral-200 bg-[color:var(--m-colors-white)] text-[color:var(--m-colors-gray900)] mt-3 pl-[15px] pr-4 py-0 rounded-[5px] border-solid items-center"
            >
              <span className="overflow-hidden inline-block w-full text-[13px] leading-10 tracking-[-0.3px] align-top whitespace-nowrap text-ellipsis text-left">
                {savedOptions[data.depth - 1]
                  ? `${savedOptions[data.depth - 1].value}`
                  : `선택하세요. (${data.category})`}
              </span>
              <SlArrowDown />
            </button>
          ))}
        </div>

        {/* TODO: 선택한 옵션 상품 */}
        <div className="overflow-auto max-h-[255px] pt-3 pb-0">
          {/* <button type="button">
            <span className="hidden">삭제</span>
            <i>X</i>
          </button> */}
          <div className="relative bg-[#f8f8f8] box-border pt-3.5 pb-[15px] px-[15px] rounded-lg border border-solid border-[color:var(--m-colors-black)]">
            <div className="text-[color:var(--m-colors-gray900)] text-[13px] tracking-[-0.3px] leading-[17px] break-keep pr-[27px]">
              <p>{productData!.name}</p>

              {savedOptions.map((option) => (
                <span key={option.optionsId}>{option.value}</span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-3">
              <UpdateCount count={count} setCount={setCount} />
              <div className="leading-5 text-[color:var(--m-colors-gray900)] tracking-[-0.5px] text-lg font-semibold">
                {(salePrice * count).toLocaleString('ko-KR')}원
              </div>
            </div>
          </div>
        </div>

        <TotalPrice salePrice={salePrice} count={count} />
      </div>

      {isToggle && (
        <OptionDepthModal
          setIsOpen={setIsToggle}
          productCode={productData!.code}
          optionData={optionData}
        />
      )}

      {toast && (
        <Toast
          setToast={setToast}
          message="윗 옵션부터 선택해주세요."
          position="bottom"
        />
      )}
    </div>
  )
}
