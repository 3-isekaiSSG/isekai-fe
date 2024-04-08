/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import {
  nowSelectDepth,
  postOptionIdCountAtom,
  lastOptionAtom,
  postOptionsIdCountAtom,
} from '@/states/optionAtom'
import { ChildOptionsType, OptionCategoryType } from '@/types/OptionType'
import { CardDetailType, DiscountType } from '@/types/productDataType'
import { getLastOptions } from '@/utils/optionApi'
import Toast from '../Toast'
import { TotalPrice, UpdateCount } from './OptionComponents'
import { OptionDepthModal } from './OptionDepthModal'

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

  const [toast, setToast] = useState<boolean>(false)
  const [isToggle, setIsToggle] = useState<boolean>(false)

  // 하위 카테고리 괄호에 뜨는 값
  const [optionData, setOptionData] = useState<OptionCategoryType>()
  const [selectedOption, setSelectedOption] = useState<ChildOptionsType[]>()

  // 선택해야 할 뎁스
  const [selectedDepth, setSelectedDepth] = useRecoilState(nowSelectDepth)
  // 저장하는 마지막 options값
  const lastOption = useRecoilValue(lastOptionAtom)
  const resetLastOption = useResetRecoilState(lastOptionAtom)

  // TODO: 백에 보낼거
  const [optionsCount, setOptionsCount] = useRecoilState(postOptionsIdCountAtom)

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
    if (selectedDepth === optionAllData.length) {
      const existingOptionIndex = optionsCount.findIndex(
        (option) => option.optionsId === lastOption.optionsId,
      )

      if (existingOptionIndex !== -1) {
        const newOptionsCount = [...optionsCount]
        newOptionsCount[existingOptionIndex] = {
          ...newOptionsCount[existingOptionIndex],
          count: newOptionsCount[existingOptionIndex].count + 1,
        }
        setOptionsCount(newOptionsCount)
      } else {
        setOptionsCount([
          ...optionsCount,
          { optionsId: lastOption.optionsId, count: 1 },
        ])
      }

      setSelectedDepth(0)
      resetLastOption()
    }
    console.log(optionsCount)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDepth])

  useEffect(() => {
    const fetchData = async () => {
      if (lastOption) {
        const res = await getLastOptions(lastOption?.optionsId)
        setSelectedOption(res.reverse())
        console.log(res.reverse())
      }
    }
    fetchData()
  }, [lastOption])

  return (
    <div className="pb-[15px]">
      <div className="pt-3 px-[15px]">
        <div className="overflow-auto max-h-[255px]">
          <div>
            {optionAllData.map((data) => (
              <button
                type="button"
                onClick={() => handleClick(data)}
                key={data.depth}
                className="flex w-full relative h-[42px] box-border border border-neutral-200 bg-[color:var(--m-colors-white)] text-[color:var(--m-colors-gray900)] mt-3 pl-[15px] pr-4 py-0 rounded-[5px] border-solid items-center"
              >
                <span className="overflow-hidden inline-block w-full text-[13px] leading-10 tracking-[-0.3px] align-top whitespace-nowrap text-ellipsis text-left">
                  {selectedOption?.[data.depth - 1]
                    ? `${selectedOption[data.depth - 1].value}`
                    : `선택하세요. (${data.category})`}
                </span>
                <SlArrowDown />
              </button>
            ))}
          </div>
          {/* TODO: 선택한 옵션 상품 */}
          {optionsCount.map((item) => (
            <div className="relative pt-3 pb-0" key={item.optionsId}>
              <button
                type="button"
                className="absolute p-2 right-0 top-0 w-8 h-8"
              >
                <span className="hidden">삭제</span>
                {/* TODO: 아이콘 수정 */}
                <i>X</i>
              </button>
              <div className="relative bg-[#f8f8f8] box-border pt-3.5 pb-[15px] px-[15px] rounded-lg border border-solid border-[color:var(--m-colors-black)]">
                <div className="text-[color:var(--m-colors-gray900)] text-[13px] tracking-[-0.3px] leading-[17px] break-keep pr-[27px]">
                  <p>{productData!.name}</p>
                  <span>{item.optionsId}</span>
                  {/* {savedOptions.map((option) => (
                  <span key={option.optionsId}>{option.value}</span>
                ))} */}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <UpdateCount />
                  <div className="leading-5 text-[color:var(--m-colors-gray900)] tracking-[-0.5px] text-lg font-semibold">
                    {(salePrice * item.count).toLocaleString('ko-KR')}원
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TotalPrice salePrice={salePrice} />
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
