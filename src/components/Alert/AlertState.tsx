import { atom } from 'recoil'

export const AlertState = atom({
  key: 'alertModalState',
  default: { isOpen: false, message: '' },
})
