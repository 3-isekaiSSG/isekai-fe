'use client'

import { useEffect, useState } from 'react'
import Divider from '@/components/Divider'
import { CategoryMType } from '@/types/categoryType'
import { getCategoryM } from '@/utils/categoryApi'
import LCategoryBest from './LCategoryBest'
import MCategory from './MCategory'

export default function CategoryLAll({ largeName }: { largeName: string }) {
  const [mediumData, setMediumData] = useState<CategoryMType[] | []>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getCategoryM(largeName)
      if (data) {
        setMediumData(data.categoryMList)
      } else {
        setMediumData([])
      }
    }

    fetchData()
  }, [largeName])

  return (
    <>
      <MCategory largeName={largeName} mediumData={mediumData} />
      <Divider height={20} unit="px" color="var(--m-colors-gray150)" />

      <LCategoryBest largeName={largeName} mediumData={mediumData} />
      <Divider height={20} unit="px" color="var(--m-colors-gray150)" />
    </>
  )
}
