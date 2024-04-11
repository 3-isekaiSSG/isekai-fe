import AppBar from '@/components/AppBar'
import GoToCart from '@/components/AppBar/GoToCart'
import ProductCarousel from '@/components/Carousel/ProductCarousel'
import Divider from '@/components/Divider'
import ImageBanner from '@/components/ImageBanner'
import BottomBtn from '@/components/products/BottomBtn'
import CategoryPreview from '@/components/products/CategoryPreview'
import ProductDetail from '@/components/products/ProductDetail'
import ProductHeader from '@/components/products/ProductHeader'
import ProductSimple from '@/components/products/ProductSimple'
import ReviewPreview from '@/components/products/ReviewPreview'
import ReviewSimple from '@/components/products/ReviewSimple'
import { getOptions } from '@/utils/optionApi'
import {
  getDeliveryType,
  getDetail,
  getDiscount,
  getImageList,
  getProductsCategory,
  getReviewTotal,
  getSeller,
} from '@/utils/productDataApi'

export default async function Page({
  params,
}: {
  params: {
    code: number
  }
}) {
  const imageListPromise = getImageList('products', params.code)
  const reviewTotalDataPromise = getReviewTotal('products', params.code)
  const productDetailDataPromise = getDetail('products', params.code)
  const deliveryTypePromise = getDeliveryType('products', params.code)
  const productSellerPromise = getSeller('products', params.code)
  const productDiscountPromise = getDiscount('products', params.code)
  const optionAllDataPromise = getOptions('products', params.code)
  const productCategoryPromise = getProductsCategory(params.code)

  const [
    imageList,
    reviewTotalData,
    productDetailData,
    deliveryType,
    productSeller,
    productDiscount,
    optionAllData,
    productCategoryData,
  ] = await Promise.all([
    imageListPromise,
    reviewTotalDataPromise,
    productDetailDataPromise,
    deliveryTypePromise,
    productSellerPromise,
    productDiscountPromise,
    optionAllDataPromise,
    productCategoryPromise,
  ])

  return (
    <>
      <AppBar after={false} value="" />
      <BottomBtn
        code={params.code}
        optionAllData={optionAllData}
        productDiscount={productDiscount}
        productData={productDetailData}
      />

      <main className="relative">
        <h2 className="hidden">상품상세</h2>
        <ProductHeader reviewTotalCnt={reviewTotalData?.reviewCount}>
          <GoToCart />
        </ProductHeader>

        <ProductCarousel
          productName={productDetailData?.name}
          imageList={imageList}
        />
        <ProductSimple
          productPrice={productDetailData?.originPrice}
          productName={productDetailData?.name}
          deliveryType={deliveryType}
          productSeller={productSeller}
          productDiscount={productDiscount}
        />
        <ImageBanner
          alt="유니버스 클럽 무료 체험"
          src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner06.png&w=750"
          priority={false}
          className="px-4"
        />
        {reviewTotalData?.reviewCount && reviewTotalData?.reviewCount > 0 ? (
          <ReviewSimple reviewTotalData={reviewTotalData} />
        ) : (
          <Divider height={4} />
        )}
        <Divider
          id="product-detail"
          height={4}
          color="var(--m-colors-gray150)"
        />
        <ProductDetail
          itemCode={params.code}
          detailHTML={productDetailData?.detail}
        />
        <Divider
          id="review-preview"
          height={4}
          color="var(--m-colors-gray150)"
        />
        {/* // TODO: 해당 상품의 리뷰 건네주기 */}
        <ReviewPreview reviewTotalData={reviewTotalData} reviewData={[]} />
        <Divider height={4} color="var(--m-colors-gray150)" />
        {productCategoryData && (
          <>
            <CategoryPreview productCategoryData={productCategoryData} />
            <Divider height={4} color="var(--m-colors-gray150)" />
          </>
        )}
      </main>
    </>
  )
}
