import Image from 'next/image'
import Link from 'next/link'
import { BundleItemType } from '@/types/productType'
import CartBtn from '../Buttons/CartBtn'
import LikeBtn from '../Buttons/LikeBtn'

/** TODO: 특가 ID 데이터 */
// const getBundleItem = async (itemId: string):<BundleItemType> => {
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }

/** TODO: 해당 상품 좋아요 여부 */
// const getIsLikedItem = async (itemId) => {
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }

export default function ProductItem({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemId,
  tag = undefined,
}: {
  itemId: number | undefined
  tag: string | undefined
}) {
  // const item = await getBundleItem(itemId)
  const item: BundleItemType = {
    bundleId: 111,
    imageUrl: 'https://sitem.ssgcdn.com/64/75/79/item/1000571797564_i1_336.jpg',
    vender: '자연맛남',
    title: `인기 과일/채소 행사
    ~32% 할인`,
    minPrice: 18900,
    isSSG: true,
    review: {
      star: 4.8,
      count: 111111,
    },
    isSale: {
      rate: 54,
      rawPrice: 47700,
      salePrice: 21900,
    },
  }

  // const isLiked = await getIsLikedItem(itemId, division)
  const isLiked = false

  // const itemId =
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
        <div className="flex">
          <LikeBtn itemId={item.bundleId} isLiked={isLiked} likeDivision={1} />
          <CartBtn itemId={item.bundleId} />
        </div>
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

      {tag && (
        <div className="overflow-hidden max-h-11 mt-1.5 mb-0.5 pr-2">
          <span className="max-w-full mb-1 mr-1 leading-none align-top whitespace-nowrap">
            <span className="inline-flex max-w-full items-center font-medium align-top text-[11px] leading-5 bg-[color:var(--m-colors-gray150)] text-[color:var(--m-colors-gray800)] px-1.5">
              {tag}
            </span>
          </span>
        </div>
      )}
    </div>
  )
}
