import CategoryTab from '@/components/CategoryTab'
import Divider from '@/components/Divider'
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

  const categoryData = mediumData.map((item) => ({
    id: item.id,
    categoryMId: item.categoryMId,
    title: item.mediumName === '상품 전체보기' ? '전체' : item.mediumName,
  }))

  return (
    <section className="px-4 py-0 mt-10">
      <div className="relative z-10 flex items-end text-left">
        <div className="min-w-full mr-2.5">
          <h3 className="text-xl leading-[normal] font-bold">
            카테고리 베스트
          </h3>
        </div>
      </div>
      <Divider height={20} unit="px" color="" />

      <CategoryTab data={categoryData} isMore />
      <div className="py-4">
        <div>어케하지</div>
      </div>
    </section>
  )
}
