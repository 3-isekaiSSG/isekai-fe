import { atom } from 'recoil'
import { ClipType, FavoriteType } from '@/types/myClipType'

export const filterState = atom({
  key: 'filterState',
  default: { product: true, seller: false, category: false },
})

export const likeCntState = atom({
  key: 'likeCntState',
  default: { product: 0, seller: 0, category: 0 },
})

export const productListState = atom<ClipType[]>({
  key: 'productListState',
  default: [],
})

export const sellerListState = atom<ClipType[]>({
  key: 'sellerListState',
  default: [],
})

export const categoryListState = atom<ClipType[]>({
  key: 'categoryListState',
  default: [],
})

export const favoriteDelState = atom<FavoriteType[]>({
  key: 'favoriteDelState',
  default: [],
})

export const favoriteDelCnt = atom({
  key: 'favoriteDelCnt',
  default: 0,
})
