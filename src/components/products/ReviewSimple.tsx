import Image from 'next/image'
import Link from 'next/link'
import { SlArrowRight } from 'react-icons/sl'
import { ReviewTotalType } from '@/types/productDataType'

export default function ReviewSimple({
  reviewTotalData,
}: {
  reviewTotalData?: ReviewTotalType
}) {
  // 포토 동영상 리뷰 최근 3개
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const photoList: any[] = []

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
          <span>{reviewTotalData?.avgScore.toString()}</span>
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          href=""
          className="text-[color:var(--m-colors-gray900)] text-[15px] leading-[normal] tracking-[-0.3px] align-middle font-medium underline ml-6"
          scroll={false}
        >
          {reviewTotalData?.reviewCount.toLocaleString('ko-kr')}건 리뷰
          <span className="hidden">더보기</span>
        </Link>

        {/* 포토 동영상 리뷰 */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link href="" className="flex items-center ml-2.5 pr-5" scroll={false}>
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
