'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CategoryLMType, CategoryMType } from '@/types/categoryType'
import styles from './category.module.css'

// 중분류 카테고리
function CategoryM({
  category,
  items,
  isActive,
}: {
  category: string
  items: CategoryMType[] | undefined
  isActive: boolean
}) {
  return (
    items &&
    isActive && (
      <div className="absolute left-0 w-full overflow-hidden">
        <ul className="bg-[color:var(--m-colors-gray150)] flex flex-wrap w-full mt-[5px] pl-[13px] pr-3 pt-3 pb-5">
          {items.map((item) => (
            <li
              key={item.categoryMId}
              className={`flex w-6/12 min-h-[38px] items-center pl-3 pr-[13px] py-0 text-sm tracking-[-0.3px] ${item.colored ? 'text-[#6841ff]' : 'text-[color:var(--m-colors-gray900)]'}`}
            >
              <Link
                href={
                  item.categoryMId
                    ? `/category/${category}/${item.mediumName}`
                    : `/category/${category}`
                }
              >
                {item.mediumName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

// 대분류 카테고리
export default function CategoryList({
  data,
}: {
  data: CategoryLMType[] | []
}) {
  const [selected, setSelected] = useState<null | number>(null)

  // 뷰포트 너비 계산
  const [baseWidth, setBaseWidth] = useState<number>(0)
  const updateBaseWidth = () => {
    const viewportWidth = window.innerWidth
    setBaseWidth(viewportWidth * 0.2 + 25)
  }

  useEffect(() => {
    updateBaseWidth()
  }, [])

  /** 대분류를 눌렀을 때, 소분류 표시
   * 현재 열려있는 항목이면, 닫기 */
  const handleClick = (id: number) => {
    updateBaseWidth()

    if (id === selected) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }

  return (
    <ul className="relative flex flex-wrap pt-[15px] pb-[25px] px-2.5">
      {data.map((item) => (
        // 기본 div height(20vw) + 하위 카테고리 갯수 * 50px
        <li
          key={item.id}
          className="basis-1/5 max-w-[20%] p-[5px] mb-5"
          style={{
            height:
              selected === item.id
                ? `${baseWidth + (Math.ceil(item.categoryMList.length / 2) || 0) * 50}px`
                : 'auto',
          }}
        >
          <button
            type="button"
            className="w-full min-h-[26vw]"
            onClick={() => handleClick(item.id)}
          >
            <div
              className={`relative block ${selected === item.id && styles.selectImage}`}
            >
              <Image
                src={`/images/categoryL/${item.categoryLId}.png`}
                alt={item.largeName}
                width={100}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <span className="text-xs text-ellipsis overflow-hidden block text-[#424242] tracking-[-0.5px] text-center mt-[5px] break-words">
              {item.largeName}
            </span>
          </button>
          <CategoryM
            category={item.largeName}
            items={item?.categoryMList}
            key={item.id}
            isActive={item.id === selected}
          />
        </li>
      ))}
    </ul>
  )
}
