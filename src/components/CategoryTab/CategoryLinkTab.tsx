'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CategoryType } from '@/types/categoryType'
import BottomSheetModal from '../BottomSheet/categoryTabBottom'
import { Modal } from '../BottomSheet/modal'
import styles from './categoryTab.module.css'

export default function CategoryLinkTab({
  data,
  categoryName,
}: {
  data: CategoryType[] | []
  categoryName: string[]
}) {
  const selectCategoryKR = decodeURIComponent(decodeURI(categoryName[1]))
  const [isLoading, setIsLoading] = useState(true)
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const router = useRouter()

  const handleClick = (item: CategoryType) => {
    router.push(
      `/category/${categoryName[0]}/${item.name.replaceAll('/', '%252F')}`,
    )
  }

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const selectedTab = document.querySelector('#selectedCategoryTab')
      if (selectedTab) {
        setIsLoading(false)
        observer.disconnect()
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const selectedButton = document.querySelector(
        `#selectedCategoryTab`,
      ) as HTMLElement

      if (selectedButton) {
        const scrollContainer = selectedButton.closest(
          '.overflow-x-auto',
        ) as HTMLElement

        const scrollX =
          selectedButton.offsetLeft -
          scrollContainer.offsetWidth / 2 +
          selectedButton.offsetWidth / 2
        scrollContainer.scrollTo({ left: scrollX })
      }
    }
  }, [isLoading, categoryName])

  return (
    <>
      <div className="flex items-center justify-start relative bg-[color:var(--m-colors-white)] pr-[54px]">
        <div
          className="h-14 overflow-hidden overflow-x-auto whitespace-nowrap border-[color:var(--m-colors-gray150)]"
          aria-label="중분류 카테고리 탭"
        >
          <div
            id="tablist"
            className="flex items-center flex-nowrap h-full py-2.5"
          >
            {data.slice(1).map((item) => (
              <button
                type="button"
                id={selectCategoryKR === item.name ? 'selectedCategoryTab' : ''}
                className={`min-w-[auto] h-9 leading-[normal] text-[13px] tracking-[-0.3px] text-center font-medium border mr-1.5 first:ml-4 px-2.5 py-0 border-solid ${selectCategoryKR === item.name ? 'text-[color:var(--m-colors-white)] border-[color:var(--m-colors-gray900)] bg-[color:var(--m-colors-gray900)]' : 'text-[color:var(--m-colors-gray900)] border-[color:var(--m-colors-gray150)] bg-[color:var(--m-colors-gray150)]'}`}
                key={item.id}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {data.length >= 5 && (
          <div className="absolute pr-2 right-0 inset-y-2.5 flex items-center justify-center">
            <button
              onClick={() => setIsToggle(true)}
              className={`flex items-center justify-center relative leading-[1.2] font-normal text-[color:var(--m-colors-gray300)] border border-solid border-current ${styles['more-btn']}`}
              type="button"
              aria-label="바텀 시트 열기"
            >
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                name="ChevronDownSmallIcon"
                aria-hidden="true"
                className="text-[color:var(--m-colors-black)] w-7 h-7 inline-block leading-[1em] align-middle"
              >
                <path
                  d="M7.33197 10.308L8.18397 9.45599L12 13.272L15.816 9.45599L16.668 10.308L12 14.964L7.33197 10.308Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {isToggle && (
        <Modal setIsOpen={setIsToggle}>
          <BottomSheetModal
            title="전체 카테고리"
            data={data.slice(1)}
            setIsToggle={setIsToggle}
            handleClick={handleClick}
            selectCategory={selectCategoryKR}
          />
        </Modal>
      )}
    </>
  )
}
