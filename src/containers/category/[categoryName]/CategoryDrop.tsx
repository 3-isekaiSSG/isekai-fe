import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CategoryType } from '@/types/categoryType'
import { getCategoryL, getCategoryM } from '@/utils/categoryApi'

export default function CategoryDrop({
  selectCategoryL,
  setSelectCategoryL,
  nowCategoryM,
  nowCategoryL,
}: {
  selectCategoryL: string
  setSelectCategoryL: Dispatch<SetStateAction<string>>
  nowCategoryM: string
  nowCategoryL: string
}) {
  const [largeCategory, setLargeCategory] = useState<CategoryType[]>([])
  const [selectCategoryM, setSelectCategoryM] = useState<CategoryType[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getCategoryL()
      setLargeCategory(data.slice(1))
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchMData() {
      const data = await getCategoryM(selectCategoryL)
      if (data) {
        setSelectCategoryM(data.categoryMList)
      }
    }
    fetchMData()
  }, [selectCategoryL])

  return (
    <>
      <div className="relative">
        <div className="absolute w-full z-[1400] bg-[color:var(--m-colors-white)] overflow-y-scroll max-h-[calc(100vh_-_45px)] left-0 top-0">
          <div className="grid grid-cols-[repeat(2,1fr)]">
            <div>
              {largeCategory.map((item) => (
                <button
                  onClick={() => setSelectCategoryL(item.name)}
                  className={`w-full h-[42px] text-left leading-[42px] overflow-hidden text-[13px] border-b-[color:var(--m-colors-gray200)] pl-4 border-b border-solid ${selectCategoryL === item.name ? 'font-bold bg-[color:var(--m-colors-gray150)]' : 'bg-[color:var(--m-colors-white)]'}`}
                  type="button"
                  key={item.id}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="bg-[color:var(--m-colors-gray150)]">
              {selectCategoryM.map((item: CategoryType) => (
                <Link
                  className={`h-[42px] leading-[42px] overflow-hidden text-[13px] block w-full pl-4 ${nowCategoryM === item.name ? 'font-bold' : ''} ${selectCategoryL === nowCategoryL && nowCategoryM === '전체보기' && item.name === '상품 전체보기' ? 'font-bold' : ''}`}
                  key={item.id}
                  href={
                    item.id !== 0
                      ? `/category/${encodeURIComponent(selectCategoryL)}/${encodeURIComponent(item.name)}`
                      : `/category/${encodeURIComponent(selectCategoryL)}`
                  }
                >
                  {item.id !== 0 ? (
                    <span>{item.name}</span>
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
  )
}
