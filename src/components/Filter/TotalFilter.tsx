'use client'

import { usePathname, useRouter } from 'next/navigation'
import { updateQueryString } from '@/utils/updateQueryString'

export default function TotalFilter({
  filters,
  searchParams,
}: {
  filters: { [key: string]: string }
  searchParams: { [key: string]: string }
}) {
  const router = useRouter()
  const pathName = usePathname()

  const deleteFilter = (key: string) => {
    const queryString = updateQueryString(searchParams, key)
    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  const resetFilter = () => {
    const newParams = {
      smallName: searchParams.smallName,
      sort: searchParams.sort,
    }
    const queryString = new URLSearchParams(newParams).toString()

    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  return (
    <div className="text-[13px] bg-[color:var(--m-colors-gray100)] text-[color:var(--m-colors-gray500)] mb-2.5 px-4 py-[15px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center flex-nowrap overflow-x-auto">
          {Object.keys(filters).map((key) => (
            <div key={key} className="flex flex-[0_0_auto] items-center w-fit">
              <p className="text-sm font-normal pr-2">{filters[key]}</p>
              <button
                className="mr-5"
                type="button"
                onClick={() => deleteFilter(key)}
                aria-label="검색어 삭제"
              >
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="px-2">|</div>
        <button type="button" onClick={() => resetFilter()}>
          전체삭제
        </button>
      </div>
    </div>
  )
}
