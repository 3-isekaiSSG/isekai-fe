import NoCart from '@/containers/cart/NoCart'
import ToolBar from '@/containers/cart/ToolBar'

export default function page() {
  // TODO: 장바구니 데이터 불러오기
  const data = [
    {
      id: 1,
    },
  ]

  if (data.length === 0) return <NoCart />

  return (
    <>
      <div>ㅇㅇ cart</div>
      <ToolBar />
    </>
  )
}
