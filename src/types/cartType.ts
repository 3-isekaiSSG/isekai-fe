export interface CartDeliveryType {
  id: number
  code: number | string
  count: number
  checked: number
}

export interface CartItemsType {
  id: number
  normal: CartDeliveryType[]
  ssg: CartDeliveryType[]
}
