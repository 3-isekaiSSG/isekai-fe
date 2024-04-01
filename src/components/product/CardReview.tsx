'use client'

import { useEffect, useState } from 'react'
import { ReviewTotalType } from '@/types/productDataType'
import { getReviewTotal } from '@/utils/productDataApi'

export default function CardReview({
  card,
  type,
  itemCode,
}: {
  card: boolean
  type: 'products' | 'bundles'
  itemCode: number
}) {
  const [reviewTotal, setReviewTotal] = useState<ReviewTotalType | undefined>()
  useEffect(() => {
    async function fetchData() {
      const reviewTotalData = await getReviewTotal(type, itemCode)
      if (reviewTotalData) {
        setReviewTotal(reviewTotalData)
      }
    }
    fetchData()
  }, [itemCode, type])

  return (
    <div>
      ㅇㅅㅇ
      <div>ㅇㅅㅇ</div>
    </div>
  )

  if (reviewTotal?.reviewCount === 0) return null

  if (card)
    return (
      <div className="flex items-center flex-row text-[color:var(--m-colors-gray600)] text-xs">
        <svg
          viewBox="0 0 11 16"
          focusable="false"
          className="text-[color:var(--m-colors-gray350)] w-[11px] h-4 leading-[1em] align-middle"
          name="StarFill"
        >
          <path
            fill="currentColor"
            d="m2.089 13 .906-4.073L0 6.205l3.94-.35L5.5 2l1.56 3.856 3.94.349-2.995 2.722L8.911 13 5.5 10.838 2.089 13Z"
          />
        </svg>
        <p className="ms-1">
          <span className="text-[0px]">리뷰 별점</span>
          {reviewTotal?.avgScore.toString()}
          <span className="text-[0px]">점</span>
        </p>
        <div className="w-px h-[11px] border-l-[color:var(--m-colors-gray300)] border-l border-solid mx-1" />
        <p className="ms-1">
          <span className="text-[0px]">리뷰 갯수</span>
          {reviewTotal?.reviewCount.toLocaleString('ko-kr')}건
        </p>
      </div>
    )
}
