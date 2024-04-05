import { atom } from 'recoil'

export const termsAgreeState = atom({
  key: 'termsAgreeState',
  default: false,
})

export const memberInfoState = atom({
  key: 'memberInfoState',
  default: {
    accountId: '',
    dupCheck: false,
    name: '',
    password: '',
    pwd2: '',
    email: '',
    phone: '',
    address: '',
    phoneCert: false,
    gender: 0,
  },
})

export const marketConsentState = atom({
  key: 'marketConsentState',
  default: {
    email: false,
    sms: false,
  },
})
