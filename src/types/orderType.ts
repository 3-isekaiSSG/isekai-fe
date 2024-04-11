export interface DeliveryDataType {
  nickname: string
  name: string
  cellphone: string
  telephone: string
  zipcode: string
  address: string
  orderHistory: boolean // 주문 이력이 있는지
  default: boolean // 기본 배송지 설정 여부
  deleted: boolean // 삭제 여부
}
