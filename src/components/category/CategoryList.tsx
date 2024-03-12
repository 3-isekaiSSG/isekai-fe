'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './category.module.css'
import { CATEGORY, CategoryLType } from './states'

// TODO: API 카테고리 데이터로 수정
// eslint-disable-next-line
export default function CategoryList({ data }: { data: any }) {
  const [categoryData, setCategoryData] = useState<CategoryLType[]>([])
  const [selected, setSelected] = useState(-1)

  useEffect(() => {
    if (data === undefined) {
      setCategoryData(CATEGORY)
    } else setCategoryData(data)
  }, [])

  const handleClick = (id) => {
    setSelected(id)
  }

  return (
    <ul className="relative flex flex-wrap pt-[15px] pb-[25px] px-2.5">
      {categoryData.map((item) => (
        <li
          key={item.id}
          className={`basis-1/5 max-w-[20%] p-[5px] ${styles.li}`}
        >
          <button
            type="button"
            className="w-full"
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
          <div className={selected === item.id ? styles.selected : 'hidden'}>
            <div className={styles.test}>
              <ul>
                {item.categoryM?.map((itemM) => (
                  <li key={itemM.id}>{itemM.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
