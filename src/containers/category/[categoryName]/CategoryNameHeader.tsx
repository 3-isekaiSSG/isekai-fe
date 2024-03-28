'use client'

import Link from 'next/link'
import { useState } from 'react'
import HeaderBackBtn from '@/components/Buttons/HeaderBackBtn'
import LikeBtn from '@/components/Buttons/LikeBtn'
import ShareBtn from '@/components/Buttons/ShareBtn'
import CategoryDrop from './CategoryDrop'

export default function CategoryNameHeader({ nowData }: { nowData: string[] }) {
  const categoryL = nowData[0]
  const categoryM = nowData[1] ? nowData[1] : '전체보기'
  // FIXME: 맞는 값으로 수정
  const likeDivision: number = nowData.length === 1 ? 1 : 2

  const [isToggle, setIsToggle] = useState(false)
  const [selectCategoryL, setSelectCategoryL] = useState<string>(categoryL)

  const handleToggle = () => {
    setSelectCategoryL(categoryL)
    setIsToggle(!isToggle)
  }

  return (
    <div className="sticky top-0 z-[1400] w-full h-[45px] bg-[color:var(--m-colors-white)]">
      <div className="flex items-center h-full pl-4 pr-3 ">
        <HeaderBackBtn />

        <div className="flex items-center flex-1 pl-5 pr-3">
          <Link
            href={`/category/${encodeURIComponent(categoryL)}`}
            className="text-[color:var(--m-colors-gray700)] text-[15px]"
          >
            <p>{categoryL}</p>
          </Link>

          <div>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              name="ChevronRightSmallIcon"
              className="w-5 h-5 inline-block text-[color:var(--m-colors-current)] align-middle"
            >
              <path
                d="M10.4521 16.536L9.6001 15.684L13.4161 11.868L9.6001 8.05201L10.4521 7.20001L15.1081 11.868L10.4521 16.536Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className="h-8 inline-flex items-center bg-[color:var(--m-colors-transparent)]"
            aria-label="전체 카테고리 보기"
          >
            <p className="font-bold text-[15px]">
              {categoryM}
              <span className="text-[0px]">열기</span>
            </p>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className={`${isToggle ? 'rotate-180' : ''} w-4 h-4 leading-[1em] text-[color:var(--m-colors-current)] align-middle`}
              name="CaretDownSmallIcon"
            >
              <path
                d="M12 16.7714L6 8.20001H18L12 16.7714Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div className="flex">
          {/* FIXME: 카테고리 좋아요 */}
          <LikeBtn likeDivision={likeDivision} itemId={0} isLiked />
          <ShareBtn />
        </div>
      </div>

      {isToggle && (
        <CategoryDrop
          selectCategoryL={selectCategoryL}
          setSelectCategoryL={setSelectCategoryL}
          nowCategoryL={categoryL}
          nowCategoryM={categoryM}
        />
      )}
    </div>
  )
}
