'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import CategoryLinkTab from '@/components/CategoryTab/CategoryLinkTab'
import { CategoryType } from '@/types/categoryType'
import { CategoryProductType } from '@/types/productType'
import { getCategoryM } from '@/utils/categoryApi'
import { getCategoryProduct } from '@/utils/categoryProductQueryApi'
import CategoryFilter from './CategoryFilter'
import CategorySmall from './CategorySmall'

export default function CategoryMAll({
  categoryName,
}: {
  categoryName: string[]
}) {
  const [mediumData, setMediumData] = useState<CategoryType[]>([])
  const [productData, setProductData] = useState<CategoryProductType>([])
  const searchParams = useSearchParams()

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

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    async function fetchData() {
      const res = await getCategoryProduct(
        decodeURIComponent(decodeURIComponent(categoryName[0])),
        decodeURIComponent(decodeURIComponent(categoryName[1])),
        params,
      )
      if (res) {
        setProductData(res)
        console.log(res)
      }
    }

    fetchData()
  }, [categoryName, searchParams])

  return (
    <>
      <CategoryLinkTab data={mediumData} categoryName={categoryName} />
      <CategorySmall mediumName={categoryName[1]} />
      <CategoryFilter />

      <div className="text-[13px] text-[color:var(--m-colors-gray600)] px-4 py-0">
        <span className="font-bold text-[color:var(--m-colors-black)]">
          {productData.total ? productData.total.toLocaleString('ko-KR') : 0}개
        </span>
        의 상품이 있습니다
      </div>

      <div>두개 리스트 좌라락</div>
    </>
  )
}
