'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import CategoryLinkTab from '@/components/CategoryTab/CategoryLinkTab'
import NoItem from '@/components/product/NoItem'
import { useUpdateQueryString } from '@/hooks/useUpdateQueryString'
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
  const updateQueryString = useUpdateQueryString()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  /** mediumName, sort를 제외한 쿼리 삭제  */
  const handleQueryReset = () => {
    let newParams
    const preservedParams = ['smallName', 'sort']

    const deleteKey = Array.from(searchParams.keys()).filter(
      (key) => !preservedParams.includes(key),
    )

    deleteKey.forEach((key) => {
      newParams = updateQueryString(key)
    })

    router.push(`${pathname}?${newParams}`, { scroll: false })
  }

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

      {productData.total === 0 && (
        <div className="text-center my-[17px]">
          <p className="text-[color:var(--m-colors-gray900)]">
            선택하신 필터와 일치하는 상품이 없습니다
          </p>
          <button
            type="button"
            onClick={handleQueryReset}
            className="inline-flex items-center justify-center leading-[1.2] min-w-[2.5rem] bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] w-20 h-9 opacity-90 text-[13px] font-medium mt-2.5 px-4 py-0 rounded-[1.25rem]"
          >
            초기화
          </button>
        </div>
      )}

      {productData.total ? <div>두개 좌라락</div> : <NoItem />}
    </>
  )
}
