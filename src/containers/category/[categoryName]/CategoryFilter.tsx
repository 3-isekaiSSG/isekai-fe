'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DeliveryTab from '@/components/DeliveryTab'
import { useUpdateQueryString } from '@/hooks/useUpdateQueryString'

interface SortType {
  id: number
  name: string
  info: boolean
}

interface FilterType {
  id: number
  key: string
  value: string
}

export function SortBtn({
  sort,
  handleClick,
}: {
  sort: string
  handleClick: (item: SortType) => void
}) {
  const sortList: SortType[] = [
    {
      id: 0,
      name: '추천순',
      info: true,
    },
    {
      id: 1,
      name: '낮은가격순',
      info: false,
    },
    {
      id: 2,
      name: '높은가격순',
      info: false,
    },
  ]

  return (
    <div className="absolute min-w-max z-[1000] m-0 -left-2">
      <div className="outline-offset-2 text-inherit rounded border shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-[color:var(--m-colors-white)] border-[color:var(--m-colors-gray150)] box-border p-0">
        {sortList.map((item) => (
          <button
            onClick={() => handleClick(item)}
            type="button"
            key={item.id}
            className={`no-underline w-full flex items-center text-start outline-offset-2 text-[13px] transition-[background] duration-[50ms] ease-[ease-in] delay-[0s] pl-[0.8rem] pt-[11px] pb-[9px] px-[15px] ${sort === item.name && 'bg-[color:var(--m-colors-gray900)] text-[color:var(--m-colors-white)]'}`}
          >
            {item.name}
            {item.info && (
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="w-5 h-5 leading-[1em] text-[color:var(--m-colors-gray400)] ml-2"
                name="CircleInformationIcon"
              >
                <path
                  d="M11.9999 21.6C6.7079 21.6 2.3999 17.292 2.3999 12C2.3999 6.70802 6.7079 2.40002 11.9999 2.40002C17.2919 2.40002 21.5999 6.70802 21.5999 12C21.5999 17.292 17.2919 21.6 11.9999 21.6ZM11.9999 3.60002C7.3679 3.60002 3.5999 7.36802 3.5999 12C3.5999 16.632 7.3679 20.4 11.9999 20.4C16.6319 20.4 20.3999 16.632 20.3999 12C20.3999 7.36802 16.6319 3.60002 11.9999 3.60002Z"
                  fill="currentColor"
                />
                <path
                  d="M11.9999 8.84396C12.6295 8.84396 13.1399 8.33357 13.1399 7.70396C13.1399 7.07436 12.6295 6.56396 11.9999 6.56396C11.3703 6.56396 10.8599 7.07436 10.8599 7.70396C10.8599 8.33357 11.3703 8.84396 11.9999 8.84396Z"
                  fill="currentColor"
                />
                <path
                  d="M12.5999 10.356H11.3999V17.196H12.5999V10.356Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function CategoryFilter() {
  const [isToggle, setIsToggle] = useState(false)
  const [sort, setSort] = useState<string>('추천순')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState<FilterType[]>([])

  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const updateQueryString = useUpdateQueryString()

  const handleSort = (item: SortType) => {
    setSort(item.name)
    setIsToggle(false)

    // TODO: 알맞은 query로 변동 및 데이터 패칭
    const queryString = updateQueryString('sort', item.name)
    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deleteFilter = (item: FilterType) => {
    const queryString = updateQueryString(item.key)
    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  useEffect(() => {
    const queryArray = Array.from(searchParams.entries())
    const filters = queryArray
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, _]) => key !== 'sort')
      .map(([key, value], index) => ({
        id: index,
        key,
        value,
      }))

    setFilter(filters)
  }, [searchParams])

  return (
    <>
      <div className="text-[color:var(--m-colors-white)] relative mt-2">
        <div className="bg-[color:var(--m-colors-warning\_loss)] text-xs flex items-center px-4 py-2">
          <p className="flex-1 text-center">
            브랜드, 혜택 등 원하시는 조건을 설정해보세요!
          </p>
          {/* TODO: 로컬 스토리지에 다시 보지 않기 True */}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button">
            <svg
              className="w-5 h-5 leading-[1em] align-middle"
              viewBox="0 0 24 24"
              focusable="false"
              name="CloseSmallEmartIcon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5684 7.61402C17.8965 7.28601 17.8965 6.75415 17.5685 6.42608C17.2405 6.09801 16.7087 6.09796 16.3806 6.42597L12.1199 10.6859L7.85921 6.42597C7.53114 6.09796 6.99928 6.09801 6.67127 6.42608C6.34326 6.75415 6.34331 7.28601 6.67138 7.61402L10.9318 11.8737L6.67138 16.1334C6.34331 16.4614 6.34326 16.9932 6.67127 17.3213C6.99928 17.6494 7.53114 17.6494 7.85921 17.3214L12.1199 13.0615L16.3806 17.3214C16.7087 17.6494 17.2405 17.6494 17.5685 17.3213C17.8965 16.9932 17.8965 16.4614 17.5684 16.1334L13.3079 11.8737L17.5684 7.61402Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="bg-[color:var(--m-colors-warning\_loss)] absolute w-3 h-3 rotate-45 bottom-[-0.25rem] mx-4 my-0 right-1" />
      </div>

      <div className="bg-[color:var(--m-colors-white)]">
        <div className="flex items-center justify-between pr-4 py-2.5">
          <div className="flex flex-row items-center justify-start overflow-x-auto flex-1 pl-4">
            <DeliveryTab />
          </div>

          <div className="mx-2.5 relative">
            <button
              type="button"
              className="text-[color:var(--m-colors-gray800)] font-medium text-[13px] flex items-center justify-center m-0 p-0"
              onClick={() => setIsToggle(!isToggle)}
            >
              <span>{sort}</span>
              <span className="self-center ml-1">
                <svg
                  className={`w-3 h-3 text-[color:var(--m-colors-current)] align-middle ${isToggle ? '' : 'rotate-180'}`}
                  viewBox="0 0 24 24"
                  focusable="false"
                  name="CaretUpMediumIcon"
                  aria-hidden="true"
                >
                  <path
                    d="M12.0001 4.79999L20.4001 16.8H3.6001L12.0001 4.79999Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
            <div className={isToggle ? 'visible' : 'hidden'}>
              <SortBtn sort={sort} handleClick={handleSort} />
            </div>
          </div>

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

        {/* FIXME: delivery도 관리해야함 */}
        {/* {filter && (
          <div className="text-[13px] bg-[color:var(--m-colors-gray100)] text-[color:var(--m-colors-gray500)] mb-2.5 px-4 py-[15px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center flex-nowrap overflow-x-auto">
                {filter.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-[0_0_auto] items-center w-fit"
                  >
                    <p className="text-sm font-normal">{item.value}</p>
                    <button
                      className="mr-5"
                      type="button"
                      onClick={() => deleteFilter(item)}
                      aria-label="검색어 삭제"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.d}>전체삭제</div>
            </div>
          </div>
        )} */}
      </div>
    </>
  )
}
