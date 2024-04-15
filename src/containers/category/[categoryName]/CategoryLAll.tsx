'use client'

import { useEffect, useState } from 'react'
import Divider from '@/components/Divider'
import { CategoryType } from '@/types/categoryType'
import { CategoryProductType } from '@/types/productType'
import { getCategoryM } from '@/utils/categoryApi'
import LCategoryBest from './LCategoryBest'
import MCategory from './MCategory'

export default function CategoryLAll({
  largeName,
  productListData,
}: {
  largeName: string
  productListData?: CategoryProductType
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

      <LCategoryBest
        mediumData={mediumData}
        productListData={productListData?.products}
      />
      <Divider height={5} color="var(--m-colors-gray150)" />
    </>
  )
}
