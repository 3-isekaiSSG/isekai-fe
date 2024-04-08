export interface CartDeliveryType {
  id: number
  cartId: number
  code: number | string
  count: number
  checked: number
  optionId: number
}

export interface CartItemsType {
  id: number
  cnt: number
  post: CartDeliveryType[]
  ssg: CartDeliveryType[]
}
