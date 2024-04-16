'use client'

import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  categoryListState,
  favoriteDelCnt,
  favoriteDelState,
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
  const [likeCntValue, setLikeCnt] = useRecoilState(likeCntState)
  const setProductLike = useSetRecoilState(productListState)
  const setSellerLike = useSetRecoilState(sellerListState)
  const setCategoryLike = useSetRecoilState(categoryListState)

  const [filter, setFilter] = useRecoilState(filterState)
  const resetSelect = useResetRecoilState(favoriteDelState)
  const resetSelectCnt = useResetRecoilState(favoriteDelCnt)

  useEffect(() => {
    setLikeCnt(likeCnt)
    setProductLike(productLike)
    setSellerLike(sellerLike)
    setCategoryLike(categoryLike)

    resetSelect()
    resetSelectCnt()
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
          상품 ({likeCntValue.product})
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
          브랜드&스토어 ({likeCntValue.seller})
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
          카테고리 ({likeCntValue.category})
        </button>
      </div>
    </div>
  )
}
