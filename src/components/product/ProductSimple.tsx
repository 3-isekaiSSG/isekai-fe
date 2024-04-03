import Image from 'next/image'

export function Price({ discounted }: { discounted: boolean }) {
  const originPrice = 100000
  const discount = {
    discountRate: 10,
    discountPrice: 87000,
  }

  if (discounted)
    return (
      <div className="flex flex-col items-baseline mt-2">
        <del className="text-base text-[color:var(--m-colors-gray600)]">
          <span className="hidden">정상가격</span>
          {originPrice.toLocaleString('ko-KR')}원
        </del>

        <div className="flex items-baseline justify-start">
          <p className="block font-semibold text-2xl text-[color:var(--m-colors-primary)] pr-1">
            <span className="hidden">할인율</span>
            {discount.discountRate}%
          </p>
          <p className="block font-semibold text-2xl text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1 pr-1">
            <span className="hidden">판매가격</span>
            {discount.discountPrice.toLocaleString('ko-KR')}원
          </p>
        </div>
      </div>
    )

  return (
    <p className="font-semibold text-2xl text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-2">
      <span className="text-[0px]">판매가격</span>
      {originPrice.toLocaleString('ko-KR')}원
    </p>
  )
}

export default function ProductSimple() {
  return (
    <section>
      <div className="relative border-b-[color:var(--m-colors-gray300)] leading-[normal] tracking-[-0.3px] min-h-[17px] flex justify-between px-4 py-[7px] border-b border-solid">
        <div>배송사진</div>
        <div className="flex-1" />
        <button
          type="button"
          className="relative border-b-[color:var(--m-colors-gray300)] leading-[normal] tracking-[-0.3px] min-h-[17px] flex justify-between px-4 py-[7px] border-b border-solid"
        >
          <Image
            src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg
"
            alt="공유"
            fill
          />
        </button>
      </div>

      <div className="leading-[normal] tracking-[-0.3px] mx-0 my-[15px] px-4 py-0">
        <h2 className="overflow-hidden break-all line-clamp-3">
          <span className="max-h-11 min-h-[25px] overflow-hidden block text-[13px] font-bold tracking-[-0.3px] mr-[3px] mb-2">
            판매자
          </span>
          <span className="text-base font-[normal] text-[color:var(--m-colors-gray900)]">
            상품명
          </span>
        </h2>

        <div className="mt-6">
          <Price discounted />
        </div>
      </div>
    </section>
  )
}
