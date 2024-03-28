import Image from 'next/image'
import Link from 'next/link'
import { BundleItemType } from '@/types/productType'
import CartBtn from '../Buttons/CartBtn'
import LikeBtn from '../Buttons/LikeBtn'

/** TODO: 특가 ID 데이터 */
// const getSpecialItem = async (itemId) => {
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

export default function ItemList({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemId,
}: {
  itemId: number | undefined
}) {
  // const item = await getSpecialItem(itemId)
  const item: BundleItemType = {
    bundleId: 111,
    imageUrl: 'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
    vender: '자연맛남',
    title: `인기 과일/채소 행사
  ~32% 할인`,
    minPrice: 18900,
    buyNow: 20,
  }

  // const isLiked = await getIsLikedItem(itemId)
  const isLiked = false

  return (
    <div className="pt-2.5 pb-5">
      <Link href={`/products/${item.bundleId}`} className="relative">
        <Image
          src={item.imageUrl}
          alt={item.title}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        {item.buyNow && (
          <div className="absolute flex items-center flex-row min-w-0 max-h-6 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] mr-1 px-2 py-2 left-0 top-0">
            <span className="w-full text-xs font-medium">
              {item.buyNow.toLocaleString('ko-KR')}개 구매중
            </span>
          </div>
        )}
      </Link>

      <div className="relative w-full">
        <Link href={`/products/${item.bundleId}`}>
          <div className="pr-[84px] pt-3 text-left">
            <p className="text-base leading-[1.2] overflow-hidden text-ellipsis whitespace-pre-line text-[color:var(--m-colors-gray900)] font-medium mb-1">
              <span className="pr-1 font-bold">{item.vender}</span>
              {item.title}
            </p>
            {item.isSale ? (
              // 할인 상품
              <div className="flex items-baseline justify-start mt-1">
                <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-primary)] pr-1">
                  <span className="text-[0px]">할인율</span>
                  {item.isSale.rate}%
                </p>
                <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1 pr-1">
                  <span className="text-[0px]">판매가격</span>
                  {item.isSale.salePrice.toLocaleString('ko-KR')}원
                </p>
                <del className="text-xs leading-[14px] text-[color:var(--m-colors-gray400)]">
                  <span className="text-[0px]">정상가격</span>
                  {item.isSale.rawPrice.toLocaleString('ko-KR')}원
                </del>
              </div>
            ) : (
              // 최소 가격만
              <p className="font-semibold text-base leading-[19px] text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1">
                <span className="text-[0px]">판매가격</span>
                {item.minPrice.toLocaleString('ko-KR')}원
                <span aria-label="부터">~</span>
              </p>
            )}
          </div>
        </Link>

        {/* 좋아요 | 장바구니 버튼 */}
        <div className="absolute z-10 right-0 top-1.5">
          <div className="flex">
            <LikeBtn
              itemId={item.bundleId}
              isLiked={isLiked}
              likeDivision={1}
            />
            <CartBtn itemId={item.bundleId} />
          </div>
        </div>
      </div>
    </div>
  )
}
