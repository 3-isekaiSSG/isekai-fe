import Divider from '@/components/Divider'
import TitleHeader from '@/components/Header/TitleHeader'
import OrderProduct from '@/containers/order/OrderProduct'
import ReviewForm from '@/containers/write-review/ReviewForm'

export default function WriteReviewPage() {
  return (
    <>
      <TitleHeader title="리뷰 쓰기" close />
      <main className="mt-[50px]">
        <OrderProduct />
        <Divider height={4} color="var(--m-colors-gray150)" />
        <ReviewForm />
      </main>

      <div>등록버튼</div>
    </>
  )
}
