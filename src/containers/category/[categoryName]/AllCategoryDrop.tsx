'use client'

import { useEffect, useState } from 'react'
import { getCategoryL, getCategoryM } from '@/utils/categoryApi'
import {
  CategoryLType,
  CategoryMListType,
  CategoryMType,
} from '@/types/categoryType'
import Link from 'next/link'
import LikeBtn from '@/components/LikeBtn'
import ShareBtn from '@/components/ShareBtn'
import { useRouter } from 'next/navigation'

export default function AllCategoryDrop({ nowData }: { nowData: string[] }) {
  const router = useRouter()

  const categoryL = nowData[0]
  const categoryM = nowData[1] ? nowData[1] : '전체보기'

  const [selectCategoryL, setSelectCategoryL] = useState<string>(categoryL)
  const [selectCategoryM, setSelectCategoryM] = useState<
    CategoryMListType | undefined
  >(undefined)

  const [Ldata, setLData] = useState<CategoryLType[]>([])

  useEffect(() => {
    async function fetchData() {
      const largeData = await getCategoryL()
      setLData(largeData)
    }
    fetchData()
  }, [])

  const [isToggle, setIsToggle] = useState(false)
  const handleToggle = () => {
    setSelectCategoryL(categoryL)
    setIsToggle(!isToggle)
  }

  useEffect(() => {
    async function fetchMData() {
      const mediumData = await getCategoryM(selectCategoryL)
      setSelectCategoryM(mediumData)
    }
    fetchMData()
  }, [selectCategoryL])

  return (
    <div className="sticky top-0 z-[1400] w-full h-[45px] bg-[color:var(--m-colors-white)]">
      <div className="flex items-center h-full pl-4 pr-3 ">
        <button
          className="flex items-center justify-center w-8 h-full"
          type="button"
          onClick={() => router.back()}
        >
          <span className="text-[0px]">이전 페이지</span>
          <svg
            className="w-6 h-6 leading-[1em] text-[color:var(--m-colors-current)]"
            viewBox="0 0 24 24"
            focusable="false"
            name="ArrowLeftIcon"
          >
            <path
              d="M21.5999 11.4H4.43991L11.2799 4.67997L10.3199 3.71997L2.15991 12L10.3199 20.28L11.2799 19.32L4.43991 12.6H21.5999V11.4Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="flex items-center flex-1 pl-5 pr-3">
          <Link
            href={`/category/${categoryL}`}
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
          {/* FIXME: 카테고리 ID 받아와야 함 */}
          {/* 전체보기면 대좋아요 / 중카테고리면, 중좋아요 */}
          <LikeBtn likeDivision={2} itemId={0} isLiked />
          <ShareBtn />
        </div>
      </div>

      {isToggle && (
        <>
          <div className="relative">
            <div className="absolute w-full z-[1400] bg-[color:var(--m-colors-white)] overflow-y-scroll max-h-[calc(100vh_-_45px)] left-0 top-0">
              <div className="grid grid-cols-[repeat(2,1fr)]">
                <div>
                  {Ldata.map((category) => (
                    <button
                      onClick={() => setSelectCategoryL(category.largeName)}
                      className={`w-full h-[42px] text-left leading-[42px] overflow-hidden text-[13px] border-b-[color:var(--m-colors-gray200)] pl-4 border-b border-solid ${selectCategoryL === category.largeName ? 'font-bold bg-[color:var(--m-colors-gray150)]' : 'bg-[color:var(--m-colors-white)]'}`}
                      type="button"
                      key={category.id}
                    >
                      {category.largeName}
                    </button>
                  ))}
                </div>
                <div className="bg-[color:var(--m-colors-gray150)]">
                  {selectCategoryM &&
                    selectCategoryM.categoryMList.map((item: CategoryMType) => (
                      <Link
                        className={`h-[42px] leading-[42px] overflow-hidden text-[13px] block w-full pl-4 ${categoryM === item.mediumName ? 'font-bold' : ''} ${selectCategoryL === categoryL && categoryM === '전체보기' && item.mediumName === '상품 전체보기' ? 'font-bold' : ''}`}
                        key={item.id}
                        href={
                          item.id !== 0
                            ? `/category/${encodeURIComponent(selectCategoryL)}/${encodeURIComponent(item.mediumName)}`
                            : `/category/${encodeURIComponent(selectCategoryL)}`
                        }
                      >
                        {item.id !== 0 ? (
                          <span>{item.mediumName}</span>
                        ) : (
                          <span className="flex items-center">
                            전체보기
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
                          </span>
                        )}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-screen bg-[color:var(--m-colors-black\_alpha60)] z-[1300] left-0 top-12" />
        </>
      )}
    </div>
  )
}
