'use client'

import { useEffect, useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import {
  postOptionsIdCountAtom,
  selectedOptionsState,
} from '@/states/optionAtom'
import { ChildOptionsType, OptionCategoryType } from '@/types/OptionType'
import { CardDetailType, DiscountType } from '@/types/productDataType'
import Toast from '../Toast'
import { TotalPrice, UpdateCount } from './OptionComponents'
import { OptionDepthModal } from './OptionDepthModal'
import styles from './productsOption.module.css'

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
  const [optionData, setOptionData] = useState<OptionCategoryType>()

  const selectedOptions = useRecoilValue(selectedOptionsState)
  const resetSelectedOptions = useResetRecoilState(selectedOptionsState)

  const [optionsCount, setOptionsCount] = useRecoilState(postOptionsIdCountAtom)

  const handleClick = (data: OptionCategoryType) => {
    const selectedDepth = selectedOptions.length + 1
    if (data.depth > selectedDepth) {
      setToast(true)
    } else {
      setIsToggle(!isToggle)
      setOptionData(data)
    }
  }

  const handleDelete = (optionsId: number) => {
    setOptionsCount((prev) =>
      prev.filter((item) => item.optionsId !== optionsId),
    )
  }

  useEffect(() => {
    if (selectedOptions.length === optionAllData.length) {
      const { optionsId } = selectedOptions[selectedOptions.length - 1]

      setOptionsCount((prev) => {
        const existingOptionIndex = prev.findIndex(
          (option) => option.optionsId === optionsId,
        )
        if (existingOptionIndex >= 0) {
          const updatedOptionCounts = [...prev]
          updatedOptionCounts[existingOptionIndex] = {
            ...updatedOptionCounts[existingOptionIndex],
            count: updatedOptionCounts[existingOptionIndex].count + 1,
            children: selectedOptions,
          }
          return updatedOptionCounts
        }
        return [...prev, { optionsId, count: 1, children: selectedOptions }]
      })

      resetSelectedOptions()
    }
  }, [optionAllData, resetSelectedOptions, selectedOptions, setOptionsCount])

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
                  {selectedOptions?.[data.depth - 1]
                    ? `${selectedOptions[data.depth - 1].value}`
                    : `선택하세요. (${data.category})`}
                </span>
                <SlArrowDown />
              </button>
            ))}
          </div>

          {optionsCount.map((item) => {
            const option = optionsCount.find(
              (findItem) => findItem.optionsId === item.optionsId,
            )
            const count = option?.count || 0
            return (
              <div className="relative pt-3 pb-0" key={item.optionsId}>
                <div className="relative bg-[#f8f8f8] box-border pt-3.5 pb-[15px] px-[15px] rounded-lg border border-solid border-[color:var(--m-colors-black)]">
                  {/* TODO: 아이콘 수정 */}
                  <button
                    type="button"
                    onClick={() => handleDelete(item.optionsId)}
                    className="absolute p-2 right-0 top-0 w-8 h-8 flex items-center justify-center"
                  >
                    <span className="hidden">삭제</span>
                    <i className="w-4 h-4">X</i>
                  </button>

                  <div className="text-[color:var(--m-colors-gray900)] text-[13px] tracking-[-0.3px] leading-[17px] break-keep pr-[27px]">
                    <p>{productData!.name}</p>

                    {item?.children?.map((child: ChildOptionsType) => (
                      <span
                        key={child.optionsId}
                        className={styles['child-span']}
                      >
                        {child.category}: {child.value}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <UpdateCount optionsId={item.optionsId} count={count} />
                    <div className="leading-5 text-[color:var(--m-colors-gray900)] tracking-[-0.5px] text-lg font-semibold">
                      {(salePrice * item.count).toLocaleString('ko-KR')}원
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
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
