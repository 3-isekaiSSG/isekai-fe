import Divider from '@/components/Divider'
import TitleHeader from '@/components/Header/TitleHeader'
import ReviewAllList from '@/components/reviews/ReviewAllList'
import ReviewPhoto from '@/components/reviews/ReviewPhoto'
import ReviewStar from '@/components/reviews/ReviewStar'
import { ReviewDataType } from '@/types/ReviewType'
import { getReviewTotal } from '@/utils/productDataApi'

async function getReviewData(
  code: number,
): Promise<ReviewDataType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/reviews/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getReviewData', err)
    return undefined
  }
}

async function getPhotoReviewData(
  code: number,
): Promise<ReviewDataType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/reviews/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getPhotoReviewData', err)
    return undefined
  }
}

export default async function ReviewPage({
  params,
}: {
  params: {
    code: number
  }
}) {
  const reviewTotalDataPromise = getReviewTotal('products', params.code)
  const reviewDataPromise = getReviewData(params.code)
  const photoReviewDataPromise = getPhotoReviewData(params.code)

  const [reviewTotalData, reviewData, photoReviewData] = await Promise.all([
    reviewTotalDataPromise,
    reviewDataPromise,
    photoReviewDataPromise,
  ])

  return (
    <>
      <TitleHeader title="리뷰 전체보기" back />
      <main className="mt-[50px] h-[1000px]">
        <ReviewStar reviewTotalData={reviewTotalData} />

        {/* 포토 리뷰 있으면 */}
        {photoReviewData && photoReviewData?.content.length > 0 && (
          <div className="mt-5 h-auto overflow-hidden relative px-4 py-0">
            <p className="text-[color:var(--m-colors-gray900)] text-base font-bold leading-[normal] tracking-[-0.3px] mb-4">
              포토&동영상 리뷰
            </p>
            <ReviewPhoto reviews={photoReviewData?.content} />
          </div>
        )}

        <Divider height={3} color="var(--m-colors-gray150)" />

        <ReviewAllList reviewsData={reviewData?.content} />
      </main>
    </>
  )
}
