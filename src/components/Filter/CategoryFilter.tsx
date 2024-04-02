import AllFilter from './AllFilter'
import DeliveryFilter from './DeliveryFilter'
import HelpFilter from './HelpFilter'
import SortFilter from './SortFilter'
import TotalFilter from './TotalFilter'
import { getDeliveryTypes, getSortListTypes } from './action'

export default async function CategoryFilter({
  filters,
  searchParams,
}: {
  filters?: { [key: string]: string }
  searchParams: { [key: string]: string }
}) {
  const sortList = await getSortListTypes()
  const deliveryList = await getDeliveryTypes()

  return (
    <>
      <HelpFilter />
      <div className="bg-[color:var(--m-colors-white)]">
        <div className="flex items-center justify-between pr-4 py-2.5">
          <div className="flex flex-row items-center justify-start overflow-x-auto flex-1 pl-4">
            <DeliveryFilter
              searchParams={searchParams}
              deliveryList={deliveryList}
            />
          </div>
          <SortFilter searchParams={searchParams} sortList={sortList} />

          <AllFilter searchParams={searchParams} />
        </div>

        {/* FIXME: filters 전체 보기 */}
        {filters && (
          <TotalFilter filters={filters} searchParams={searchParams} />
        )}
      </div>
    </>
  )
}
