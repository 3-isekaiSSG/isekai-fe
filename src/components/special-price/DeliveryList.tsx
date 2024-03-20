'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DeliveryType } from '@/types/productType'

export default function DeliveryList({ data }: { data: DeliveryType[] | [] }) {
  // TODO: 선택한 것 상태관리
  const [selectDel, setSelectDel] = useState(0)
  const handleClick = (newId: number) => {
    if (selectDel === newId) {
      setSelectDel(0)
    } else {
      setSelectDel(newId)
    }
  }

  return (
    <div className="flex flex-row items-center justify-start flex-1 overflow-x-auto">
      {data.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className="relative flex items-center justify-center leading-[1.2] font-normal bg-current text-[color:var(--m-colors-white)] min-w-[75px] w-max h-7 mr-1 p-0 rounded-2xl"
          onClick={() => handleClick(tab.id)}
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
  )
}
