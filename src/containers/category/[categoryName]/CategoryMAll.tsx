'use client'

import { useEffect, useState } from 'react'
import CategoryLinkTab from '@/components/CategoryTab/CategoryLinkTab'
import { CategoryType } from '@/types/categoryType'
import { getCategoryM } from '@/utils/categoryApi'

export default function CategoryMAll({
  categoryName,
}: {
  categoryName: string[]
}) {
  const [mediumData, setMediumData] = useState<CategoryType[]>([])

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
    <div className="px-4">
      {/* 중분류 탭 */}
      <CategoryLinkTab data={mediumData} categoryName={categoryName} />

      <div>선택한 중분류의 소분류 탭</div>
      <div>배송 탭 + 필터</div>
      <div>두개 리스트 좌라락</div>
    </div>
  )
}
