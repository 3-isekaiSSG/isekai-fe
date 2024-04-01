'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  CardDataType,
  ProductDeliveryType,
  SellersType,
  ThumbnailType,
} from '@/types/productCardType'
import { RankingItemType } from '@/types/productType'
import {
  getCardData,
  getDeliveryType,
  getSeller,
  getThumbnail,
} from '@/utils/productCardApi'
import CartBtn from '../Buttons/CartBtn'
import LikeBtn from '../Buttons/LikeBtn'
import CardPrice from './CardPrice'
import CardReview from './CardReview'

export default function TwoProductCard({
  type,
  itemCode,
  best,
  // tag = undefined,
}: {
  type: 'products' | 'bundles'
  itemCode: number
  best: boolean
  // tag: string | undefined
}) {
  // const item = await getProductItem(itemId)
  const item: RankingItemType = {
    productId: 111,
    imageUrl: 'https://sitem.ssgcdn.com/14/24/61/item/1000291612414_i1_336.jpg',
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

  const [card, setCard] = useState<CardDataType | undefined>()
  const [thumbnail, setThumbnail] = useState<ThumbnailType | undefined>()
  const [productDelivery, setProductDelivery] = useState<
    ProductDeliveryType | undefined
  >()
  const [seller, setSeller] = useState<SellersType | undefined>()

  useEffect(() => {
    async function fetchData() {
      const cardData = await getCardData(type, itemCode)
      if (cardData) {
        setCard(cardData)
      }

      const thumbnailData = await getThumbnail(type, itemCode)
      if (thumbnailData) {
        setThumbnail(thumbnailData)
      }

      const deliveryType = await getDeliveryType(type, itemCode)
      if (deliveryType) {
        setProductDelivery(deliveryType)
      }

      const sellerData = await getSeller(type, itemCode)
      if (sellerData) {
        setSeller(sellerData)
      }
    }

    fetchData()
  }, [type, itemCode])

  return (
    <div className="relative pt-2.5 pb-5">
      <Link href={`/${type}/${itemCode}`} className="relative ">
        <div className="relative w-full aspect-[1] after:bg-[color:var(--m-colors-black)]">
          <Image
            alt={item.title}
            src={
              thumbnail
                ? thumbnail.imageUrl
                : 'https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/img_nodata.png'
            }
            fill
            sizes="100vw"
          />
        </div>

        {best && (
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
        )}
      </Link>

      <div className="flex items-center py-0.5">
        {productDelivery && productDelivery.engName && (
          <div className="h-5 w-[53px] relative">
            <Image
              src={`https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/rect/${productDelivery.engName}.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4`}
              alt={productDelivery.name}
              fill
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex-1" />
        <div className="flex">
          {/* TODO: 제대로 수정 */}
          <LikeBtn itemId={itemCode} isLiked={isLiked} likeDivision={0} />
          <CartBtn itemId={itemCode} />
        </div>
      </div>

      <Link
        href={`/${type}/${itemCode}`}
        className="block pr-5 mt-2.5 text-[color:var(--m-colors-gray900)]"
      >
        <p className="overflow-hidden text-ellipsis text-[13px] leading-[normal] tracking-[-0.3px] break-all line-clamp-2">
          <span className="font-bold">{seller?.name}</span> {card?.name}
        </p>

        {card && (
          <CardPrice
            type={type}
            itemCode={itemCode}
            originPrice={card?.originPrice}
          />
        )}
        <CardReview type={type} itemCode={itemCode} />
      </Link>

      {/* {tag && (
        <div className="overflow-hidden max-h-11 mt-1.5 mb-0.5 pr-2">
          <span className="max-w-full mb-1 mr-1 leading-none align-top whitespace-nowrap">
            <span className="inline-flex max-w-full items-center font-medium align-top text-[11px] leading-5 bg-[color:var(--m-colors-gray150)] text-[color:var(--m-colors-gray800)] px-1.5">
              {tag}
            </span>
          </span>
        </div>
      )} */}
    </div>
  )
}
