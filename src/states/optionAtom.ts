import { atom, selector } from 'recoil'
import { ChildOptionsType } from '@/types/OptionType'

export const isOptionToastState = atom({
  key: 'isOptionToastState',
  default: false,
})

export const depthBottomSheetState = atom({
  key: 'depthBottomSheetState',
  default: '',
})

export const selectedOptionsState = atom<ChildOptionsType[]>({
  key: 'selectedOptionsState',
  default: [],
})

interface OptionIdCountType {
  optionsId: number
  count: number
  children?: ChildOptionsType[]
}

export const postOptionsIdCountAtom = atom<OptionIdCountType[]>({
  key: 'postOptionsIdCountAtom',
  default: [],
})

export const totalCountSelector = selector({
  key: 'totalCountSelector',
  get: ({ get }) => {
    const optionCounts = get(postOptionsIdCountAtom)
    return optionCounts.reduce(
      (total, optionCount) => total + optionCount.count,
      0,
    )
  },
})
