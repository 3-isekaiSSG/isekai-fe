'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './category.module.css'
import { CATEGORY, CategoryLType, CategoryMType } from './states'

// 중분류 카테고리
function CategoryM({
  items,
  isActive,
}: {
  items: CategoryMType[] | undefined
  isActive: boolean
}) {
  return (
    items &&
    isActive && (
      <div className="absolute left-0 w-full overflow-hidden">
        <ul className="bg-[color:var(--m-colors-gray150)] flex flex-wrap w-full mt-[5px] pl-[13px] pr-3 pt-3 pb-5">
          {items.map((item) =>
            item.isMain ? (
              <li
                key={item.id}
                className="flex w-6/12 min-h-[38px] items-center pl-3 pr-[13px] py-0 flex-[1_1_100%] mx-0 my-2 relative"
              >
                {/* TODO: 올바른 url로 수정 */}
                <Link
                  href={`/${item.title}`}
                  className="bg-[color:var(--m-colors-white)] rounded-md"
                >
                  {/* TODO: 이미지 에셋 받아서 id 마다 연결하기 */}
                  <Image
                    src="https://sui.ssgcdn.com/cmpt/banner/202402/2024021310321197403716008371_559.png"
                    alt={item.title}
                    fill
                  />
                </Link>
              </li>
            ) : (
              <li
                key={item.id}
                className={`flex w-6/12 min-h-[38px] items-center pl-3 pr-[13px] py-0 text-sm tracking-[-0.3px] ${item.isColor ? 'text-[#6841ff]' : 'text-[color:var(--m-colors-gray900)]'}`}
              >
                <Link href={`/category/${item.id}`}>{item.title}</Link>
              </li>
            ),
          )}
        </ul>
      </div>
    )
  )
}

// 대분류 카테고리
function CategoryL({ items }: { items: CategoryLType[] }) {
  const [selected, setSelected] = useState<null | number>(null)

  // 뷰포트 너비
  const [baseWidth, setBaseWidth] = useState<number>(0)
  useEffect(() => {
    // 컴포넌트가 마운트 된 후 설정
    const viewportWidth = window.innerWidth
    setBaseWidth(viewportWidth * 0.2)
  }, [])

  /** 대분류를 눌렀을 때, 소분류 표시
   * 현재 열려있는 항목이면, 닫기
   */
  const handleClick = (id: number) => {
    if (id === selected) {
      setSelected(null)
    } else {
      setSelected(id)
    }
  }

  return (
    <ul className="relative flex flex-wrap pt-[15px] pb-[25px] px-2.5">
      {items.map((item) => (
        // 기본 div height(20vw) + 하위 카테고리 갯수 * 50px
        <li
          key={item.id}
          className="basis-1/5 max-w-[20%] p-[5px]"
          style={{
            height:
              selected === item.id
                ? `${baseWidth + (item?.categoryM?.length || 0) * 50}px`
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
                src={`/images/categoryL/${item.id}.png`}
                alt={item.title}
                width={100}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <span
              className="text-xs text-ellipsis whitespace-nowrap overflow-hidden block text-[#424242] tracking-[-0.5px] text-center mt-[5px]"
              // eslint-disable-next-line
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </button>
          <CategoryM
            items={item?.categoryM}
            key={item.id}
            isActive={item.id === selected}
          />
        </li>
      ))}
    </ul>
  )
}

// TODO: API 카테고리 데이터로 수정 + Type 지정
// eslint-disable-next-line
export default function CategoryList({ data }: { data: any }) {
  const [categoryData, setCategoryData] = useState<CategoryLType[]>([])

  useEffect(() => {
    if (data === undefined) {
      setCategoryData(CATEGORY)
    } else setCategoryData(data)
  }, [data])

  return <CategoryL items={categoryData} />
}
