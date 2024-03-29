import { atom } from 'recoil'

export const bottomSheetState = atom({
  key: 'bottomSheetState',
  default: false,
})

export const animateSheetState = atom({
  key: 'animateSheetState',
  default: '',
})
