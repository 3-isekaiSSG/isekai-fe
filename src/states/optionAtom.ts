import { atom } from 'recoil'

// 선택 해야 할 옵션의 depth
export const optionSelectDepth = atom<number>({
  key: 'optionSelectDepth',
  default: 0,
})
