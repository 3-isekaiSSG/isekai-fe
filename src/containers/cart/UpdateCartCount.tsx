'use client'

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { CartDeliveryType } from '@/types/cartType'
import { oneAddCart, oneDropCart } from './action'

export default function UpdateCartCount({
  item,
  session = true,
}: {
  item: CartDeliveryType
  session?: boolean
}) {
  const [count, setCount] = useState<number>(item.count)

  const handleMinus = async () => {
    if (item.count === 1) {
      return
    }
    await oneDropCart(item.cartId)
    setCount((prev) => prev - 1)
  }

  const handlePlus = async () => {
    await oneAddCart(item.cartId)
    setCount((prev) => prev + 1)
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
          {session ? item.count : count}
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
