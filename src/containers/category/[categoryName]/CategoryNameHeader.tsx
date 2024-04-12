'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import HeaderBackBtn from '@/components/Buttons/HeaderBackBtn'
import LikeBtn from '@/components/Buttons/LikeBtn'
import ShareModal from '@/components/products/ShareModal'
import { ShareState } from '@/components/products/state'
import { CategoryType } from '@/types/categoryType'
import CategoryDrop from './CategoryDrop'

export default function CategoryNameHeader({
  categoryName,
  largeCategoryList,
}: {
  categoryName: string[]
  largeCategoryList: CategoryType[]
}) {
  // FIXME: 맞는 값으로 수정
  const [isToggle, setIsToggle] = useState(false)
  const [selectCategoryL, setSelectCategoryL] = useState<string>(
    categoryName[0],
  )
  const [modal, setModal] = useRecoilState(ShareState)

  /** 카테고리 열고 닫기 */
  const handleToggle = () => {
    setSelectCategoryL(categoryName[0])
    setIsToggle(!isToggle)
  }

  const showModal = () => {
    setModal({ isOpen: true })
  }

  const closeModal = () => {
    setModal({ isOpen: false })
  }

  return (
    <div className="sticky top-0 z-[1400] w-full h-[45px] bg-[color:var(--m-colors-white)]">
      <div className="flex items-center h-full pl-4 pr-3 ">
        <HeaderBackBtn />

        <div className="flex items-center flex-1 pl-5 pr-3">
          <Link href={`/category/${categoryName[0].replaceAll('/', '%252F')}`}>
            <p className="text-[color:var(--m-colors-gray700)] text-[15px]">
              {categoryName[0]}
            </p>
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
              {categoryName[1]}
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
          <LikeBtn likeDivision="CATEFORYM" itemId={0} isLiked />
          <button
            type="button"
            className="relative w-6 h-6"
            onClick={showModal}
          >
            <Image
              src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg"
              alt="공유"
              fill
            />
          </button>
        </div>
      </div>

      {isToggle && (
        <CategoryDrop
          largeCategoryList={largeCategoryList}
          selectCategoryL={selectCategoryL}
          setSelectCategoryL={setSelectCategoryL}
          nowCategory={[categoryName[0], categoryName[1]]}
        />
      )}
      <ShareModal isOpen={modal.isOpen} close={closeModal} />
    </div>
  )
}
