/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import Link from 'next/link'
import { ReviewTotalType } from '@/types/productDataType'
import Subject from './Subject'

export function PhotoReviewPreview({ images }: { images: any }) {
  return (
    <ul className="overflow-x-auto flex whitespace-nowrap -mx-5 my-0 px-5 py-0">
      {images.map((image: any) => (
        <li
          key={image.id}
          className="min-w-[25%] h-auto align-top inline-block w-[111px] ml-0 mr-4 mt-0 rounded-lg"
        >
          {/* TODO: 해당 리뷰 상세로 이동 */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            href=""
            className="w-full h-full bg-[color:var(--m-colors-gray300)] rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-auto aspect-[1] bg-[color:var(--m-colors-gray300)] rounded-lg overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={image.id.toString()}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                style={{
                  objectFit: 'cover',
                  borderRadius: '0.5rem !important',
                }}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function ReviewList({ reviews }: { reviews: any }) {
  return (
    <ul className="relative">
      {reviews.map((review: any) => (
        <li
          key={review.id}
          className="flex items-start justify-between my-4 border-t-[color:var(--m-colors-gray200)] pt-5 border-t border-solid"
        >
          {/* TODO: 해당 리뷰 상세로 이동 */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
              {review.image && <PhotoReviewPreview images={review.image} />}

              <div className="a">
                <p className="overflow-hidden break-all text-sm text-[color:var(--m-colors-black)] leading-[normal] tracking-[-0.3px] font-normal mt-[5px] line-clamp-2">
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

  return (
    <div>
      <Subject title="고객리뷰" />
      <div className="pb-10">
        <div className="relative text-center tracking-[-0.3px] leading-[normal] pt-[25px] pb-[34px] px-4">
          <span className="inline-block mt-[-3px] text-[color:var(--m-colors-gray900)] text-[44px] font-bold leading-[49px] align-middle mr-5">
            4.7
          </span>
          <div className="inline-block text-left align-middle">
            <span>별별별</span>
            <div className="text-sm font-medium text-[color:var(--m-colors-gray900,#222222)] mt-1.5">
              <span>54</span>건 리뷰
            </div>
          </div>
        </div>

        <div className="mt-5 h-auto overflow-hidden relative px-4 py-0">
          <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
            포토&동영상 리뷰
          </p>
          <PhotoReviewPreview images={images} />
        </div>

        <div className="mt-10 px-4 py-0">
          <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
            전체 리뷰
            <ReviewList reviews={images} />
          </p>
        </div>

        <div>전체리뷰 더보기</div>
      </div>
    </div>
  )
}
