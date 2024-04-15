import TwoProductCard from '@/components/ProductCard/TwoProductCard'
import { CategoryProductType } from '@/types/productType'

export default function LCategoryBest({
  productListData,
}: {
  productListData?: CategoryProductType | undefined
}) {
  return (
    <div className="py-4">
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px] px-4">
        {productListData &&
          productListData?.products?.map((item) => (
            <TwoProductCard
              type="products"
              itemCode={item.code}
              key={item.id}
              best
              rank={item.id + 1}
            />
          ))}
      </div>
    </div>
  )
}
