import CartItems from '@/containers/cart/CartItems'
import NoCart from '@/containers/cart/NoCart'
import ToolBar from '@/containers/cart/ToolBar'

export default function page() {
  // TODO: 장바구니 데이터 불러오기
  // let data

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
