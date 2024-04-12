import { atom } from 'recoil'

export const filterState = atom({
  key: 'filterState',
  default: {
    product: true,
    seller: false,
    category: false,
  },
})

export const favoriteCntState = atom({
  key: 'favoriteCntState',
  default: {
    product: 0,
    seller: 0,
    category: 0,
  },
})

export const favoriteListState = atom({
  key: 'favoriteListState',
  default: [] as Array<{ favoriteId: number }>,
})

export const favoriteDelListState = atom({
  key: 'favoriteDelListState',
  default: [] as Array<{ favoriteId: number }>,
})
