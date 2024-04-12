'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReviewContentType } from '@/types/ReviewType'
import { ReviewTotalType } from '@/types/productDataType'
import ReviewPhoto from '../reviews/ReviewPhoto'
import ReviewStar from '../reviews/ReviewStar'
import Subject from './Subject'

export function ReviewList({ reviews }: { reviews: ReviewContentType[] }) {
  return (
    <ul className="relative">
      {reviews.map((review: ReviewContentType) => (
        <li
          key={review.reviewId}
          className="flex items-start justify-between my-4 border-t-[color:var(--m-colors-gray200)] pt-5 border-t border-solid"
        >
          <div className="flex items-start justify-between relative w-full">
            <div className="flex-1">
              <div className="flex items-center">
                <div className="relative align-middle text-[color:var(--m-colors-gray900)] text-xs leading-3 tracking-[-0.3px] flex items-center pr-2">
                  <span>
                    <svg
                      viewBox="0 0 11 16"
                      focusable="false"
                      className="w-[18px] h-[18px]"
                      name="StarFill"
                    >
                      <path
                        fill="currentColor"
                        d="m2.089 13 .906-4.073L0 6.205l3.94-.35L5.5 2l1.56 3.856 3.94.349-2.995 2.722L8.911 13 5.5 10.838 2.089 13Z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold">{review.score}</span>
                </div>

                <span className="relative text-[color:var(--m-colors-gray900)] text-xs font-bold leading-[1.2] align-middle mt-px before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                  일반
                </span>

                <div className="relative leading-[normal]">
                  <span className="relative inline-block text-[11px] text-[#969696] pl-1.5 py-0 before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                    {review.createdAt.slice(0, 10)}
                  </span>
                  <span className="relative inline-block text-[11px] text-[#969696] pl-1.5 py-0 before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                    {review.accountId}
                  </span>
                </div>
              </div>
              {review.reviewImage && <ReviewPhoto reviews={[review]} />}

              <div className="mx-0 my-[15px]">
                <p className="overflow-hidden break-all text-sm text-[color:var(--m-colors-gray900)] tracking-[-0.3px] font-normal mt-[5px] line-clamp-2">
                  {review.reviewContent}
                </p>
              </div>
            </div>
            <div>
              <span className="hidden">리뷰 상세 보기</span>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                name="ChevronDownSmallIcon"
                aria-hidden="true"
                className="text-[color:var(--m-colors-gray400)] w-7 h-7 inline-block leading-[1em] align-middle -rotate-90"
              >
                <path
                  d="M7.33197 10.308L8.18397 9.45599L12 13.272L15.816 9.45599L16.668 10.308L12 14.964L7.33197 10.308Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function ReviewPreview({
  reviewTotalData,
  reviewData = [],
  threePhotoReview = [],
}: {
  reviewTotalData?: ReviewTotalType
  reviewData?: ReviewContentType[]
  threePhotoReview?: ReviewContentType[]
}) {
  const pathName = usePathname()

  if (reviewTotalData?.reviewCount === 0)
    return (
      <div>
        <Subject title="고객리뷰" />
        <div className="pb-10 px-4">
          <p className="inline-block relative text-sm leading-[1.43] text-[color:var(--m-colors-gray500)] tracking-[-0.3px] pl-2.5">
            아직 등록된 리뷰가 없습니다.
          </p>
        </div>
      </div>
    )

  return (
    <div>
      <Subject title="고객리뷰" />
      <div className="pb-10">
        <ReviewStar reviewTotalData={reviewTotalData} />

        {threePhotoReview && threePhotoReview?.length > 0 && (
          <div className="mt-5 h-auto overflow-hidden relative px-4 py-0">
            <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
              포토&동영상 리뷰
            </p>
            <ReviewPhoto reviews={threePhotoReview} />
          </div>
        )}

        <div className="mt-10 px-4 py-0">
          <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
            전체 리뷰
          </p>
          <ReviewList reviews={reviewData} />
        </div>

        <div className="h-11 mt-[26px] px-4 py-0">
          <Link
            href={`${pathName}/reviews`}
            className="inline-block w-full h-full border text-[#888] text-sm font-medium leading-[44px] tracking-[-0.3px] text-center rounded-lg border-solid border-[#ebebeb]"
          >
            더보기 <span>({reviewTotalData?.reviewCount})</span>
            <i>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                name="ChevronDownSmallIcon"
                aria-hidden="true"
                className="w-5 h-5 inline-block leading-[1em] align-middle -rotate-90"
              >
                <path
                  d="M7.33197 10.308L8.18397 9.45599L12 13.272L15.816 9.45599L16.668 10.308L12 14.964L7.33197 10.308Z"
                  fill="currentColor"
                />
              </svg>
            </i>
          </Link>
        </div>
      </div>
    </div>
  )
}
