import Image from 'next/image'
import Link from 'next/link'
import { CartDeliveryType } from '@/types/cartType'
import { DiscountType } from '@/types/productDataType'
import {
  getCardData,
  getDiscount,
  getSeller,
  getThumbnail,
} from '@/utils/productDataApi'
import DeleteButton from './DeleteButton'
import UpdateCartCount from './UpdateCartCount'
import styles from './cart.module.css'

export function CartItemPrice({
  discountData,
  originPrice,
}: {
  discountData: DiscountType
  originPrice: number
}) {
  if (discountData!.discounted)
    return (
      <div>
        <div className="flex items-center text-[color:var(--m-colors-gray500)] leading-[normal] -mb-0.5">
          <del className="text-[13px]">
            <span className="hidden">정상가격</span>
            {originPrice.toLocaleString('ko-KR')}원
          </del>
        </div>
        <div className="flex items-center leading-[normal] break-all text-[color:var(--m-colors-gray900)] text-lg font-semibold">
          <span className="hidden">판매가격</span>
          {discountData.discountPrice.toLocaleString('ko-KR')}원
        </div>
      </div>
    )
  return (
    <div>
      <div className="flex items-center leading-[normal] break-all text-[color:var(--m-colors-gray900)] text-lg font-semibold">
        <span className="hidden">판매가격</span>
        {originPrice.toLocaleString('ko-KR')}원
      </div>
    </div>
  )
}

export default async function CartItemCard({
  data,
}: {
  data: CartDeliveryType
}) {
  const cardDataPromise = getCardData('products', Number(data.code))
  const thumbnailDataPromise = getThumbnail('products', Number(data.code))
  const sellerDataPromise = getSeller('products', Number(data.code))
  const discountDataPromise = getDiscount('products', Number(data.code))

  const [cardData, thumbnailData, sellerData, discountData] = await Promise.all(
    [
      cardDataPromise,
      thumbnailDataPromise,
      sellerDataPromise,
      discountDataPromise,
    ],
  )

  return (
    <>
      <div className="relative w-[85px] aspect-[1] ">
        <span className={styles['input-span']}>
          {/* TODO: 클릭 시 하나 선택 */}
          <input
            className={styles.blind}
            type="checkbox"
            id={data.id.toString()}
            name={data.id.toString()}
            data-tracking-value="전체선택"
          />
          <label htmlFor={data.id.toString()}>
            <span className={styles.blind}>전체선택</span>
          </label>
        </span>
        <Image
          src={thumbnailData!.imageUrl}
          alt={cardData!.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="grow shrink basis-0 relative ml-2.5">
        <div className="absolute -right-1.5 -top-1.5">
          {/* TODO: 해당 상품 장바구니에서 삭제 */}
          <DeleteButton cartId={data.cartId} />
        </div>

        <Link
          href={`/products/${data.code}`}
          className="line-clamp-2 mr-[37px] mb-1.5 text-sm leading-[1.38]"
        >
          <strong className="text-[color:var(--m-colors-gray900)] pr-1">
            {sellerData!.name}
          </strong>
          <span className="text-[color:var(--m-colors-gray900)] relative overflow-hidden break-all">
            {cardData!.name}
          </span>
        </Link>

        <div className="flex items-center justify-between min-h-[36px] mt-2">
          <CartItemPrice
            discountData={discountData!}
            originPrice={cardData!.originPrice}
          />
          <UpdateCartCount item={data} />
        </div>
      </div>
    </>
  )
}
