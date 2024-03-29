'use client'

import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import Search from '@/components/AppBar/Search'
import CartBtn from '@/components/AppBar/goToCart'
import { searchModalState } from '@/states/searchAtom'

export default function SearchInputBar() {
  const closeModal = useSetRecoilState(searchModalState)
  const router = useRouter()

  const handleCloseClick = () => {
    closeModal(false)
    router.back()
  }

  return (
    <header className="sticky w-full h-14 bg-[color:var(--m-colors-white)] flex items-center z-[1100] py-[8px] pr-[10px] pl-[10px] top-0 min-w-0">
      <button
        className={`text-[color:var(--m-colors-black)] flex items-center justify-center text-sm max-w-[2.5rem] h-11 w-11 font-normal `}
        aria-label="이전"
        type="button"
        onClick={handleCloseClick}
      >
        <svg
          className="w-6 h-6 inline-block leading-[1em] text-[color:var(--m-colors-current)] align-middle"
          viewBox="0 0 24 24"
          focusable="false"
          name="ChevronLeftMediumIcon"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.04862 12L15.4244 4.62425L14.5758 3.77573L6.35156 12L14.5758 20.2243L15.4244 19.3757L8.04862 12Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Search
        readOnly={false}
        placeholder="원하시는 상품을 검색해보세요."
        autoFocus
        value=""
      />
      <CartBtn />
    </header>
  )
}
