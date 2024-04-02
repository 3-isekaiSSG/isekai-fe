import ProductCarousel from '@/components/Carousel/ProductCarousel'
import Divider from '@/components/Divider'
import ImageBanner from '@/components/ImageBanner'
import CardReview from '@/components/product/CardReview'
import ProductDetail from '@/components/product/ProductDetail'
import ProductHeader from '@/components/product/ProductHeader'

export default async function Page({ params }: { params: { code: number } }) {
  return (
    <main className="relative">
      <h2 className="hidden">상품상세</h2>
      <ProductHeader />

      <ProductCarousel type="products" code={params.code} />

      <div>배송타입 + 공유</div>
      <div>상품 판매자 / 이름</div>
      <div>가격</div>
      <ImageBanner
        alt="유니버스 클럽 무료 체험"
        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner06.png&w=750"
        priority={false}
        className="px-4"
      />
      <div>상품 재고가 얼마 ㅇㅅㅇ</div>
      <CardReview card={false} type="products" itemCode={params.code} />

      <div>배송정보</div>

      <Divider id="product-detail" height={8} color="var(--m-colors-gray150)" />
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
