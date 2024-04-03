'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ThumbnailType } from '@/types/productDataType'
import { getImageList } from '@/utils/productDataApi'

export default function ProductCarousel({
  type,
  code,
}: {
  type: 'products' | 'bundles'
  code: number
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageList, setImageList] = useState<ThumbnailType[] | []>([])

  useEffect(() => {
    async function fetchData() {
      const res = await getImageList(type, code)
      if (res) {
        setImageList(res)
        console.log(res)
      }
    }
    fetchData()
  }, [code, type])

  return (
    <div className="relative w-[478px] h-[478px]">
      <div>TODO: 캐러셀 또해야함 ㅇㅅㅇ</div>
      <Image
        src="https://sitem.ssgcdn.com/01/35/14/item/1000584143501_i2_750.jpg"
        fill
        alt="test"
      />
    </div>
  )
}
