'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useUpdateQueryString } from '@/hooks/useUpdateQueryString'
import { CategoryType } from '@/types/categoryType'
import { getCategoryS } from '@/utils/categoryApi'

export default function CategorySmall({ mediumName }: { mediumName: string }) {
  const [data, setData] = useState<CategoryType[]>([])
  const [selectSmall, setSelectSmall] = useState<string | null>(null)
  const searchParams = useSearchParams()

  const router = useRouter()
  const pathName = usePathname()
  const updateQueryString = useUpdateQueryString()

  const handleClick = (item: CategoryType) => {
    let queryString
    if (selectSmall === item.name) {
      setSelectSmall(null)
      queryString = updateQueryString('smallName')
    } else {
      setSelectSmall(item.name)
      queryString = updateQueryString('smallName', item.name)
    }

    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  useEffect(() => {
    const mediumCategory = decodeURIComponent(decodeURI(mediumName))
    async function fetchData() {
      const res = await getCategoryS(mediumCategory)
      if (res) {
        setData(res.categorySList)
      }
    }
    const query = searchParams.get('smallName')
    setSelectSmall(query)
    fetchData()
  }, [mediumName, searchParams])

  return (
    <div className="grid grid-cols-[repeat(3,1fr)] border-[color:var(--m-colors-gray200)] p-0 border-t">
      {data.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleClick(item)}
          className={`${selectSmall === item.name && 'bg-[color:var(--m-colors-gray900)] text-[color:var(--m-colors-white)]'} relative flex items-center h-[46px] border-[color:var(--m-colors-gray200)] pl-[15px] border-b border-r `}
        >
          <span className="text-[13px] text-left">{item.name}</span>
        </button>
      ))}
    </div>
  )
}
