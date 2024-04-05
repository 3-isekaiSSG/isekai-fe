import { Metadata } from 'next'
import CartItems from '@/containers/cart/CartItems'
import NoCart from '@/containers/cart/NoCart'
import ToolBar from '@/containers/cart/ToolBar'

export const metadata: Metadata = {
  title: '장바구니',
}

export default async function page() {
  // TODO: 장바구니 데이터 불러오기

  const data = [
    {
      id: 1,
    },
  ]
  // data = []

  if (data.length === 0) return <NoCart />

  return (
    <>
      <CartItems />
      {/* TODO: 여기에 선택 상품 갯수, 배송비, 총 가격 전달 */}
      <ToolBar />
    </>
  )
}
