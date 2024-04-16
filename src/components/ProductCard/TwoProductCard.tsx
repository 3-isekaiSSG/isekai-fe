import Image from 'next/image'
import Link from 'next/link'
import { getIsLiked } from '@/utils/getClipApi'
import { getOptions } from '@/utils/optionApi'
import {
  getCardData,
  getDeliveryType,
  getDiscount,
  getReviewTotal,
  getSeller,
  getThumbnail,
} from '@/utils/productDataApi'
import GetCartBtn from '../Buttons/GetCartBtn'
import LikeBtn from '../Buttons/LikeBtn'
import CardPrice from './CardPrice'
import CardReview from './CardReview'
import UpdateRank from './UpdateRank'

export default async function TwoProductCard({
  type,
  itemCode,
  best = false,
  rank,
}: {
  type: 'products' | 'bundles'
  itemCode: number
  best?: boolean
  rank?: number
}) {
  const cardDataPromise = getCardData(type, itemCode)
  const thumbnailDataPromise = getThumbnail(type, itemCode)
  const deliveryTypePromise = getDeliveryType(type, itemCode)
  const sellerDataPromise = getSeller(type, itemCode)
  const discountDataPromise = getDiscount(type, itemCode)
  const reviewTotalDataPromise = getReviewTotal(type, itemCode)
  const optionAllDataPromise = getOptions(type, itemCode)
  const updateRank = 0

  const likeDivision = type === 'products' ? 'SINGLE_PRODUCT' : 'BUNDLE_PRODUCT'
  const isLikedPromise = getIsLiked(itemCode, likeDivision)

  const [
    cardData,
    thumbnailData,
    deliveryType,
    sellerData,
    discountData,
    reviewTotalData,
    optionAllData,
    isLiked,
  ] = await Promise.all([
    cardDataPromise,
    thumbnailDataPromise,
    deliveryTypePromise,
    sellerDataPromise,
    discountDataPromise,
    reviewTotalDataPromise,
    optionAllDataPromise,
    isLikedPromise,
  ])

  return (
    <div className="relative pt-2.5 pb-5">
      <Link href={`/${type}/${itemCode}`} className="relative" scroll={false}>
        <div className="relative w-full aspect-[1] after:bg-[color:var(--m-colors-black)]">
          <Image
            alt={cardData!.name}
            src={thumbnailData!.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </div>

        {best && (
          <div className="absolute inset-x-0 top-0 flex justify-between">
            <div className="flex flex-row items-center max-w-full ml-auto leading-none">
              {updateRank !== 0 && <UpdateRank rankChange={updateRank} />}

              {rank && (
                <div className="flex items-center justify-center w-5 h-5 leading-[13px] bg-[color:var(--m-colors-gray700)] font-medium text-[11px] text-[color:var(--m-colors-white)] p-1.5">
                  {String(rank).padStart(2, '0')}
                  <span className="text-[0px]">위</span>
                </div>
              )}
            </div>
          </div>
        )}
      </Link>

      <div className="flex items-center py-0.5">
        {deliveryType && deliveryType.engName && (
          <div className="h-5 w-[53px] relative">
            <Image
              src={`https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/rect/${deliveryType.engName}.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4`}
              alt={deliveryType.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex-1" />
        <div className="flex">
          <LikeBtn
            itemId={itemCode}
            isLiked={isLiked}
            likeDivision={likeDivision}
          />
          <GetCartBtn code={itemCode} optionAllData={optionAllData} />
        </div>
      </div>

      <Link
        href={`/${type}/${itemCode}`}
        className="block pr-5 mt-2.5 text-[color:var(--m-colors-gray900)]"
      >
        <p className="overflow-hidden text-ellipsis text-[13px] leading-[normal] tracking-[-0.3px] break-all line-clamp-2">
          <span className="font-bold">{sellerData?.name}</span> {cardData!.name}
        </p>

        <CardPrice
          discountData={discountData!}
          originPrice={cardData!.originPrice}
        />
        <CardReview reviewTotalData={reviewTotalData!} />
      </Link>
    </div>
  )
}
