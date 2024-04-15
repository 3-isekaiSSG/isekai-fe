'use client'

import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  categoryListState,
  likeCntState,
  productListState,
  sellerListState,
} from '@/states/likeAtom'
import { ClipCntType, ClipType } from '@/types/myClipType'
import MyLikeFilter from './MyLikeFilter'
import MyLikeItemList from './MyLikeItemList'

export default function MyLikeItemsArea({
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

  useEffect(() => {
    setLikeCnt(likeCnt)
    setProductLike(productLike)
    setSellerLike(sellerLike)
    setCategoryLike(categoryLike)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MyLikeFilter />
      <MyLikeItemList />
    </>
  )
}
