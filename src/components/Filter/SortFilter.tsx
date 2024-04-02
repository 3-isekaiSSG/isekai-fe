'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { updateQueryString } from '@/utils/updateQueryString'
import { SortType } from './action'

export function SortBtn({
  sortList,
  sortId,
  handleClick,
}: {
  sortList: SortType[]
  sortId: number
  handleClick: (item: SortType) => void
}) {
  return (
    <div className="absolute min-w-max z-[1000] m-0 right-0">
      <div className="outline-offset-2 text-inherit rounded border shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-[color:var(--m-colors-white)] border-[color:var(--m-colors-gray150)] box-border p-0">
        {sortList.map((item) => (
          <button
            onClick={() => handleClick(item)}
            type="button"
            key={item.id}
            className={`no-underline w-full flex items-center text-start outline-offset-2 text-[13px] transition-[background] duration-[50ms] ease-[ease-in] delay-[0s] pl-[0.8rem] pt-[11px] pb-[9px] px-[15px] ${sortId === item.id && 'bg-[color:var(--m-colors-gray900)] text-[color:var(--m-colors-white)]'}`}
          >
            {item.option}
            {item.isInfo && (
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

export default function SortFilter({
  searchParams,
  sortList,
}: {
  searchParams: { [key: string]: string }
  sortList: SortType[]
}) {
  const [isToggle, setIsToggle] = useState(false)
  const [sortId, setSortId] = useState<number>(0)

  const router = useRouter()
  const pathName = usePathname()

  /** sort 쿼리 업데이트 */
  const handleSort = (item: SortType) => {
    setIsToggle(false)

    if (item.id === sortId) return

    setSortId(item.id)
    const queryString = updateQueryString(searchParams, 'sort', item.value)
    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  return (
    <div className="mx-2.5 relative">
      <button
        type="button"
        className="text-[color:var(--m-colors-gray800)] font-medium text-[13px] flex items-center justify-center m-0 p-0"
        onClick={() => setIsToggle(!isToggle)}
      >
        <span>{sortList[sortId]?.option || '추천순'}</span>
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
        <SortBtn sortList={sortList} sortId={sortId} handleClick={handleSort} />
      </div>
    </div>
  )
}
