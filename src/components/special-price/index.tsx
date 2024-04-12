/* eslint-disable @typescript-eslint/no-unused-vars */
import { getBundleList } from '@/utils/bundleApi'
import { getCategoryL } from '@/utils/categoryApi'
import ItemList from '../BundleList/OneItemBundleList'
import CategoryQueryTab from '../CategoryTab/CategoryQueryTab'
import DeliveryFilter from '../Filter/DeliveryFilter'
import { getDeliveryTypes } from '../Filter/action'
import ImageBanner from '../ImageBanner'
import NoItem from '../products/NoItem'

// TODO: 쿼리에 따라 특가 데이터 받아오기

export default async function Index({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const paramsToSortType: Record<string, string> = {
    happybuy: 'HIGHTEST_RATING',
    obanjang: 'LATEST',
    all: 'HIGHTEST_PURCHASE',
  }

  const params = searchParams.special || 'all'

  const categoryLPromise = getCategoryL()
  const deliveryListPromise = getDeliveryTypes()
  const bundleItemsPromise = getBundleList(paramsToSortType[params])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryList, deliveryList, bundleItems] = await Promise.all([
    categoryLPromise,
    deliveryListPromise,
    bundleItemsPromise,
  ])

  return (
    <>
      {searchParams.special === 'happybuy' && (
        <ImageBanner
          className=""
          alt="쓱특가 강력추천"
          src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0"
          priority
        />
      )}
      <div className="sticky z-[100] top-[46px] ">
        <CategoryQueryTab data={categoryList} type="large" />
      </div>
      <DeliveryFilter searchParams={searchParams} deliveryList={deliveryList} />
      <div>
        {paramsToSortType[params]}
        {/* {bundleItems.length ? (
          bundleItems.map((itemId) => (
            <ItemList key={itemId.id} itemId={itemId.bundleId} />
          ))
        ) : (
          <NoItem />
        )} */}
      </div>
    </>
  )
}
