'use client'

import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {
  oneOptionIdCountAtom,
  postOptionsIdCountAtom,
} from '@/states/optionAtom'
import { CardDetailType, DiscountType } from '@/types/productDataType'
import { getOptionsToParent } from '@/utils/optionApi'
import { TotalPrice, UpdateCount } from './OptionComponents'

export default function NoOption({
  productDiscount,
  productData,
}: {
  productDiscount?: DiscountType
  productData?: CardDetailType
}) {
  const salePrice = productDiscount?.discounted
    ? productDiscount.discountPrice
    : productData!.originPrice

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [optionCount, setOptionCount] = useRecoilState(oneOptionIdCountAtom)
  const [optionCounts, setOptionCounts] = useRecoilState(postOptionsIdCountAtom)

  const updateOptionCount = (newOptionsId: number, addCount: number) => {
    setOptionCounts((prevOptionCounts) => {
      const existingOptionIndex = prevOptionCounts.findIndex(
        (option) => option.optionsId === newOptionsId,
      )

      if (existingOptionIndex >= 0) {
        const updatedOptionCounts = [...prevOptionCounts]
        updatedOptionCounts[existingOptionIndex] = {
          ...updatedOptionCounts[existingOptionIndex],
          count: updatedOptionCounts[existingOptionIndex].count + addCount,
        }
        return updatedOptionCounts
      }
      return [...prevOptionCounts, { optionsId: newOptionsId, count: addCount }]
    })
  }
  console.log(1, optionCounts)

  useEffect(() => {
    const getOptionId = async () => {
      const res = await getOptionsToParent('products', productData!.code)
      updateOptionCount(res[0].optionsId, 0)
    }
    getOptionId()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(optionCounts)

  return (
    <div className="max-h-[391px] pb-[15px]">
      <div className="overflow-auto max-h-[255px] pt-3 pb-0 px-[15px]">
        <div className="relative bg-[#f8f8f8] box-border pt-3.5 pb-[15px] px-[15px] rounded-lg">
          <div className="text-[color:var(--m-colors-gray900)] text-[13px] tracking-[-0.3px] leading-[17px] break-keep pr-[27px]">
            {productData!.name}
          </div>
          <div className="flex justify-between items-center mt-3">
            <UpdateCount />
            <div className="leading-5 text-[color:var(--m-colors-gray900)] tracking-[-0.5px] text-lg font-semibold">
              {(salePrice * optionCount.count).toLocaleString('ko-KR')}원
            </div>
          </div>
        </div>
      </div>

      <TotalPrice salePrice={salePrice} />
    </div>
  )
}
