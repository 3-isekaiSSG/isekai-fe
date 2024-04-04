import { atom } from 'recoil'

export const tabState = atom({
  key: 'tabState',
  default: {
    id: true,
    pw: false,
    flag: false,
  },
})
