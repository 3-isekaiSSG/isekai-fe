'use client'

import { useEffect, useState } from 'react'
import CategoryQueryTab from '@/components/CategoryTab/CategoryQueryTab'
import Divider from '@/components/Divider'
import MiniTitle from '@/components/MiniTitle'
import { CategoryType } from '@/types/categoryType'
import { getCategoryM } from '@/utils/categoryApi'
import MCategory from './MCategory'

export default function CategoryLAll({
  largeName,
  children,
}: {
  largeName: string
  children: React.ReactNode
}) {
  const [mediumData, setMediumData] = useState<CategoryType[]>([])

  useEffect(() => {
    async function fetchData() {
      const largeNameString = decodeURIComponent(decodeURI(largeName))
      const data = await getCategoryM(largeNameString)
      if (data) {
        setMediumData(data.categoryMList)
      }
    }

    fetchData()
  }, [largeName])

  return (
    <>
      <MCategory largeName={largeName} mediumData={mediumData} />
      <Divider height={5} color="var(--m-colors-gray150)" />

      <section className="pt-4">
        <div className="px-4">
          <MiniTitle title="카테고리 베스트" description="" />
          <Divider height={5} />
          <CategoryQueryTab data={mediumData} type="medium" />
        </div>
        {children}
      </section>

      <Divider height={5} color="var(--m-colors-gray150)" />
    </>
  )
}
