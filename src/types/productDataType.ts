export interface CardDataType {
  code: number
  name: string
  status: number
  createdAt: string
  originPrice: number
  adultSales: number
}
export interface CardDetailType extends CardDataType {
  detail: string
}
export interface ThumbnailType {
  id: number
  isThumbnail: number
  seq: number
  imageUrl: string
}
export interface ProductDeliveryType {
  id: number
  deliveryTypeId: number
  name: string
  engName: string
}
export interface SellersType {
  sellerId: number
  name: string
}
export interface DiscountType {
  discounted: boolean
  discountRate: number
  discountPrice: number
}
export interface ReviewTotalType {
  reviewCount: number
  totalScore: number
  avgScore: number
}

interface CategoryNameType {
  categoryId: number
  name: string
}
export interface ProductCategoryType {
  largeName: CategoryNameType
  mediumName: CategoryNameType
  smallName: CategoryNameType
}
