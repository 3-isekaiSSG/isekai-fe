'use client'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { useSetRecoilState } from 'recoil'
import { cartState } from '@/states/cartAtom'
import { CartDeliveryType } from '@/types/cartType'
import { oneAddCart, oneDropCart } from './action'

export default function UpdateCartCount({
  item,
  type,
}: {
  item: CartDeliveryType
  type?: 'ssg' | 'post'
}) {
  const setCart = useSetRecoilState(cartState)
  // const setCheckedItems = useSetRecoilState(checkedItemsState)

  const handleMinus = async () => {
    if (item.count === 1) {
      return
    }
    await oneDropCart(item.cartId)

    if (type) {
      setCart((prev) => {
        const updatedItems = prev[type].map((cartItem) => {
          if (cartItem.cartId === item.cartId) {
            return { ...cartItem, count: cartItem.count - 1 }
          }
          return cartItem
        })

        return {
          ...prev,
          [type]: updatedItems,
        }
      })
    }
  }

  const handlePlus = async () => {
    await oneAddCart(item.cartId)

    if (type) {
      setCart((prev) => {
        const updatedItems = prev[type].map((cartItem) => {
          if (cartItem.cartId === item.cartId) {
            return { ...cartItem, count: cartItem.count + 1 }
          }
          return cartItem
        })

        return {
          ...prev,
          [type]: updatedItems,
        }
      })
    }
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
