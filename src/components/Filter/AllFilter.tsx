/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { RightSlider } from './RightSlider'
import {
  BrandType,
  DeliveryType,
  getBrandList,
  getDeliveryTypes,
} from './action'
import { FilterListType, filterListData } from './state'

export function SelectAllFilter({
  searchParams,
  priceFilter,
  categoryName,
}: {
  searchParams: { [key: string]: string }
  priceFilter: string
  categoryName: string[]
}) {
  const largeName = decodeURI(decodeURIComponent(categoryName[0]))
  const mediumName = decodeURI(decodeURIComponent(categoryName[1]))
  const data: FilterListType[] = filterListData
  const router = useRouter()
  const pathName = usePathname()
  const [select, setSelect] = useState<string>('')
  // 추가 필터
  const [brandList, setBrandList] = useState<BrandType[]>([])
  const [deliveryList, setDeliveryList] = useState<DeliveryType[]>([])

  /** 필터 초기화 */
  const resetFilter = () => {
    const newParams = {
      smallName: searchParams.smallName || '',
      sort: searchParams.sort || '',
    }
    const queryString = new URLSearchParams(newParams).toString()

    router.replace(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  const getSelect = (item: FilterListType) => {
    setSelect(select === item.name ? '' : item.name)
  }

  useEffect(() => {
    const fetchData = async () => {
      const brand = await getBrandList(
        largeName,
        mediumName,
        searchParams.smallName,
      )
      setBrandList(brand)

      const delivery = await getDeliveryTypes()
      setDeliveryList(delivery)
    }
    fetchData()
  }, [largeName, mediumName, searchParams.smallName])

  return (
    <>
      <header className="flex-[0_1_0%] text-[600] bg-[color:var(--m-colors-gray100)] border-[color:var(--m-colors-gray150)] px-6 py-4 border-b">
        <div className="flex">
          <p className="flex-1 text-lg font-semibold">필터</p>
          <button
            type="button"
            onClick={resetFilter}
            className="flex items-center justify-center text-[13px] text-[color:var(--m-colors-gray900)]"
          >
            초기화
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              name="RefreshIcon"
              className="w-4 h-4 inline-block leading-[1em] text-[color:var(--m-colors-current)] align-middle ml-1"
            >
              <g clipPath="url(#clip0_2788_71567)">
                <path
                  d="M20.388 12.012C20.388 16.692 16.692 20.364 11.988 20.364C7.27198 20.364 3.58798 16.692 3.58798 12.012C3.58798 7.33196 7.27198 3.65996 11.988 3.65996C14.352 3.65996 16.452 4.53596 18 6.15596H15.06V7.35596H20.004V2.53196H18.804V5.26796C17.028 3.45596 14.652 2.45996 11.976 2.45996C6.58798 2.45996 2.37598 6.65996 2.37598 12.012C2.37598 17.364 6.58798 21.564 11.976 21.564C17.364 21.564 21.576 17.364 21.576 12.012H20.388Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2788_71567">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-auto relative px-0 pb-2">
        <div className="flex flex-col">
          {data.map((item) => (
            <div key={item.id} className="mt-5 mb-0 px-6 py-0">
              <button
                type="button"
                id={item.name}
                onClick={() => {
                  getSelect(item)
                }}
                className="flex w-full h-[50px] items-center flex-row border-b-[color:var(--m-colors-gray900)] border-b border-solid"
              >
                <p className="font-bold text-[15px]">{item.name}</p>
                <div className="flex-1">
                  {item.key === 'minPrc' ? (
                    <p className="text-[color:var(--m-colors-primary)] overflow-hidden text-xs text-right mr-5">
                      {priceFilter}
                    </p>
                  ) : (
                    <p className="text-[color:var(--m-colors-primary)] overflow-hidden text-xs text-right mr-5">
                      {searchParams[item.key]}
                    </p>
                  )}
                </div>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className={`w-5 h-5 inline-block leading-[1em] text-current align-middle ${select === item.name && 'rotate-180'}`}
                >
                  <path
                    fill="currentColor"
                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                  />
                </svg>
              </button>
              {/* {select === item.name && <div>{item.listData}</div>} */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function AllFilter({
  searchParams,
  priceFilter,
  categoryName,
}: {
  searchParams: { [key: string]: string }
  priceFilter: string
  categoryName: string[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="전체 필터 보기"
      >
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

      {isOpen && (
        <RightSlider setIsOpen={setIsOpen}>
          <SelectAllFilter
            searchParams={searchParams}
            priceFilter={priceFilter}
            categoryName={categoryName}
          />
        </RightSlider>
      )}
    </>
  )
}
