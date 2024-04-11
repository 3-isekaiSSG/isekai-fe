import Divider from '@/components/Divider'
import TitleHeader from '@/components/Header/TitleHeader'
import ReviewAllList from '@/components/reviews/ReviewAllList'
import ReviewPhoto from '@/components/reviews/ReviewPhoto'
import ReviewStar from '@/components/reviews/ReviewStar'
import { getReviewTotal } from '@/utils/productDataApi'

export default async function ReviewPage({
  params,
}: {
  params: {
    code: number
  }
}) {
  const reviewTotalDataPromise = getReviewTotal('products', params.code)
  // TODO: 포토리뷰 / 전체리뷰
  let images
  let reviewsData

  const [reviewTotalData] = await Promise.all([reviewTotalDataPromise])

  return (
    <>
      <TitleHeader title="리뷰 전체보기" back />
      <main className="mt-[50px] h-[1000px]">
        {/* // TODO: 해당 상품의 리뷰 건네주기 */}
        <ReviewStar reviewTotalData={reviewTotalData} />

        {/* TODO: 포토 리뷰 있으면 */}
        {images && (
          <div className="mt-5 h-auto overflow-hidden relative px-4 py-0">
            <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
              포토&동영상 리뷰
            </p>
            <ReviewPhoto images={images} />
          </div>
        )}

        <Divider height={3} color="var(--m-colors-gray150)" />

        <ReviewAllList reviewsData={reviewsData} />
      </main>
    </>
  )
}
