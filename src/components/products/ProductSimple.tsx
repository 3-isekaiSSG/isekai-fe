'use client'

import Image from 'next/image'
import { useRecoilState } from 'recoil'
import {
  DiscountType,
  ProductDeliveryType,
  SellersType,
} from '@/types/productDataType'
import ShareModal from './ShareModal'
import { ShareState } from './state'

export function Price({
  productDiscount,
  originPrice = 0,
}: {
  productDiscount?: DiscountType
  originPrice: number
}) {
  if (productDiscount?.discounted)
    return (
      <div className="flex flex-col items-baseline mt-2">
        <del className="text-base text-[color:var(--m-colors-gray600)]">
          <span className="hidden">정상가격</span>
          {originPrice.toLocaleString('ko-KR')}원
        </del>

        <div className="flex items-baseline justify-start">
          <p className="block font-semibold text-2xl text-[color:var(--m-colors-primary)] pr-1">
            <span className="hidden">할인율</span>
            {productDiscount.discountRate}%
          </p>
          <p className="block font-semibold text-2xl text-[color:var(--m-colors-black)] overflow-hidden text-ellipsis mt-1 pr-1">
            <span className="hidden">판매가격</span>
            {productDiscount.discountPrice.toLocaleString('ko-KR')}원
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

export default function ProductSimple({
  productName,
  productPrice = 0,
  deliveryType,
  productSeller,
  productDiscount,
}: {
  productName?: string
  productPrice?: number
  deliveryType?: ProductDeliveryType
  productSeller?: SellersType
  productDiscount?: DiscountType
}) {
  const [modal, setModal] = useRecoilState(ShareState)

  const showModal = () => {
    setModal({ isOpen: true })
  }

  const closeModal = () => {
    setModal({ isOpen: false })
  }

  return (
    <section>
      <div className="relative border-b-[color:var(--m-colors-gray300)] leading-[normal] tracking-[-0.3px] min-h-[17px] flex justify-between px-4 py-[7px] border-b border-solid">
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
        <button type="button" className="relative w-6 h-6" onClick={showModal}>
          <Image
            src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg"
            alt="공유"
            fill
          />
        </button>
      </div>

      <div className="leading-[normal] tracking-[-0.3px] mx-0 my-[15px] px-4 py-0">
        <h2 className="overflow-hidden break-all line-clamp-3">
          <span
            className={`{productSeller ? 'max-h-11 min-h-[25px]' : 'h-0'} overflow-hidden block text-[13px] font-bold tracking-[-0.3px] mr-[3px] mb-2`}
          >
            {productSeller?.name}
          </span>
          <span className="text-base text-[color:var(--m-colors-gray900)]">
            {productName}
          </span>
        </h2>

        <div className="mt-6">
          <Price productDiscount={productDiscount} originPrice={productPrice} />
        </div>
      </div>
      <ShareModal isOpen={modal.isOpen} close={closeModal} />
    </section>
  )
}
