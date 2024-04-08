import { atom } from 'recoil'
import { ChildOptionsType } from '@/types/OptionType'

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

// 백에 저장할 값
export const postOptionIdCountAtom = atom({
  key: 'postOptionIdCountAtom',
  default: {
    optionsId: 0,
    count: 1,
  },
})

interface OptionIdCountType {
  optionsId: number
  count: number
}
// 백에 저장할 값
export const postOptionsIdCountAtom = atom<OptionIdCountType[]>({
  key: 'postOptionsIdCountAtom',
  default: [],
})
