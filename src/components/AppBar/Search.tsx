'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { MdCancel } from 'react-icons/md'
// import { useRouter } from 'next/navigation'
import SearchSvg from './SearchSvg'

export default function Search({
  readOnly,
  placeholder = '',
  autoFocus,
  value,
  onInputChange,
}: {
  readOnly: boolean
  placeholder: string
  autoFocus: boolean
  value: string
  onInputChange: (value: string) => void
}) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => setIsFocused(true)

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false)
    }, 10)
  }

  /** 입력된 데이터 모두 삭제 */
  const clearInput = () => {
    if (inputRef.current) inputRef.current.blur()
    onInputChange('')
  }

  /** localStorage에 검색어 추가 */
  // const handleAddSearch = (_value: string) => {
  //   const newSearch = {
  //     id: Date.now(),
  //     text: _value,
  //   }
  //   localStorage.setItem('currentSearch', newSearch)
  // }

  // const router = useRouter()
  /** 입력된 value로 검색 */
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (readOnly) {
      return
    }
    if (!value) {
      // TODO: 토스터 메시지
      // alert('원하시는 상품을 검색해보세요.')
    }
    // handleAddSearch(value)
    // router.push(`/search/${value}`)
  }

  return (
    <form action="" onSubmit={handleSearch} className="flex-1">
      <Link
        href="/search"
        className="flex-1 bg-[color:var(--m-colors-gray150)] h-10 flex justify-end items-center relative rounded-[22px]  "
      >
        <label htmlFor="search-input" className="text-[0px]">
          검색
        </label>
        <input
          ref={inputRef}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          readOnly={readOnly}
          id="search-input"
          className="relative w-full bg-[color:var(--m-colors-transparent)] text-sm min-w-0 pl-4 pr-8 left-0"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          autoComplete="off"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isFocused && value ? (
          <button
            aria-label="취소"
            type="button"
            className="relative -left-2.5"
            onClick={clearInput}
          >
            <MdCancel size={20} fill="gray" />
          </button>
        ) : (
          <button
            aria-label="검색"
            type="submit"
            className="relative -left-2.5"
            onClick={(e) => handleSearch(e)}
          >
            <SearchSvg />
          </button>
        )}
      </Link>
    </form>
  )
}
