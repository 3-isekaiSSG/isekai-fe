import CategoryLinkTab from '@/components/CategoryTab/CategoryLinkTab'
import CategoryFilter from '@/components/Filter/CategoryFilter'
import NoItem from '@/components/product/NoItem'
import TwoProductCard from '@/components/product/TwoProductCard'
import { CategoryType } from '@/types/categoryType'
import { CategoryProductType } from '@/types/productType'
import CategorySmall from './CategorySmall'

/** smallName, sort를 제외한 쿼리값을 반환 */
const getFilter = (searchParams: { [key: string]: string }) => {
  const { smallName, sort, ...filterParams } = searchParams
  if (Object.keys(filterParams).length === 0) {
    return undefined
  }
  return filterParams
}

export default async function CategoryMPage({
  categoryName,
  midCategoryList = [],
  smallCategoryList = [],
  searchParams,
  productListData,
}: {
  categoryName: string[]
  midCategoryList?: CategoryType[]
  smallCategoryList?: CategoryType[]
  searchParams: { [key: string]: string }
  productListData?: CategoryProductType
}) {
  const filters: { [key: string]: string } | undefined =
    await getFilter(searchParams)

  return (
    <>
      <CategoryLinkTab data={midCategoryList} categoryName={categoryName} />
      <CategorySmall
        smallCategoryList={smallCategoryList}
        searchParams={searchParams}
      />

      {/* TODO: 여기랑 필터 연동 */}
      <CategoryFilter
        filters={filters}
        searchParams={searchParams}
        categoryName={categoryName}
      />

      {productListData && (
        <>
          <div className="text-[13px] text-[color:var(--m-colors-gray600)] px-4 py-0">
            <span className="font-bold text-[color:var(--m-colors-black)]">
              {productListData.total.toLocaleString('ko-KR')}개
            </span>
            의 상품이 있습니다
          </div>
          {/* TODO: 여기랑 필터 연동 */}
          {/* TODO: 이거 client 컴포넌트 분리 */}
          {filters && productListData.total === 0 && (
            <div className="text-center my-[17px]">
              <p className="text-[color:var(--m-colors-gray900)]">
                선택하신 필터와 일치하는 상품이 없습니다
              </p>
              <button
                type="button"
                // onClick={handleQueryReset}
                className="inline-flex items-center justify-center leading-[1.2] min-w-[2.5rem] bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] w-20 h-9 opacity-90 text-[13px] font-medium mt-2.5 px-4 py-0 rounded-[1.25rem]"
              >
                초기화
              </button>
            </div>
          )}

          {productListData.total ? (
            <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px] px-4">
              {productListData.products.map((item) => (
                <TwoProductCard
                  type="products"
                  itemCode={item.code}
                  key={item.id}
                  best={false}
                />
              ))}
            </div>
          ) : (
            <NoItem />
          )}
        </>
      )}
    </>
  )
}
