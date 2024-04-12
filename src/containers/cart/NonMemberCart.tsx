'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoIosPower } from 'react-icons/io'
import Divider from '@/components/Divider'
import { CartDeliveryType, CartItemsType } from '@/types/cartType'
import { getCartDataNonMember } from '@/utils/cartApi'
import AllSelectHeader from './AllSelectHeader'
import CartItemCardClient from './CartItemCardClient'
import DeliveryTypeSelect from './DeliveryTypeSelect'
import NoCart from './NoCart'

function CartCardWrapper({
  type,
  title,
  data,
}: {
  type: 'ssg' | 'post'
  title: string
  data: CartDeliveryType[]
}) {
  return (
    <div className="relative bg-[color:var(--m-colors-white)] tracking-[-0.3px] leading-[1.3] mt-0 mb-[15px] pt-0 scroll-mt-[45px]">
      <DeliveryTypeSelect type={type} title={title} />

      <div>
        {data.map((item: CartDeliveryType) => (
          <div
            key={item.cartId}
            className="flex items-start justify-between px-4 py-5 border-t-[color:var(--m-colors-gray200)] border-t border-solid"
          >
            <CartItemCardClient data={item} type={type} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NonMemberCart() {
  const [cartData, setCartData] = useState<CartItemsType | undefined>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCartDataNonMember()
      if (res) {
        setCartData(res)
      }
    }

    fetchData()
  }, [])

  if (cartData && cartData.cnt === 0)
    return <NoCart session={false} selectedDeliveryId={-1} />

  return (
    <main>
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

      <div className="mt-[25px]">
        <AllSelectHeader cartData={cartData} />

        {cartData && cartData?.ssg.length > 0 && (
          <CartCardWrapper type="ssg" title="쓱배송" data={cartData?.ssg} />
        )}
        <Divider height={4} color="var(--m-colors-gray150)" />
        {cartData && cartData?.post.length > 0 && (
          <CartCardWrapper type="post" title="택배배송" data={cartData?.post} />
        )}
      </div>
    </main>
  )
}
