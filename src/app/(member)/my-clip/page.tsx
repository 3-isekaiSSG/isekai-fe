import MyLikeFolder from '@/containers/my-clip/MyLikeFolder'
import MyLikeItemArea from '@/containers/my-clip/MyLikeItemArea'
import {
  getCategoryLikeData,
  getLikeCnt,
  getProductLikeData,
  getSellerLikeData,
} from '@/utils/getClipApi'

export default async function Page() {
  const likeCntData = getLikeCnt()
  const productLikeData = getProductLikeData()
  const sellerLikeData = getSellerLikeData()
  const categoryLikeData = getCategoryLikeData()

  const [likeCnt, productLike, sellerLike, categoryLike] = await Promise.all([
    likeCntData,
    productLikeData,
    sellerLikeData,
    categoryLikeData,
  ])

  return (
    <div className="overscroll-none">
      <MyLikeFolder />
      <MyLikeItemArea
        likeCnt={likeCnt}
        productLike={productLike}
        sellerLike={sellerLike}
        categoryLike={categoryLike}
      />
    </div>
  )
}
