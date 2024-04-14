import TwoProductCard from '@/components/ProductCard/TwoProductCard'
import { IdCodeType } from '@/types/productType'

export default function SearchResultItem({ data }: { data: IdCodeType[] }) {
  return (
    <>
      <div className="pt-4 pb-4 pl-[15px] pr-[15px] text-sm text-[color:var(--m-colors-black)]">
        <h3 className="font-bold">{data.length}개의 검색 결과가 있습니다.</h3>
      </div>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px] px-4">
        {data.map((item) => (
          <TwoProductCard
            type="products"
            itemCode={item.code}
            key={item.id}
            best={false}
          />
        ))}
      </div>
    </>
  )
}
