'use client'

import { useState } from 'react'
import style from './mylike.module.css'

interface Like {
  product: boolean
  category: boolean
}

export default function MyLikeFilter() {
  const [likeFilterList, setLikeFilterList] = useState<Like>({
    product: true,
    category: false,
  })

  const handleButton = (key: keyof Like) => {
    setLikeFilterList({
      product: key === 'product',
      category: key === 'category',
    })
  }

  return (
    <div className={style.mylike_filter} role="radiogroup">
      <div className={style.mylike_filter_hscroll}>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${style.clickable} ${likeFilterList.product ? style.on : ''}`}
          onClick={() => handleButton('product')}
        >
          상품 ({2})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${style.clickable} ${likeFilterList.category ? style.on : ''}`}
          onClick={() => handleButton('category')}
        >
          카테고리 ({0})
        </button>
      </div>
    </div>
  )
}
