import { AtomEffect, atom } from 'recoil'

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key)
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue))
      }

      onSet((newValue, _, isReset) => {
        if (isReset) return localStorage.removeItem(key)

        return localStorage.setItem(key, JSON.stringify(newValue))
      })
    }
  }

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
  effects: [localStorageEffect<CurrentSearchType[]>('recent-search')],
})
