import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryMPage from '@/containers/category/[categoryName]/CategoryMPage'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'
import {
  CategoryMType,
  CategorySType,
  CategoryType,
} from '@/types/categoryType'
import { getCategoryL, getCategoryM, getCategoryS } from '@/utils/categoryApi'
import { getCategoryProduct } from '@/utils/categoryProductQueryApi'

const getCategoryLargeListData = async () => {
  const res = await getCategoryL()
  return res
}

const getCategoryMListData = async (categoryLargeName: string) => {
  const res = await getCategoryM(categoryLargeName)
  return res
}

const getCategorySListData = async (categoryMediumName: string) => {
  const res = await getCategoryS(categoryMediumName)
  return res
}

const getProductListDataByCategory = async (
  categoryL: string,
  categoryM: string,
  searchParams: { [key: string]: string },
) => {
  const queryString = new URLSearchParams(searchParams).toString()
  const res = await getCategoryProduct(categoryL, categoryM, queryString)
  return res
}

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

  const largeCategoryList: CategoryType[] = await getCategoryLargeListData()
  const midCategoryList: CategoryMType | undefined =
    await getCategoryMListData(categoryLString)
  const smallCategoryList: CategorySType | undefined =
    await getCategorySListData(categoryMString)

  const productListData = await getProductListDataByCategory(
    categoryLString,
    categoryMString,
    searchParams,
  )
  console.log('++++++', productListData)

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
          productListData={productListData}
        />
      )}
    </main>
  )
}
