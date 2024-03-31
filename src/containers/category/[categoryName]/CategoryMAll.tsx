'use client'

import { useEffect, useState } from 'react'
import CategoryLinkTab from '@/components/CategoryTab/CategoryLinkTab'
import { CategoryType } from '@/types/categoryType'
import { getCategoryM } from '@/utils/categoryApi'
import CategoryFilter from './CategoryFilter'
import CategorySmall from './CategorySmall'

export default function CategoryMAll({
  categoryName,
}: {
  categoryName: string[]
}) {
  const [mediumData, setMediumData] = useState<CategoryType[]>([])
  // TODO: 값 받아오기
  const dataCount = 153680

  useEffect(() => {
    async function fetchData() {
      const res = await getCategoryM(
        decodeURIComponent(decodeURIComponent(categoryName[0])),
      )
      if (res) {
        setMediumData(res.categoryMList)
      }
    }

    fetchData()
  }, [categoryName])

  return (
    <>
      <CategoryLinkTab data={mediumData} categoryName={categoryName} />
      <CategorySmall mediumName={categoryName[1]} />
      <CategoryFilter />

      <div className="text-[13px] text-[color:var(--m-colors-gray600)] px-4 py-0">
        <span className="font-bold text-[color:var(--m-colors-black)]">
          {dataCount.toLocaleString('ko-KR')}개
        </span>
        의 상품이 있습니다
      </div>

      <div>두개 리스트 좌라락</div>
    </>
  )
}
