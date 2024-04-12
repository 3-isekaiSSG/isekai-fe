import { atom } from 'recoil'

export const ShareState = atom({
  key: 'shareState',
  default: { isOpen: false },
})
