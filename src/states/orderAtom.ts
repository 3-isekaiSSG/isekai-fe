import { atom } from 'recoil'
import { DeliveryDataType } from '@/types/orderType'
import { ItemPriceType } from './cartAtom'

export const deliveryState = atom<DeliveryDataType>({
  key: 'deliveryState',
  default: {
    nickname: '',
    name: '',
    cellphone: '',
    telephone: '',
    zipcode: '',
    address: '',
    orderHistory: false,
    default: false,
    deleted: false,
  },
})

export const orderItemsState = atom({
  key: 'orderItemsState',
  default: { ssg: [] as ItemPriceType[], post: [] as ItemPriceType[] },
})

export const orderPostData = atom({
  key: 'orderPostData',
  default: {
    orderName: '',
    orderPhone: '',
    orderEmail: '-',
    deliveryAddressId: -1,
    deliveryMessage: '',
    payMethod: '신용카드',
    card: '신한',
    installment: 0,
    deliveryFee: 0, // 배송비 total
    buyPrice: 0, // 구매가
    orderSellerProductDtoList: [],
  },
})
