'use client'

// import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { orderItemsState } from '@/states/orderAtom'
import { calculateTotalPrice } from '@/utils/calculateTotalPrice'

export function handleFinishOrder() {
  console.log('주문 끗')
}

export default function OrderToolBar() {
  // const router = useRouter()

  const orderItemData = useRecoilValue(orderItemsState)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const calcTotalPrice = calculateTotalPrice(
      orderItemData.ssg,
      orderItemData.post,
      'buyPrice',
    )
    setTotalPrice(calcTotalPrice)
  }, [orderItemData])

  return (
    <div className="z-[99] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        <button
          type="button"
          onClick={handleFinishOrder}
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          <strong className="font-bold">
            {totalPrice.toLocaleString('ko-KR')}원
          </strong>{' '}
          결제하기
        </button>
      </div>
    </div>
  )
}
