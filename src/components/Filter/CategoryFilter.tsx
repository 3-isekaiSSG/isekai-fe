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

          <button type="button" aria-label="전체 필터 보기">
            <svg
              className="w-4 h-4 leading-[1em] text-[color:var(--m-colors-black)] align-middle"
              viewBox="0 0 24 24"
              focusable="false"
              name="FilterEmartIcon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.42177 2.44626C3.55963 2.15016 3.85664 1.96082 4.18327 1.96082H19.8193C20.1459 1.96082 20.4429 2.15015 20.5808 2.44625C20.7186 2.74235 20.6724 3.09152 20.4621 3.34149L14.9447 9.90168L14.9401 18.7829C14.9399 19.0834 14.7792 19.361 14.5185 19.5108L10.3161 21.9252C10.0562 22.0745 9.7363 22.074 9.47683 21.9238C9.21735 21.7736 9.05761 21.4965 9.05767 21.1966L9.06001 9.90383L3.54043 3.34151C3.33018 3.09155 3.2839 2.74237 3.42177 2.44626ZM5.98742 3.64082L10.5429 9.05692C10.6703 9.20836 10.7401 9.39991 10.7401 9.59779L10.738 19.7453L13.2603 18.2961L13.2649 9.59478C13.265 9.39711 13.3348 9.20581 13.462 9.05454L18.0152 3.64082H5.98742Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* FIXME: filters 전체 보기 */}
        {filters && (
          <TotalFilter filters={filters} searchParams={searchParams} />
        )}
      </div>
    </>
  )
}
