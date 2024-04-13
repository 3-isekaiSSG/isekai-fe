import { getBundleList } from '@/utils/bundleApi'
import { getCategoryL } from '@/utils/categoryApi'
import ItemList from '../../components/BundleList/OneItemBundleList'
import CategoryQueryTab from '../../components/CategoryTab/CategoryQueryTab'
import DeliveryFilter from '../../components/Filter/DeliveryFilter'
import { getDeliveryTypes } from '../../components/Filter/action'
import ImageBanner from '../../components/ImageBanner'
import NoItem from '../../components/products/NoItem'

export default async function Index({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const paramsToSortType: Record<string, string> = {
    happybuy: 'HIGHEST_RATING',
    obanjang: 'LATEST',
    all: 'HIGHTEST_PURCHASE',
  }

  const params = searchParams.special || 'all'

  const categoryLPromise = getCategoryL()
  const deliveryListPromise = getDeliveryTypes()
  const bundleItemsPromise = getBundleList(paramsToSortType[params])

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
        {bundleItems.length ? (
          bundleItems.map((item) => <ItemList key={item.id} code={item.code} />)
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
