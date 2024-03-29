import { atom } from 'recoil'

export const AlertState = atom({
  key: 'alertState',
  default: { isOpen: false, message: '' },
})
