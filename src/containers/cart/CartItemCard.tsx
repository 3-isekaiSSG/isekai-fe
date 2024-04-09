'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CartDeliveryType } from '@/types/cartType'
import {
  CardDataType,
  DiscountType,
  SellersType,
  ThumbnailType,
} from '@/types/productDataType'
import {
  getCardData,
  getDiscount,
  getSeller,
  getThumbnail,
} from '@/utils/productDataApi'
import DeleteButton from './DeleteButton'
import ItemInputCheckBox from './ItemInputCheckBox'
import UpdateCartCount from './UpdateCartCount'

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

interface ProductDataType {
  cardData: CardDataType | undefined
  thumbnailData: ThumbnailType | undefined
  sellerData: SellersType | undefined
  discountData: DiscountType | undefined
}

export default function CartItemCard({
  data,
  type,
}: {
  data: CartDeliveryType
  type: 'ssg' | 'post'
}) {
  const [productData, setProductData] = useState<ProductDataType>()

  useEffect(() => {
    const fetchData = async () => {
      const cardDataPromise = getCardData('products', Number(data.code))
      const thumbnailDataPromise = getThumbnail('products', Number(data.code))
      const sellerDataPromise = getSeller('products', Number(data.code))
      const discountDataPromise = getDiscount('products', Number(data.code))

      const [cardData, thumbnailData, sellerData, discountData] =
        await Promise.all([
          cardDataPromise,
          thumbnailDataPromise,
          sellerDataPromise,
          discountDataPromise,
        ])
      setProductData({
        cardData,
        thumbnailData,
        sellerData,
        discountData,
      })
    }

    fetchData()
  }, [data.code])
  console.log(productData)

  return (
    <>
      <div className="relative w-[85px] aspect-[1] ">
        <ItemInputCheckBox data={data} type={type} />
        <Image
          src={productData!.thumbnailData!.imageUrl}
          alt={productData!.cardData!.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="grow shrink basis-0 relative ml-2.5">
        <div className="absolute -right-1.5 -top-1.5">
          {/* TODO: 해당 상품 장바구니에서 삭제 */}
          <DeleteButton cartId={data.cartId} type={type} />
        </div>

        <Link
          href={`/products/${data.code}`}
          className="line-clamp-2 mr-[37px] mb-1.5 text-sm leading-[1.38]"
        >
          <strong className="text-[color:var(--m-colors-gray900)] pr-1">
            {productData?.sellerData?.name}
          </strong>
          <span className="text-[color:var(--m-colors-gray900)] relative overflow-hidden break-all">
            {productData?.cardData?.name}
          </span>
        </Link>

        <div className="flex items-center justify-between min-h-[36px] mt-2">
          <CartItemPrice
            discountData={productData!.discountData!}
            originPrice={productData!.cardData!.originPrice}
          />
          <UpdateCartCount item={data} />
        </div>
      </div>
    </>
  )
}
