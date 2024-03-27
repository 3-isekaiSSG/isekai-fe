import CategoryTab from '@/components/CategoryTab'
import { CategoryMType } from '@/types/categoryType'

export default function LCategoryBest({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  largeName,
  mediumData,
}: {
  largeName: string
  mediumData: CategoryMType[] | []
}) {
  // TODO: largeName 카테고리 베스트
  // 중 카테고리 리스트

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const CategoryList = []
  console.log(mediumData)
  // mediumName -> title
  const categoryData = mediumData.map((item) => ({
    id: item.id,
    categoryMId: item.categoryMId,
    title: item.mediumName,
  }))

  console.log(categoryData)

  return (
    <section className="px-4 py-0 mt-10">
      <div className="relative z-10 flex items-end text-left">
        <div className="min-w-full mr-2.5">
          <h3 className="text-xl leading-[normal] font-bold">
            카테고리 베스트
          </h3>
        </div>
      </div>
      <div>
        <CategoryTab data={categoryData} isMore />
        <div>dtd</div>
      </div>
    </section>
  )
}
