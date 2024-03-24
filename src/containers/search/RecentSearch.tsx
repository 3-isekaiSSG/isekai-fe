'use client'

import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { useRecoilState } from 'recoil'
import { recentSearchState } from '@/states/searchAtom'
import styles from './search.module.css'

export default function RecentSearch() {
  const [recentSearch, setRecentSearch] = useRecoilState(recentSearchState)

  /** 단일 검색어 삭제 */
  const handleDelete = (id: number) => {
    const newSearch = recentSearch.filter((search) => {
      return search.id !== id
    })
    setRecentSearch(newSearch)
  }

  /** 최근 검색어 전체 삭제 */
  const handleClear = () => {
    setRecentSearch([])
  }

  return (
    <section className="mt-5">
      <div className="flex justify-between mr-4">
        <h3 className="text-sm text-[color:var(--m-colors-gray900)] font-bold">
          최근 검색어
        </h3>
        {recentSearch.length !== 0 && (
          <button
            onClick={handleClear}
            type="button"
            className="text-xs font-normal h-auto min-h-[auto] text-[color:var(--m-colors-gray600)] min-w-[2.5rem] m-0 p-0"
          >
            전체삭제
          </button>
        )}
      </div>

      <div className="flex-row flex items-centers justify-start my-2.5 pe-4 overflow-x-auto flex-nowrap">
        {recentSearch.length !== 0 ? (
          recentSearch.map((item) => (
            <div
              key={item.id}
              className={`w-fit text-[color:var(--m-colors-gray500)] ${styles.searchItem}`}
            >
              <span className="inline-flex items-center text-[color:var(--m-colors-gray800)] bg-[color:var(--m-colors-white)] shadow-[rgb(229,229,229)_0px_0px_0px_1px_inset] font-normal text-[13px] h-9 rounded-full ps-[12px] pe-[12px] whitespace-nowrap">
                <Link
                  href={`/search/${item.text}`}
                  className="flex items-center h-full py-3 text-inherit"
                  replace
                >
                  {item.text}
                </Link>
                <button
                  aria-label="삭제"
                  type="button"
                  className="w-5 h-5 leading-[1em] text-[color:var(--m-colors-gray600)] flex items-center justify-center"
                  onClick={() => handleDelete(item.id)}
                >
                  <CgClose />
                </button>
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-start my-2.5">
            <p className="text-[13px] text-[color:var(--m-colors-gray600)]">
              최근 검색어 내역이 없습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
