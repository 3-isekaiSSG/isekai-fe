'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useUpdateQueryString } from '@/hooks/useUpdateQueryString'
import { getDeliveryTypes, DeliveryType } from './state'

export default function DeliveryTab() {
  const [selectDel, setSelectDel] = useState(-1)
  const [deliveryList, setDeliveryList] = useState<DeliveryType[]>([])
  const router = useRouter()
  const pathName = usePathname()
  const updateQueryString = useUpdateQueryString()

  const handleClick = (tab: DeliveryType) => {
    let queryString
    if (selectDel === tab.id) {
      setSelectDel(-1)
      queryString = updateQueryString('dType')
    } else {
      setSelectDel(tab.id)
      queryString = updateQueryString('dType', tab.name)
    }
    router.push(`${pathName}?${queryString}`, {
      scroll: false,
    })
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getDeliveryTypes()
      if (res) {
        setDeliveryList(res)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex items-center justify-between my-2.5 pr-4">
      <div className="flex flex-row items-center justify-start flex-1 overflow-x-auto">
        {deliveryList &&
          deliveryList.map((item) => {
            if (item.name === '택배배송') {
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className={`${selectDel === item.id ? 'bg-[color:var(--m-colors-delivery-pickup)] text-[color:var(--m-colors-gray900)]' : 'bg-[color:var(--m-colors-gray150)] text-[color:var(--m-colors-gray600)]'} relative flex items-center justify-center leading-[1.2] min-w-[75px] w-max h-7 mr-1 p-0 rounded-2xl text-[13px] font-bold`}
                >
                  <p className="leading-none mx-3 my-0">{item.name}</p>
                </button>
              )
            }
            return (
              <button
                type="button"
                key={item.id}
                className="relative flex items-center justify-center leading-[1.2] font-normal bg-current text-[color:var(--m-colors-white)] min-w-[75px] w-max h-7 mr-1 p-0 rounded-2xl"
                onClick={() => handleClick(item)}
              >
                {item.engName && (
                  <Image
                    fill
                    sizes="100vw"
                    alt={item.name}
                    src={
                      selectDel === item.id
                        ? `https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_${item.engName}.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4`
                        : `https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/${item.engName}_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4`
                    }
                  />
                )}
              </button>
            )
          })}
      </div>
    </div>
  )
}
