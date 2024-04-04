import NoCart from '@/containers/cart/NoCart'

export default function page() {
  // TODO: 장바구니 데이터 불러오기
  const data = []

  if (data.length === 0) return <NoCart />

  return <div className="h-10">나는 장바구니</div>
}
