'use client'

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
    <div>
      <div>TODO: 캐러셀 또해야함 ㅇㅅㅇ</div>
    </div>
  )
}
