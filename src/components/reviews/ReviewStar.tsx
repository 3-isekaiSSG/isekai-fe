import { ReviewTotalType } from '@/types/productDataType'
import styles from './reviews.module.css'

export default function ReviewStar({
  reviewTotalData,
}: {
  reviewTotalData?: ReviewTotalType
}) {
  const score = reviewTotalData?.avgScore || 0

  return (
    <div className="relative text-center tracking-[-0.3px] leading-[normal] pt-[25px] pb-[34px] px-4">
      <span className="inline-block mt-[-3px] text-[color:var(--m-colors-gray900)] text-[44px] font-bold leading-[49px] align-middle mr-5">
        {score}
      </span>
      <div className="inline-block text-left align-middle">
        <span className={styles.mndtl_star22}>
          <span
            className={styles.mndtl_star22_per}
            style={{ width: `${(score / 5) * 100}%` }}
          />
          <span className="hidden">별점 5점 중 {score}점</span>
        </span>
        <div className="text-sm font-medium text-[color:var(--m-colors-gray900,#222222)] mt-1.5">
          <span>{reviewTotalData?.reviewCount}</span>건 리뷰
        </div>
      </div>
    </div>
  )
}
