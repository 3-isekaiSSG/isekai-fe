'use client'

import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  categoryListState,
  filterState,
  likeCntState,
  productListState,
  sellerListState,
} from '@/states/likeAtom'
import { ClipCntType, ClipType } from '@/types/myClipType'
import style from './mylike.module.css'

export default function MyLikeFilter({
  likeCnt,
  productLike,
  sellerLike,
  categoryLike,
}: {
  likeCnt: ClipCntType
  productLike: ClipType[]
  sellerLike: ClipType[]
  categoryLike: ClipType[]
}) {
  const setLikeCnt = useSetRecoilState(likeCntState)
  const setProductLike = useSetRecoilState(productListState)
  const setSellerLike = useSetRecoilState(sellerListState)
  const setCategoryLike = useSetRecoilState(categoryListState)

  const [filter, setFilter] = useRecoilState(filterState)

  useEffect(() => {
    setLikeCnt(likeCnt)
    setProductLike(productLike)
    setSellerLike(sellerLike)
    setCategoryLike(categoryLike)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.mylike_filter}>
      <div className={style.mylike_filter_hscroll}>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.product ? style.on : ''}`}
          onClick={() => {
            setFilter({
              product: true,
              seller: false,
              category: false,
            })
          }}
        >
          상품 ({likeCnt.product})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.seller ? style.on : ''}`}
          onClick={() => {
            setFilter({
              product: false,
              seller: true,
              category: false,
            })
          }}
        >
          브랜드&스토어 ({likeCnt.seller})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.category ? style.on : ''}`}
          onClick={() => {
            setFilter({
              product: false,
              seller: false,
              category: true,
            })
          }}
        >
          카테고리 ({likeCnt.category})
        </button>
      </div>
    </div>
  )
}
