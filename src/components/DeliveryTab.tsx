'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useUpdateQueryString } from '@/hooks/useUpdateQueryString'
import { DeliveryType } from '@/types/productType'

export default function DeliveryTab({ data }: { data: DeliveryType[] | [] }) {
  // TODO: 선택한 것 상태관리
  const [selectDel, setSelectDel] = useState(0)
  const router = useRouter()
  const pathName = usePathname()

  const updateQueryString = useUpdateQueryString()

  const handleClick = (tab: DeliveryType) => {
    if (selectDel === tab.id) {
      setSelectDel(0)
    } else {
      setSelectDel(tab.id)
    }
    // TODO: 알맞은 query로 변동 및 데이터 패칭
    const queryString = updateQueryString('delivery', tab.title)
    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  return (
    <div className="flex items-center justify-between my-2.5 pr-4">
      <div className="flex flex-row items-center justify-start flex-1 overflow-x-auto">
        {data.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className="relative flex items-center justify-center leading-[1.2] font-normal bg-current text-[color:var(--m-colors-white)] min-w-[75px] w-max h-7 mr-1 p-0 rounded-2xl"
            onClick={() => handleClick(tab)}
          >
            <Image
              fill
              sizes="100vw"
              alt={tab.title}
              src={selectDel === tab.id ? tab.selectUrl : tab.url}
              priority
            />
          </button>
        ))}
      </div>
    </div>
  )
}
