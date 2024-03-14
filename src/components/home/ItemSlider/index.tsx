'use client'

import { useEffect, useRef, useState } from 'react'
import ItemScroll from './ItemScroll'
import styles from './ItemSlider.module.css'
import { FirstIcon, SecondIcon } from './state'

export default function ItemSlider() {
  const [width, setWidth] = useState<number>(0)
  // 스크롤을 하는 부모 태그에 걸어줄 ref
  const progressRef = useRef<HTMLDivElement | null>(null)

  /** 스크롤 시 width를 변경
   *
   * 스크롤 하는 부모 태그의 너비를 계산
   * 진행 상태에 따라 너비를 변경  */
  const handleScroll = () => {
    const progressContainer = progressRef.current
    const scrollWidth =
      progressContainer!.scrollWidth - progressContainer!.clientWidth
    const scrolled = progressContainer!.scrollLeft
    const newWidth = (scrolled / scrollWidth) * 100
    setWidth(newWidth)
  }

  useEffect(() => {
    const progressContainer = progressRef.current
    progressContainer!.addEventListener('scroll', handleScroll)

    return () => {
      progressContainer!.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="mx-4 my-0">
      <div className="overflow-x-auto scrollbar-hide" ref={progressRef}>
        <ItemScroll data={FirstIcon} ImageH={64} />
        <ItemScroll data={SecondIcon} ImageH={96} />
      </div>
      {/* 스크롤바 */}
      <div className={styles.barContainer}>
        <div className={styles.barInit}>
          <div className={styles.bar} style={{ width: `${width}%` }} />
        </div>
      </div>
    </div>
  )
}
