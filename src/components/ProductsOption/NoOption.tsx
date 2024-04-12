'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { postOptionsIdCountAtom } from '@/states/optionAtom'
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

  const [count, setCount] = useState<number>(0)
  const [optionCounts, setOptionCounts] = useRecoilState(postOptionsIdCountAtom)

  const getCountByOptionsId = (optionsId: number) => {
    const option = optionCounts.find((item) => item.optionsId === optionsId)

    return option ? option.count : 0
  }

  useEffect(() => {
    const newCount = getCountByOptionsId(optionCounts[0]?.optionsId)
    setCount(newCount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionCounts])

  useEffect(() => {
    const getOptionId = async () => {
      const res = await getOptionsToParent('products', productData!.code)
      setOptionCounts([
        {
          optionsId: res[0].optionsId,
          count: 1,
        },
      ])
    }

    getOptionId()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="max-h-[391px] pb-[15px]">
      <div className="overflow-auto max-h-[255px] pt-3 pb-0 px-[15px]">
        <div className="relative bg-[#f8f8f8] box-border pt-3.5 pb-[15px] px-[15px] rounded-lg">
          <div className="text-[color:var(--m-colors-gray900)] text-[13px] tracking-[-0.3px] leading-[17px] break-keep pr-[27px]">
            {productData!.name}
          </div>
          <div className="flex justify-between items-center mt-3">
            <UpdateCount optionsId={optionCounts[0]?.optionsId} count={count} />
            <div className="leading-5 text-[color:var(--m-colors-gray900)] tracking-[-0.5px] text-lg font-semibold">
              {(salePrice * count).toLocaleString('ko-KR')}원
            </div>
          </div>
        </div>
      </div>

      <TotalPrice salePrice={salePrice} />
    </div>
  )
}
