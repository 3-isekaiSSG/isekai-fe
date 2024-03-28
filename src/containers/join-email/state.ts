import { atom } from 'recoil'

export const termsAgreeState = atom({
  key: 'termsAgreeState',
  default: false,
})

export const memberInfoState = atom({
  key: 'memberInfoState',
  default: {
    emailId: '',
    password: '',
    pwd2: '',
    name: '',
    phoneNum: '',
  },
})

export const mrktConsentState = atom({
  key: 'mrktConsentState',
  default: {
    email: false,
    sms: false,
  },
})
