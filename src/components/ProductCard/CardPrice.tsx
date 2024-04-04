import { DiscountType } from '@/types/productDataType'

export default function CardPrice({
  discountData,
  originPrice,
}: {
  discountData: DiscountType
  originPrice: number
}) {
  if (discountData!.discounted)
    return (
      <div className="flex flex-col items-baseline mt-2">
        <del className="text-xs leading-[14px] text-[color:var(--m-colors-gray400)]">
          <span className="text-[0px]">정상가격</span>
          {originPrice.toLocaleString('ko-KR')}원
        </del>

        <div className="flex items-baseline justify-start">
          <p className="block font-semibold text-base leading-[19px] text-[color:var(--m-colors-primary)] pr-1">
            <span className="text-[0px]">할인율</span>
            {discountData.discountRate}%
          </p>
          <p className="block font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1 pr-1">
            <span className="text-[0px]">판매가격</span>
            {discountData.discountPrice.toLocaleString('ko-KR')}원
          </p>
        </div>
      </div>
    )

  return (
    <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-2">
      <span className="text-[0px]">판매가격</span>
      {originPrice.toLocaleString('ko-KR')}원
    </p>
  )
}
