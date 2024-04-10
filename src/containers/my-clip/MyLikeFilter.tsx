'use client'

import { useState } from 'react'
import style from './mylike.module.css'

interface Like {
  product: boolean
  category: boolean
  brand: boolean
}

export default function MyLikeFilter() {
  const [likeFilterList, setLikeFilterList] = useState<Like>({
    product: true,
    category: false,
    brand: false,
  })

  const handleButton = (key: keyof Like) => {
    setLikeFilterList((prevState) => ({
      ...Object.keys(prevState).reduce((result, item) => {
        return {
          ...result,
          [item as keyof Like]: item === key,
        }
      }, {} as Like),
    }))
  }

  return (
    <div className={style.mylike_filter}>
      <div className={style.mylike_filter_hscroll}>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${likeFilterList.product ? style.on : ''}`}
          onClick={() => handleButton('product')}
        >
          상품 ({2})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${likeFilterList.category ? style.on : ''}`}
          onClick={() => handleButton('category')}
        >
          카테고리 ({0})
        </button>
      </div>
    </div>
  )
}
