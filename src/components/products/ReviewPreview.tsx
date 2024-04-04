'use client'

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReviewTotalType } from '@/types/productDataType'
import ReviewPhoto from '../reviews/ReviewPhoto'
import ReviewStar from '../reviews/ReviewStar'
import Subject from './Subject'

export function ReviewList({ reviews }: { reviews: any }) {
  return (
    <ul className="relative">
      {reviews.map((review: any) => (
        <li
          key={review.id}
          className="flex items-start justify-between my-4 border-t-[color:var(--m-colors-gray200)] pt-5 border-t border-solid"
        >
          {/* TODO: 해당 리뷰 상세로 이동 */}
          <Link href="" className="flex items-start justify-between ">
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
                  {/* TODO: 별점 */}
                  <span className="font-bold">5</span>
                </div>

                <span className="relative text-[color:var(--m-colors-gray900)] text-xs font-bold leading-[1.2] align-middle mt-px before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                  일반
                </span>

                <div className="relative leading-[normal]">
                  <span className="relative inline-block text-[11px] text-[#969696] pl-1.5 py-0 before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                    {'2024-04-03T05:48:13.371271'.slice(0, 10)}
                  </span>
                  <span className="relative inline-block text-[11px] text-[#969696] pl-1.5 py-0 before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                    {'isekaiSSG'.toString()}
                  </span>
                </div>
              </div>
              {/* 포토리뷰이면, 사진 보여주기 */}
              {review.image && <ReviewPhoto images={review.image} />}

              <div className="mx-0 my-[15px]">
                <p className="overflow-hidden break-all text-sm text-[color:var(--m-colors-gray900)] tracking-[-0.3px] font-normal mt-[5px] line-clamp-2">
                  좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요좋아요
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
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function ReviewPreview({
  reviewTotalData,
  reviewData,
}: {
  reviewTotalData?: ReviewTotalType
  reviewData?: any[]
}) {
  const pathName = usePathname()

  const images = [
    {
      id: 0,
      imageUrl:
        'https://sitem.ssgcdn.com/36/65/83/item/1000571836536_i10_750.jpg',
    },
    {
      id: 1,
      imageUrl:
        'https://sitem.ssgcdn.com/36/65/83/item/1000571836536_i10_750.jpg',
    },
    {
      id: 2,
      imageUrl:
        'https://sitem.ssgcdn.com/30/12/27/item/1000544271230_i2_750.jpg',
    },
    {
      id: 10,
      imageUrl:
        'https://sitem.ssgcdn.com/30/12/27/item/1000544271230_i8_750.jpg',
    },
    {
      id: 11,
      imageUrl:
        'https://sitem.ssgcdn.com/08/36/52/item/1000560523608_i9_750.jpg',
    },
    {
      id: 12,
      imageUrl:
        'https://sitem.ssgcdn.com/30/12/27/item/1000544271230_i2_750.jpg',
    },
  ]

  // TODO: 주석해제
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

        {/* TODO: 포토 리뷰 있으면 */}
        <div className="mt-5 h-auto overflow-hidden relative px-4 py-0">
          <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
            포토&동영상 리뷰
          </p>
          <ReviewPhoto images={images} />
        </div>

        <div className="mt-10 px-4 py-0">
          <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
            전체 리뷰
          </p>
          <ReviewList reviews={images} />
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
