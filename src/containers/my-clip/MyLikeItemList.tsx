import { useRecoilValue } from 'recoil'
import TwoProductCard from '@/components/ProductCard/TwoProductCard'
import { favoriteListState } from './state'

export default function MyLikeItemList() {
  const favoriteList = useRecoilValue(favoriteListState)

  return (
    <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px] px-4">
      {favoriteList.map((item) => (
        <TwoProductCard
          type={item.division === 'SINGLE_PRODUCT' ? 'products' : 'bundles'}
          itemCode={item.identifier}
          key={item.favoriteId}
          best={false}
        />
      ))}
    </div>
  )
}
