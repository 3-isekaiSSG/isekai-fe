import { atom } from 'recoil'

interface CurrentSearchType {
  id: number
  text: string
}

export const searchValueState = atom<string>({
  key: 'searchValueState',
  default: '',
})

export const recentSearchState = atom<CurrentSearchType[]>({
  key: 'recentSearchState',
  default: [],
})
