'use client'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { CartDeliveryType } from '@/types/cartType'
import { addCart } from '@/utils/addCartApi'
import { oneDropCart } from './action'

export default function UpdateCartCount({ item }: { item: CartDeliveryType }) {
  // FIXME: 장바구니 추가 제거 API 안됨
  const handleMinus = async () => {
    if (item.count === 1) {
      return
    }
    await oneDropCart(item.cartId)
  }
  const handlePlus = async () => {
    await addCart([
      {
        optionsId: item.optionId,
        count: 1,
      },
    ])
  }

  return (
    <div className="inline-block relative min-w-[100px] text-center align-top py-0">
      <div className="relative h-full w-full flex justify-between">
        <button
          type="button"
          className="left-0  p-1 top-0"
          onClick={handleMinus}
        >
          <span className="hidden">주문수량빼기</span>
          <FiMinus />
        </button>

        <span className="hidden">현재수량</span>
        <span className="block h-full text-[color:var(--m-colors-gray900)] text-sm font-semibold leading-[31px] text-center">
          {item.count}
        </span>

        <button
          type="button"
          className="right-0  p-1 top-0"
          onClick={handlePlus}
        >
          <span className="hidden">주문수량더하기</span>
          <FiPlus />
        </button>
      </div>
    </div>
  )
}
