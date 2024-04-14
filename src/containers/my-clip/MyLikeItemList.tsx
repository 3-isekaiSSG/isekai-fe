import { useRecoilValue } from 'recoil'
import { filterState, likeCntState } from '@/states/likeAtom'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import SellerList from './SellerList'
import style from './mylike.module.css'

export default function MyLikeItemList() {
  const filter = useRecoilValue(filterState)
  const likeCnt = useRecoilValue(likeCntState)

  return (
    <div className={style.mylike_cmitem_wrap}>
      {filter.product && <ProductList cnt={likeCnt.product} />}
      {filter.seller && <SellerList cnt={likeCnt.seller} />}
      {filter.category && <CategoryList cnt={likeCnt.category} />}
    </div>
  )
}
