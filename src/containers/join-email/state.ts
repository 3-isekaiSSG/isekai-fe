import { atom } from 'recoil'

export const termsAgreeState = atom({
  key: 'termsAgreeState',
  default: false,
})

export const memberInfoState = atom({
  key: 'memberInfoState',
  default: {
    emailId: '',
    dupCheck: false,
    password: '',
    pwd2: '',
    name: '',
    phoneNum: '',
    phoneCert: false,
  },
})

export const mrktConsentState = atom({
  key: 'mrktConsentState',
  default: {
    email: false,
    sms: false,
  },
})
