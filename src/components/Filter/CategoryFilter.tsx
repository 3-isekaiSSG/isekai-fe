import AllFilter from './AllFilter'
import DeliveryFilter from './DeliveryFilter'
import HelpFilter from './HelpFilter'
import SortFilter from './SortFilter'
import TotalFilter from './TotalFilter'
import { getDeliveryTypes, getSortListTypes } from './action'

const setPriceFilter = (minPrcStr: number, maxPrcStr: number): string => {
  const minPrc = Number.isInteger(minPrcStr) && minPrcStr
  const maxPrc = Number.isInteger(maxPrcStr) && maxPrcStr

  if (!minPrc || !maxPrc) return ''
  if (minPrc === 0) return `~${maxPrc}원`
  return `${minPrc}원~${maxPrc}원`
}

export default async function CategoryFilter({
  filters,
  searchParams,
  categoryName,
}: {
  filters?: { [key: string]: string }
  searchParams: { [key: string]: string }
  categoryName: string[]
}) {
  const sortList = await getSortListTypes()
  const deliveryList = await getDeliveryTypes()

  const priceFilter = setPriceFilter(
    Number(searchParams.minPrc),
    Number(searchParams.maxPrc),
  )

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

          <AllFilter
            searchParams={searchParams}
            priceFilter={priceFilter}
            categoryName={categoryName}
          />
        </div>

        {filters && (
          <TotalFilter
            filters={filters}
            searchParams={searchParams}
            priceFilter={priceFilter}
          />
        )}
      </div>
    </>
  )
}
