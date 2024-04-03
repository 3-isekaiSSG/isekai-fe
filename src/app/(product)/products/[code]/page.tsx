import ProductCarousel from '@/components/Carousel/ProductCarousel'
import Divider from '@/components/Divider'
import ImageBanner from '@/components/ImageBanner'
import CardReview from '@/components/product/CardReview'
import ProductDetail from '@/components/product/ProductDetail'
import ProductHeader from '@/components/product/ProductHeader'
import ProductSimple from '@/components/product/ProductSimple'
import { getDetail, getImageList, getReviewTotal } from '@/utils/productDataApi'

export default async function Page({
  params,
}: {
  params: {
    code: number
  }
}) {
  const imageList = await getImageList('products', params.code)
  const reviewTotalData = await getReviewTotal('products', params.code)
  const productDetailData = await getDetail('products', params.code)
  // const
  // console.log(imageList)
  console.log(productDetailData)

  return (
    <main className="relative">
      <h2 className="hidden">상품상세</h2>
      <ProductHeader reviewTotalCnt={reviewTotalData?.reviewCount} />
      <ProductCarousel productName="상품이름" imageList={imageList} />
      <ProductSimple />

      <ImageBanner
        alt="유니버스 클럽 무료 체험"
        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner06.png&w=750"
        priority={false}
        className="px-4"
      />
      {reviewTotalData?.reviewCount && reviewTotalData?.reviewCount > 0 ? (
        <CardReview card={false} type="products" itemCode={params.code} />
      ) : (
        <Divider height={4} />
      )}

      <Divider id="product-detail" height={4} color="var(--m-colors-gray150)" />
      <ProductDetail type="products" itemCode={params.code} />

      <Divider id="review-preview" height={4} color="var(--m-colors-gray150)" />
      <div>고객리뷰 평점 토탈</div>
      <div>포토&동영상</div>
      <div>전체리뷰 5개</div>
      <div>전체리뷰 더보기</div>

      <Divider height={4} color="var(--m-colors-gray150)" />
    </main>
  )
}
