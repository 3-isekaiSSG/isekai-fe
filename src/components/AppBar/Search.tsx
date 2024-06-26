'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { recentSearchState, searchValueState } from '@/states/searchAtom'
import Toast from '../Toast'
import SearchSvg from './SearchSvg'

export default function Search({
  readOnly,
  placeholder = '',
  autoFocus,
  value,
}: {
  readOnly: boolean
  placeholder: string
  autoFocus: boolean
  value: string
}) {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState)
  const [recentSearch, setRecentSearch] = useRecoilState(recentSearchState)

  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const [toast, setToast] = useState<boolean>(false)

  /** 검색 페이지 열기 */
  const handleClick = () => {
    setSearchValue(value)

    router.push('/search', { scroll: false })
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false)
    }, 10)
  }

  /** 입력된 데이터 모두 삭제 */
  const clearInput = () => {
    if (inputRef.current) inputRef.current.blur()
    setSearchValue('')
  }

  /** 검색어 추가 */
  const handleAddSearch = (_value: string) => {
    const newSearch = {
      id: Date.now(),
      text: _value,
    }

    // 기존 동일 검색어 삭제
    const prevSearch = recentSearch.filter((search) => {
      return search.text !== newSearch.text
    })
    setRecentSearch([newSearch, ...prevSearch])
  }

  /** 입력된 value로 검색 */
  const submitSearch = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault()
    if (readOnly) {
      return
    }
    if (!searchValue) {
      setToast(true)
      return
    }
    handleAddSearch(searchValue)
    setSearchValue('')

    router.replace(`/search?search=${searchValue}`)
  }

  if (readOnly)
    return (
      <button
        type="button"
        onClick={handleClick}
        className="flex-1 bg-[color:var(--m-colors-gray150)] h-10 flex justify-end items-center relative rounded-[22px]"
      >
        <label htmlFor="search-input" className="text-[0px]">
          검색
        </label>
        <input
          ref={inputRef}
          readOnly={readOnly}
          id="search-input"
          className="relative w-full bg-[color:var(--m-colors-transparent)] text-sm min-w-0 pl-4 pr-8 left-0"
          placeholder={placeholder}
          type="text"
          value={value}
          autoComplete="off"
        />

        <div className="relative -left-2.5">
          <SearchSvg />
        </div>
      </button>
    )

  return (
    <>
      <form
        id="search-form"
        action=""
        onSubmit={submitSearch}
        className="flex-1"
      >
        <div className="w-full bg-[color:var(--m-colors-gray150)] h-10 flex justify-end items-center relative rounded-[22px]">
          <label htmlFor="search-input" className="text-[0px]">
            검색
          </label>
          <input
            ref={inputRef}
            readOnly={readOnly}
            id="search-input"
            className="relative w-full bg-[color:var(--m-colors-transparent)] text-sm min-w-0 pl-4 pr-8 left-0"
            placeholder={placeholder}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
          />
          {isFocused && searchValue ? (
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
              onClick={submitSearch}
            >
              <SearchSvg />
            </button>
          )}
        </div>
      </form>

      {toast && (
        <Toast
          setToast={setToast}
          message="원하시는 상품을 검색해보세요."
          position="bottom"
        />
      )}
    </>
  )
}
