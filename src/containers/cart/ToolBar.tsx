'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { allItemsPriceState, checkedItemsPriceState } from '@/states/cartAtom'

interface ItemPriceType {
  cartId: number
  count: number
  price: number
}

export default function ToolBar() {
  const [selectedPrice, setSelectedPrice] = useState<number>(0)

  const checkedItemsPrice = useRecoilValue(checkedItemsPriceState)
  const allItemsPrice = useRecoilValue(allItemsPriceState)

  const router = useRouter()

  const calculateTotalPrice = (items: ItemPriceType[]) => {
    return items.reduce((total: number, currentItem: ItemPriceType) => {
      return total + currentItem.count * currentItem.price
    }, 0)
  }

  const handleClick = () => {
    console.log('order ㄱㄱ')
    router.push('/order')
  }

  useEffect(() => {
    if (checkedItemsPrice.length !== 0) {
      const totalPrice = calculateTotalPrice(checkedItemsPrice)
      setSelectedPrice(totalPrice)
    } else {
      const totalPrice = calculateTotalPrice(allItemsPrice)
      setSelectedPrice(totalPrice)
    }
  }, [checkedItemsPrice, allItemsPrice])

  return (
    <div className="z-[99] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        <button
          type="button"
          onClick={handleClick}
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          주문하기
        </button>
      </div>

      <div className="fixed bottom-[52px]  max-w-screen-sm max-h-[84vh] shadow-[rgba(0,0,0,0.2)_0px_-4px_16px] rounded-t-2xl inset-x-0 bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden">
        <div className="relative bg-[color:var(--m-colors-white)] p-4 rounded-[6px_6px_0_0]">
          <p className="text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
            {checkedItemsPrice.length !== 0 ? (
              <span>선택 상품 {checkedItemsPrice.length}개 </span>
            ) : (
              <span>전체 상품 {allItemsPrice.length}개 </span>
            )}
            <span>
              {selectedPrice.toLocaleString('ko-KR')}원 + 배송비{' '}
              {Number(0).toLocaleString('ko-KR')}원 ={' '}
            </span>
            <span className="font-bold">
              {selectedPrice.toLocaleString('ko-KR')}원
            </span>
          </p>
          <p className="text-[color:var(--m-colors-primary,#ff5452)] text-[13px] tracking-[-0.3px] leading-[17px] break-all mt-1">
            청구할인 혜택보기
          </p>
        </div>
      </div>
    </div>
  )
}
