'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CategoryType } from '@/types/categoryType'
import { getCategoryM } from '@/utils/categoryApi'
import styles from './category.module.css'

// 중분류 카테고리
function CategoryM({
  categoryL,
  items,
  isActive,
}: {
  categoryL: {
    name: string
    id: number
  }
  items: CategoryType[] | undefined
  isActive: boolean
}) {
  return (
    items &&
    isActive && (
      <div className="absolute left-0 w-full overflow-hidden">
        <ul className="bg-[color:var(--m-colors-gray150)] flex flex-wrap w-full mt-[5px] pl-[13px] pr-3 pt-3 pb-5">
          {items.map((item) => {
            const categoryLargeURL = categoryL.name.replaceAll('/', '%2F')
            const categoryMediumURL = encodeURIComponent(item.name).replaceAll(
              '%2F',
              '%252F',
            )

            return (
              <li
                key={item.categoryId}
                className={`flex w-6/12 min-h-[38px] items-center pl-3 pr-[13px] py-0 text-sm tracking-[-0.3px] ${item.colored ? 'text-[#6841ff]' : 'text-[color:var(--m-colors-gray900)]'}`}
              >
                <Link
                  href={{
                    pathname:
                      item.id !== 0
                        ? `/category/${categoryLargeURL}/${categoryMediumURL}`
                        : `/category/${categoryLargeURL}`,
                  }}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  )
}

// 대분류 카테고리
export default function CategoryList({ data }: { data: CategoryType[] | [] }) {
  const [selectedId, setSelectedId] = useState<number>(0)
  const [baseWidth, setBaseWidth] = useState<number>(0)
  const [categoryMData, setCategoryMData] = useState<CategoryType[] | []>([])

  /** 대분류를 눌렀을 때, 중분류 표시
   * 현재 열려있는 항목이면, 닫기 */
  const handleClick = async (id: number, largeName: string) => {
    const Mdata = await getCategoryM(largeName)
    if (Mdata) {
      setCategoryMData(Mdata?.categoryMList)
    }

    if (id === selectedId) {
      setSelectedId(0)
    } else {
      setSelectedId(id)
    }
  }

  useEffect(() => {
    const updateBaseWidth = async () => {
      const viewportWidth = await window.innerWidth
      setBaseWidth(viewportWidth * 0.2 + 25)
    }
    updateBaseWidth()
  }, [])

  return (
    <div>
      <ul className="relative flex flex-wrap pt-[15px] pb-[25px] px-2.5">
        {data &&
          data.slice(1).map((item) => (
            // 기본 div height(20vw) + 하위 카테고리 갯수 * 50px
            <li
              key={item.id}
              className="basis-1/5 max-w-[20%] p-[5px] mb-5"
              style={{
                height:
                  selectedId === item.id
                    ? `${baseWidth + (Math.ceil(categoryMData.length / 2) || 0) * 50}px`
                    : 'auto',
              }}
            >
              <button
                type="button"
                className="w-full min-h-[20vw]"
                onClick={() => handleClick(item.id, item.name)}
              >
                <div
                  className={`relative block ${selectedId === item.id && styles.selectImage}`}
                >
                  <Image
                    src={item.img ? item.img : ''}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <span className="text-xs text-ellipsis overflow-hidden block text-[#424242] tracking-[-0.5px] text-center mt-[5px] break-words">
                  {item.name}
                </span>
              </button>
              <CategoryM
                categoryL={{ id: item.categoryId, name: item.name }}
                items={categoryMData}
                key={item.id}
                isActive={item.id === selectedId}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}
