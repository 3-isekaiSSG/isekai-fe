import Image from 'next/image'
import Link from 'next/link'
import { RankingItemType } from '@/types/productType'
import LikeCartBtn from './LikeCartBtn'

/** TODO: 상품 ID 데이터 */
// const getProductItem = async (itemId: string): <ProductItemType> => {
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
  // const item = await getProductItem(itemId)
  const item: RankingItemType = {
    productId: 111,
    imageUrl: 'https://sitem.ssgcdn.com/64/75/79/item/1000571797564_i1_336.jpg',
    vender: '자연맛남',
    title: `인기 과일/채소 행사
    ~32% 할인`,
    price: 18900,
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
    ranking: 1,
  }

  // const isLiked = await getIsLikedItem(itemId)
  const isLiked = false

  // const itemId =
  return (
    <div className="relative pt-2.5 pb-5">
      <Link href={`/products/${item.productId}`} className="relative">
        <Image
          alt={item.title}
          src={item.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        {/* 랭킹 */}
        <div className="absolute inset-x-0 top-0 flex justify-between">
          <div className="flex flex-row items-center max-w-full ml-auto leading-none">
            {item.rankChange !== 0 &&
              item.rankChange &&
              (item.rankChange > 0 ? (
                <div className="text-[color:var(--m-colors-primary)] h-5 text-[10px] bg-[color:var(--m-colors-white)] leading-[13px] align-top font-medium flex items-center ps-0.5 pe-1">
                  <svg
                    className="text-inherit w-3 h-3 leading-[1em]"
                    viewBox="0 0 24 24"
                    focusable="false"
                    name="CaretUpSmallIcon"
                  >
                    <path
                      d="M12 7.2L6 15.7714H18L12 7.2Z"
                      fill="currentColor"
                    />
                  </svg>
                  {item.rankChange}
                  <span className="text-[0px]">순위상숭</span>
                </div>
              ) : (
                <div className="text-[color:var(--m-colors-gray900)] h-5 text-[10px] bg-[color:var(--m-colors-white)] leading-[13px] align-top font-medium flex items-center ps-0.5 pe-1">
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="text-inherit w-3 h-3 leading-[1em]"
                    name="CaretDownSmallIcon"
                  >
                    <path
                      d="M12 16.7714L6 8.20001H18L12 16.7714Z"
                      fill="currentColor"
                    />
                  </svg>
                  {-item.rankChange}
                  <span className="text-[0px]">순위하락</span>
                </div>
              ))}

            {item.ranking && (
              <div className="flex items-center justify-center w-5 h-5 leading-[13px] bg-[color:var(--m-colors-gray700)] font-medium text-[11px] text-[color:var(--m-colors-white)] p-1.5">
                {String(item.ranking).padStart(2, '0')}
                <span className="text-[0px]">위</span>
              </div>
            )}
          </div>
        </div>
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
        <LikeCartBtn
          itemId={item.productId}
          isLiked={isLiked}
          likeDivision={0}
        />
      </div>

      <Link
        href={`/products/${item.productId}`}
        className="block pr-5 mt-2.5 text-[color:var(--m-colors-gray900)]"
      >
        <p className="overflow-hidden text-ellipsis text-[13px] leading-[normal] tracking-[-0.3px] break-all">
          <span className="font-bold">{item.vender}</span> {item.title}
        </p>

        {item.isSale ? (
          // 할인 상품
          <div className="flex flex-col items-baseline mt-2">
            <del className="text-xs leading-[14px] text-[color:var(--m-colors-gray400)]">
              <span className="text-[0px]">정상가격</span>
              {item.isSale.rawPrice.toLocaleString('ko-KR')}원
            </del>

            <div className="flex items-baseline justify-start">
              <p className="block font-semibold text-base leading-[19px] text-[color:var(--m-colors-primary)] pr-1">
                <span className="text-[0px]">할인율</span>
                {item.isSale.rate}%
              </p>
              <p className="block font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1 pr-1">
                <span className="text-[0px]">판매가격</span>
                {item.isSale.salePrice.toLocaleString('ko-KR')}원
              </p>
            </div>
          </div>
        ) : (
          // 최소 가격만
          <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1">
            <span className="text-[0px]">판매가격</span>
            {item.price.toLocaleString('ko-KR')}원
          </p>
        )}

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
