import CategoryTab from '@/components/CategoryTab'
import Divider from '@/components/Divider'
import MiniTitle from '@/components/MiniTitle'
import { CategoryType } from '@/types/categoryType'

export default function LCategoryBest({
  mediumData,
}: {
  mediumData: CategoryType[] | []
}) {
  return (
    <section className="px-4 py-0 mt-10">
      <MiniTitle title="카테고리 베스트" description="" />
      <Divider height={20} unit="px" color="" />

      <CategoryTab data={mediumData} type="medium" />
      <div className="py-4">
        <div>리스트</div>
      </div>
    </section>
  )
}
