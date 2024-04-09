import { atom, selector } from 'recoil'
import { CartDeliveryType } from '@/types/cartType'

/** 장바구니 전체 상품 */
export const cartState = atom({
  key: 'cartState',
  default: {
    ssg: [] as CartDeliveryType[],
    post: [] as CartDeliveryType[],
  },
})

export const selectAllState = atom({
  key: 'selectAllState',
  default: false,
})

export const checkedItemsState = atom({
  key: 'checkedItemsState',
  default: {
    ssg: [] as CartDeliveryType[],
    post: [] as CartDeliveryType[],
  },
})

export const isAllCheckedState = selector({
  key: 'isAllCheckedState',
  get: ({ get }) => {
    const checkedItems = get(checkedItemsState)
    // 여기서는 상품 목록을 상태로 관리하거나 고정된 배열을 사용해야 합니다.
    // const products = [...]; // 상품 목록을 나타냅니다.
    // return products.length > 0 && products.every(product => checkedItems[product.id]);
    return checkedItems
  },
})
