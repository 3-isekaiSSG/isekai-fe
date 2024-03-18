import Image from 'next/image'
import Link from 'next/link'
import { SpecialItemType } from '@/types/productType'
import LikeCartBtn from '../home/LikeCartBtn'

function Item({
  item,
  obanjang = false,
}: {
  item: SpecialItemType
  obanjang: boolean
}) {
  return (
    <div className="relative pt-2.5 pb-5">
      <Link href={`/products/${item.bundleId}`} className="relative">
        <Image
          alt={item.title}
          src={item.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      <div className="flex items-center py-0.5">
        {item.isSSG && (
          <div className="h-5">
            <Image
              src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/rect/emart.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4"
              alt="쓱배송"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: 'auto',
                height: '100%',
              }}
            />
          </div>
        )}
        <div className="flex-1" />
        <LikeCartBtn productId={item.bundleId} />
      </div>

      <Link
        href={`/products/${item.bundleId}`}
        className="block pr-5 mt-2.5 text-[color:var(--m-colors-gray900)]"
      >
        <p className="overflow-hidden text-ellipsis text-[13px] leading-[normal] tracking-[-0.3px] break-all">
          <span className="font-bold">{item.vender}</span> {item.title}
        </p>

        <div className="flex items-center mt-1">
          <span className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis pr-1">
            <span className="text-[0px]">판매가격</span>
            {item.minPrice.toLocaleString('ko-kr')}원
            <span aria-label="부터">~</span>
          </span>
        </div>

        {item.review && (
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
              {item.review.star.toString()}
              <span className="text-[0px]">점</span>
            </p>
            <div className="w-px h-[11px] border-l-[color:var(--m-colors-gray300)] border-l border-solid mx-1" />
            <p className="ms-1">
              <span className="text-[0px]">리뷰 갯수</span>
              {item.review.count.toLocaleString('ko-kr')}건
            </p>
          </div>
        )}
      </Link>

      {obanjang && (
        <div className="overflow-hidden max-h-11 mt-1.5 mb-0.5 pr-2">
          <span className="max-w-full mb-1 mr-1 leading-none align-top whitespace-nowrap">
            <span className="inline-flex max-w-full items-center font-medium align-top text-[11px] leading-5 bg-[color:var(--m-colors-gray150)] text-[color:var(--m-colors-gray800)] px-1.5">
              오반장
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

export default function ProductItem({
  data,
  obanjang = true,
}: {
  data: SpecialItemType[]
  obanjang: boolean
}) {
  return (
    <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px]">
      {data.map((item) => (
        <Item key={item.id} item={item} obanjang={obanjang} />
      ))}
    </div>
  )
}
