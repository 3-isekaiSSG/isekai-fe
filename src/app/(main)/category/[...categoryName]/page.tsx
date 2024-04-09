import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryMPage from '@/containers/category/[categoryName]/CategoryMPage'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'
import { getCategoryL, getCategoryM, getCategoryS } from '@/utils/categoryApi'
import { getCategoryProduct } from '@/utils/categoryProductQueryApi'

export default async function page({
  params,
  searchParams,
}: {
  params: { categoryName: string[] }
  searchParams: { [key: string]: string }
}) {
  const categoryLString = decodeURIComponent(decodeURI(params.categoryName[0]))
  const categoryMString = params.categoryName[1]
    ? decodeURIComponent(decodeURI(params.categoryName[1]))
    : '전체보기'
  const queryString = new URLSearchParams(searchParams).toString()

  const largeCategoryListData = getCategoryL()
  const midCategoryListData = getCategoryM(categoryLString)
  const smallCategoryListData = getCategoryS(categoryMString)
  // TODO: page 정보로 무한 스크롤
  const productListData = getCategoryProduct(
    categoryLString,
    categoryMString,
    queryString,
  )

  const [largeCategoryList, midCategoryList, smallCategoryList, productList] =
    await Promise.all([
      largeCategoryListData,
      midCategoryListData,
      smallCategoryListData,
      productListData,
    ])

  return (
    <main className="relative min-h-[50vh]">
      <CategoryNameHeader
        categoryName={[categoryLString, categoryMString]}
        largeCategoryList={largeCategoryList}
      />

      {params.categoryName.length === 1 ? (
        <CategoryLAll largeName={params.categoryName[0]} />
      ) : (
        <CategoryMPage
          categoryName={params.categoryName}
          midCategoryList={midCategoryList?.categoryMList}
          smallCategoryList={smallCategoryList?.categorySList}
          searchParams={searchParams}
          productListData={productList}
        />
      )}
    </main>
  )
}
