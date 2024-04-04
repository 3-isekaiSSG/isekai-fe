import { ReviewTotalType } from '@/types/productDataType'

export default function ReviewStar({
  reviewTotalData,
}: {
  reviewTotalData?: ReviewTotalType
}) {
  return (
    <div className="relative text-center tracking-[-0.3px] leading-[normal] pt-[25px] pb-[34px] px-4">
      <span className="inline-block mt-[-3px] text-[color:var(--m-colors-gray900)] text-[44px] font-bold leading-[49px] align-middle mr-5">
        4.7
      </span>
      <div className="inline-block text-left align-middle">
        <span>별별별</span>
        <div className="text-sm font-medium text-[color:var(--m-colors-gray900,#222222)] mt-1.5">
          <span>{reviewTotalData?.reviewCount}</span>건 리뷰
        </div>
      </div>
    </div>
  )
}
