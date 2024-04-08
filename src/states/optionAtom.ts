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

export const savedOptionAtom = atom<ChildOptionsType[]>({
  key: 'savedOptionAtom',
  default: [],
})

export const postOptionIdCountAtom = atom({
  key: 'postOptionIdCountAtom',
  default: {
    optionsId: 0,
    count: 1,
  },
})
