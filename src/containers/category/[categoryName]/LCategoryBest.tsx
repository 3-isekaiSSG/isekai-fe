import CategoryQueryTab from '@/components/CategoryTab/CategoryQueryTab'
import Divider from '@/components/Divider'
import MiniTitle from '@/components/MiniTitle'
import TwoProductCard from '@/components/ProductCard/TwoProductCard'
import { CategoryType } from '@/types/categoryType'
import { IdCodeType } from '@/types/productType'

export default function LCategoryBest({
  mediumData,
  productListData = [],
}: {
  mediumData: CategoryType[] | []
  productListData?: IdCodeType[]
}) {
  console.log(productListData)
  return (
    <section className="px-4 py-0 mt-10">
      <MiniTitle title="카테고리 베스트" description="" />
      <Divider height={5} />

      <CategoryQueryTab data={mediumData} type="medium" />
      <div className="py-4">
        <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px] px-4">
          {productListData.map((item) => (
            <TwoProductCard
              type="products"
              itemCode={item.code}
              key={item.id}
              best
              rank={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
