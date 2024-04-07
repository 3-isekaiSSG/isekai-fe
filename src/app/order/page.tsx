import TitleHeader from '@/components/Header/TitleHeader'
import OrderCards from '@/containers/order/OrderCards'
import OrderToolBar from '@/containers/order/OrderToolBar'

export default function page() {
  return (
    <div className="relative">
      <TitleHeader title="결제하기" back />
      <main className="mt-[50px] pt-1 pb-[100px] bg-[color:var(--m-colors-gray100)]">
        <OrderCards />
      </main>

      <OrderToolBar />
    </div>
  )
}
