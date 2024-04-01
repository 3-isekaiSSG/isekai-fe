'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
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

  // TODO: 포토 동영상 리뷰 최근 3개
  const photoList = [
    {
      id: 0,
      url: 'https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202403/20240321201956_1216416840_0_1.jpg&w=500&h=500&autoOrient=true&t=4e359db2ec5c4f5c4e5604a79a1297af88b1e313',
    },
    {
      id: 1,
      url: 'https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202403/20240321201956_1216416840_0_1.jpg&w=500&h=500&autoOrient=true&t=4e359db2ec5c4f5c4e5604a79a1297af88b1e313',
    },
    {
      id: 2,
      url: 'https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202403/20240321201956_1216416840_0_1.jpg&w=500&h=500&autoOrient=true&t=4e359db2ec5c4f5c4e5604a79a1297af88b1e313',
    },
  ]

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

  return (
    <div className="flex items-center min-h-[50px] border-b-[color:var(--m-colors-gray300)] pl-4 pr-[18px] pt-[13px] pb-2.5 border-b border-solid">
      <div className="flex items-center min-h-[26px]">
        <div className="text-[15px] leading-[18px] tracking-[-0.3px] align-middle flex items-center justify-center mt-[3px] font-bold">
          <svg
            viewBox="0 0 11 16"
            focusable="false"
            className="w-[22px] h-[22px]"
            name="StarFill"
          >
            <path
              fill="currentColor"
              d="m2.089 13 .906-4.073L0 6.205l3.94-.35L5.5 2l1.56 3.856 3.94.349-2.995 2.722L8.911 13 5.5 10.838 2.089 13Z"
            />
          </svg>
          <span>{reviewTotal?.avgScore.toString()}</span>
        </div>
        {/* TODO: 패러럴라우팅 */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          href=""
          className="text-[color:var(--m-colors-gray900)] text-[15px] leading-[normal] tracking-[-0.3px] align-middle font-medium underline ml-6"
        >
          {reviewTotal?.reviewCount.toLocaleString('ko-kr')}건 리뷰
          <span className="hidden">더보기</span>
        </Link>

        {/* TODO: 포토 동영상 리뷰 */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link href="" className="flex items-center ml-2.5 pr-5">
          <div className="flex items-center aa">
            {photoList.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden w-6 h-6 mr-[-6.5px] border-[color:var(--m-colors-white)] bg-[#f1f1f1] relative rounded-[50%] border-[1.5px] border-solid"
                style={{
                  zIndex: 2 - item.id,
                }}
              >
                <Image
                  className="align-top rounded-[50%]"
                  src={item.url}
                  alt={item.id.toString()}
                  fill
                />
              </div>
            ))}
            <SlArrowRight
              size={10}
              className="text-[color:var(--m-colors-gray400)] ml-2"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
