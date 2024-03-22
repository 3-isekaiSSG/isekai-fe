'use client'

import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import styles from './search.module.css'

interface CurrentSearchType {
  id: number
  text: string
}

export default function RecentSearch() {
  // TODO: 로컬 스토리지에 최근 검색어 저장
  const [currentSearchList, setCurrentSearchList] = useState<
    CurrentSearchType[]
  >([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('currentSearch') || '[]'
      setCurrentSearchList(JSON.parse(result))
    }
  }, [])

  /** 최근 검색어 삭제 */
  const handleDelete = () => {}

  /** 최근 검색어 전체 삭제 */
  const handleClear = () => {}

  return (
    <section className="mt-5">
      <div className="flex justify-between mr-4">
        <h3 className="text-sm text-[color:var(--m-colors-gray900)] font-bold">
          최근 검색어
        </h3>
        {currentSearchList.length !== 0 && (
          <button
            onClick={handleClear}
            type="button"
            className="text-xs font-normal h-auto min-h-[auto] text-[color:var(--m-colors-gray600)] min-w-[2.5rem] m-0 p-0"
          >
            전체삭제
          </button>
        )}
      </div>

      <div className="flex-row flex items-center justify-start my-2.5  pe-4 overflow-x-auto flex-nowrap">
        {currentSearchList.length !== 0 ? (
          currentSearchList.map((item) => (
            <div
              key={item.id}
              className={`w-fit text-[color:var(--m-colors-gray500)] ${styles.searchItem}`}
            >
              <span className="inline-flex items-center text-[color:var(--m-colors-gray800)] bg-[color:var(--m-colors-white)] shadow-[rgb(229,229,229)_0px_0px_0px_1px_inset] font-normal text-[13px] h-9 rounded-full ps-[12px] pe-[12px]">
                <Link
                  href={`/search/${item}`}
                  className="flex items-center h-full py-3 text-inherit"
                >
                  {item.text}
                </Link>
                <button
                  aria-label="삭제"
                  type="button"
                  className="w-5 h-5 leading-[1em] text-[color:var(--m-colors-gray600)] flex items-center justify-center"
                  onClick={handleDelete}
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
