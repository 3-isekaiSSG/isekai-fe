import CategoryQueryTab from '@/components/CategoryTab/CategoryQueryTab'
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
      <Divider height={5} color="" />

      <CategoryQueryTab data={mediumData} type="medium" />
      <div className="py-4">
        <div>2개 리스트 좌라락</div>
      </div>
    </section>
  )
}
