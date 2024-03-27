'use client'

// TODO: 중분류 보기 페이지
// import { getCategoryM } from '@/utils/categoryApi'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MCategory({ largeName }: { largeName: string }) {
  // const [MData, setMData] = useState()

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getCategoryM(largeName)
  //     setMData(data)
  //   }

  //   fetchData()
  // }, [])

  return (
    <section className="mt-10 px-4 py-0">
      <div className="flex relative text-left z-10 items-end">
        <div className="min-w-full mr-2.5">
          <h3 className="text-xl leading-[normal] font-bold">카테고리</h3>
        </div>
      </div>
      <div className="grid gap-2.5 grid-cols-4 py-[15px]">
        {/* {MData.map((item) => (
          <Link
            key={item.id}
            href={`/category/${largeName}/${item.medium}`}
            className="block relative"
          >
            <div className="relative aspect-[1] w-full h-auto">
              <Image
                alt={item.medium}
                src={`${item.imageUrl}`}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-xs text-[color:var(--m-colors-gray700)] text-center mt-[5px]">
              {item.medium}
            </p>
          </Link>
        ))} */}
      </div>
    </section>
  )
}
