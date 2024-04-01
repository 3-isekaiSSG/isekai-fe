import CategoryQueryTab from '@/components/CategoryTab/CategoryQueryTab'
import DeliveryTab from '@/components/DeliveryTab'
import TwoItemBundleList from '@/components/ui/TwoItemBundleList'
import { CategoryType } from '@/types/categoryType'
import { IdListType } from '@/types/productType'
import NoItem from './NoItem'

export default function SpecialToday() {
  const bundleItems: IdListType[] = [
    {
      id: 0,
      bundleId: 0,
    },
    {
      id: 1,
      bundleId: 1,
    },
    {
      id: 2,
      bundleId: 2,
    },
  ]

  // FIXME: 일단 스태틱
  const categoryList: CategoryType[] = [
    {
      id: 0,
      categoryId: 0,
      name: '오반장',
    },
    {
      id: 1,
      categoryId: 1,
      name: '전단행사',
    },
    {
      id: 2,
      categoryId: 2,
      name: '1+1',
    },
  ]

  return (
    <>
      <div className="sticky z-[100] top-[46px] ">
        <CategoryQueryTab data={categoryList} type="today" />
      </div>
      <DeliveryTab />
      <div>
        {bundleItems.length ? (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px]">
            {bundleItems.map((itemId) => (
              <TwoItemBundleList
                key={itemId.id}
                itemId={itemId.bundleId}
                tag="오반장"
              />
            ))}
          </div>
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
