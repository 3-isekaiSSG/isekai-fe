'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { IoIosPower } from 'react-icons/io'
import { useSetRecoilState } from 'recoil'
import { deliveryState, orderPostData } from '@/states/orderAtom'
import { DeliveryDataType } from '@/types/orderType'

export default function UserDeliveryAddress({
  session,
  selectedDeliveryData,
  selectedDeliveryId,
}: {
  session: boolean
  selectedDeliveryData?: DeliveryDataType
  selectedDeliveryId: number
}) {
  const setDeliveryData = useSetRecoilState(deliveryState)
  const setOrderDeliveryIdData = useSetRecoilState(orderPostData)

  useEffect(() => {
    if (selectedDeliveryData) {
      setDeliveryData(selectedDeliveryData)
      setOrderDeliveryIdData((prev) => ({
        ...prev,
        orderName: selectedDeliveryData?.name || '',
        orderPhone: selectedDeliveryData?.cellphone || '',
        deliveryAddressId: selectedDeliveryId,
      }))
    }
  }, [
    selectedDeliveryData,
    selectedDeliveryId,
    setDeliveryData,
    setOrderDeliveryIdData,
  ])

  if (session)
    return (
      <div className="tracking-[-0.3px] text-xs mx-4 my-5">
        <div className="flex justify-start items-center gap-[3px] mx-0 my-[11px] p-0">
          <i className="w-5 h-5 inline-flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6799 21.36H7.31995V22.56H16.6799V21.36Z"
                fill="rgb(0,0,0)"
              />
              <path
                d="M11.98 12.23C10.11 12.23 8.59998 10.71 8.59998 8.85C8.59998 6.99 10.12 5.47 11.98 5.47C13.85 5.47 15.36 6.99 15.36 8.85C15.36 10.71 13.84 12.23 11.98 12.23ZM11.98 6.66C10.78 6.66 9.79998 7.64 9.79998 8.84C9.79998 10.04 10.78 11.02 11.98 11.02C13.18 11.02 14.16 10.04 14.16 8.84C14.16 7.64 13.18 6.66 11.98 6.66Z"
                fill="rgb(0,0,0)"
              />
              <path
                d="M11.98 19.32L6.99999 14.28C5.53999 12.89 4.73999 11 4.73999 8.98C4.73999 4.95 7.98999 1.67 11.99 1.67C15.99 1.67 19.23 4.95 19.23 8.98C19.23 11.01 18.43 12.89 16.96 14.28L11.98 19.32ZM11.98 2.87C8.63999 2.87 5.92999 5.61 5.92999 8.98C5.92999 10.67 6.59999 12.26 7.82999 13.42L11.97 17.61L16.1 13.43C17.33 12.25 18 10.67 18 8.98C18.01 5.6 15.3 2.87 11.98 2.87Z"
                fill="rgb(0,0,0)"
              />
            </svg>
          </i>
          <h3 className="text-lg font-bold text-[color:var(--m-colors-gray900)] leading-[1.3]">
            {selectedDeliveryData?.nickname}
          </h3>

          <span className="text-xs font-medium bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] py-[3px] px-[6px] tracking-[-0.3px]">
            {selectedDeliveryData?.default ? '기본배송지' : '이번만배송지'}
          </span>
        </div>
        <p className="text-[13px] text-[color:var(--m-colors-gray700)] mt-[3px]">
          <span className="hidden">배송지 주소</span>[
          {selectedDeliveryData?.zipcode}] {selectedDeliveryData?.address}
        </p>

        {/* TODO: 배송지 변경으로 이동 또는 모달 */}
        <button
          type="button"
          className="inline-flex text-[color:var(--m-colors-gray600)] text-[13px] w-full items-center justify-center mt-[11px] px-0 py-2 border border-neutral-200 border-solid"
        >
          배송지 변경
        </button>
      </div>
    )

  return (
    <div className="tracking-[-0.3px] text-xs mx-4 my-5">
      <div className="flex justify-start items-center gap-[3px] mx-0 my-[11px] p-0">
        <i className="w-5 h-5 inline-flex justify-center items-center">
          <IoIosPower size={20} />
        </i>
        <h3 className="text-lg font-bold text-[color:var(--m-colors-gray900)] leading-[1.3]">
          로그인을 해보세요.
        </h3>
      </div>
      <p className="text-[13px] text-[color:var(--m-colors-gray700)] mt-[3px]">
        장바구니에 담아두신 상품을 나중에도 확인하실 수 있습니다.
      </p>
      <Link
        href="/login?query=order"
        className="inline-flex text-[color:var(--m-colors-gray600)] text-[13px] w-full items-center justify-center mt-[11px] px-0 py-2 border border-neutral-200 border-solid"
      >
        로그인 하기
      </Link>
    </div>
  )
}
