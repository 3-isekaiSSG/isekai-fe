import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChildOptionsType } from '@/types/OptionType'
import { CartDeliveryType } from '@/types/cartType'
import {
  CardDataType,
  DiscountType,
  SellersType,
  ThumbnailType,
} from '@/types/productDataType'
import { getLastOptions } from '@/utils/optionApi'
import {
  getCardData,
  getDiscount,
  getSeller,
  getThumbnail,
} from '@/utils/productDataApi'
import DeleteButton from './DeleteButton'
import ItemInputCheckBox from './ItemInputCheckBox'
import UpdateCartCount from './UpdateCartCount'
import styles from './cart.module.css'

export function CartItemPrice({
  discountData,
  originPrice = 0,
  count = 1,
}: {
  discountData: DiscountType | undefined
  originPrice?: number
  count: number
}) {
  if (discountData?.discounted)
    return (
      <div>
        <div className="flex items-center text-[color:var(--m-colors-gray500)] leading-[normal] -mb-0.5">
          <del className="text-[13px]">
            <span className="hidden">정상가격</span>
            {(originPrice * count).toLocaleString('ko-KR')}원
          </del>
        </div>
        <div className="flex items-center leading-[normal] break-all text-[color:var(--m-colors-gray900)] text-lg font-semibold">
          <span className="hidden">판매가격</span>
          {(discountData.discountPrice * count).toLocaleString('ko-KR')}원
        </div>
      </div>
    )
  return (
    <div>
      <div className="flex items-center leading-[normal] break-all text-[color:var(--m-colors-gray900)] text-lg font-semibold">
        <span className="hidden">판매가격</span>
        {(originPrice * count).toLocaleString('ko-KR')}원
      </div>
    </div>
  )
}

interface AllDataType {
  cardData: CardDataType | undefined
  thumbnailData: ThumbnailType | undefined
  sellerData: SellersType | undefined
  discountData: DiscountType | undefined
  optionData: ChildOptionsType[] | undefined
}

export default function CartItemCardClient({
  data,
  type,
}: {
  data: CartDeliveryType
  type: 'ssg' | 'post'
}) {
  const [itemPrice, setItemPrice] = useState<number>(0)
  const [allData, setAllData] = useState<AllDataType | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const cardDataPromise = getCardData('products', Number(data.code))
      const thumbnailDataPromise = getThumbnail('products', Number(data.code))
      const sellerDataPromise = getSeller('products', Number(data.code))
      const discountDataPromise = getDiscount('products', Number(data.code))
      const optionDataPromise = getLastOptions(data.optionId)

      const [cardData, thumbnailData, sellerData, discountData, optionData] =
        await Promise.all([
          cardDataPromise,
          thumbnailDataPromise,
          sellerDataPromise,
          discountDataPromise,
          optionDataPromise,
        ])

      setAllData({
        cardData,
        thumbnailData,
        sellerData,
        discountData,
        optionData,
      })

      setItemPrice(
        discountData?.discounted
          ? discountData!.discountPrice
          : cardData!.originPrice,
      )
    }
    fetchData()
  }, [data])

  return (
    <>
      <div className="relative w-[85px] aspect-[1] ">
        <ItemInputCheckBox
          data={data}
          itemPrice={itemPrice}
          originPrice={allData?.cardData!.originPrice}
          type={type}
          thumbnail={allData?.thumbnailData?.imageUrl}
          seller={allData?.sellerData?.name}
          productName={allData?.cardData?.name}
          optionData={allData?.optionData}
        />
        <Image
          src={allData?.thumbnailData?.imageUrl || ''}
          alt={allData?.cardData?.name || ''}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="grow shrink basis-0 relative ml-2.5">
        <div className="absolute -right-1.5 -top-1.5">
          <DeleteButton cartId={data.cartId} />
        </div>

        <Link
          href={`/products/${data.code}`}
          className="line-clamp-3 mr-[37px] mb-1 text-sm leading-[1.38]"
        >
          <p className="line-clamp-2">
            {allData?.sellerData && (
              <strong className="text-[color:var(--m-colors-gray900)] pr-1">
                {allData?.sellerData?.name}
              </strong>
            )}
            <span className="text-[color:var(--m-colors-gray900)] relative overflow-hidden break-all">
              {allData?.cardData?.name}
            </span>
          </p>
          {allData?.optionData &&
            allData?.optionData[0].category !== '옵션없음' && (
              <p className="block text-xs text-[#666666] leading-[1.38] mt-[5px]">
                옵션:{' '}
                {allData?.optionData.map((option) => (
                  <span key={option.id} className={styles['child-span']}>
                    {option.value}
                  </span>
                ))}
              </p>
            )}
        </Link>

        <div className="flex items-center justify-between min-h-[36px] mt-2">
          <CartItemPrice
            discountData={allData?.discountData}
            originPrice={allData?.cardData?.originPrice}
            count={data.count}
          />
          <UpdateCartCount item={data} />
        </div>
      </div>
    </>
  )
}
