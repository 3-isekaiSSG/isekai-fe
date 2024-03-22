'use client'

import Link from 'next/link'
// import { useEffect } from 'react'
import { CgClose } from 'react-icons/cg'
import styles from './search.module.css'

export default function RecentSearch() {
  // TODO: 로컬 스토리지에 최근 검색어 저장
  // useEffect(() => {

  // })
  // localStorage.getItem('currentSearch')

  const searchList = [
    'dddddddddddddddddd',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'ㅇ',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
    'dtd',
  ]

  /** 최근 검색어 삭제 */
  const handleDelete = () => {}

  return (
    <section className="mt-5">
      <div className="flex justify-between mr-4">
        <h3 className="text-sm text-[color:var(--m-colors-gray900)] font-bold">
          최근 검색어
        </h3>
        <button
          type="button"
          className="text-xs font-normal h-auto min-h-[auto] text-[color:var(--m-colors-gray600)] min-w-[2.5rem] m-0 p-0"
        >
          전체삭제
        </button>
      </div>

      <div className="flex-row flex items-center justify-start my-2.5 ps-[4px] pe-[4px] overflow-x-auto flex-nowrap">
        {searchList.map((item, idx) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            className={`w-fit text-[color:var(--m-colors-gray500)] ${styles.searchItem}`}
          >
            <span className="inline-flex items-center text-[color:var(--m-colors-gray800)] bg-[color:var(--m-colors-white)] shadow-[rgb(229,229,229)_0px_0px_0px_1px_inset] font-normal text-[13px] h-9 rounded-full ps-[12px] pe-[12px]">
              <Link
                href={`/search/${item}`}
                className="flex items-center h-full py-3 text-inherit"
              >
                {item}
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
        ))}
      </div>
    </section>
  )
}
