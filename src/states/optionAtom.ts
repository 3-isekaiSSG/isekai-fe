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

export const nowSelectDepth = atom<number>({
  key: 'nowSelectDepth',
  default: 0,
})

export const lastOptionAtom = atom<ChildOptionsType>({
  key: 'lastOptionAtom',
  default: undefined,
})

interface OptionIdCountType {
  optionsId: number
  count: number
}

export const oneOptionIdCountAtom = atom<OptionIdCountType>({
  key: 'oneOptionIdCountAtom',
  default: {
    optionsId: 0,
    count: 1,
  },
})

// oneOptionIdCountAtom가 모인 리스트
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
