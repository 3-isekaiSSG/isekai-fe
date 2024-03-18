export interface SaleItemType {
  rate: number
  rawPrice: number
  salePrice: number
}

export interface ItemType {
  id: number
  imageUrl: string
  title: string
}

// 리뷰 평점, 리뷰 수
export interface ItemReviewType {
  star: number
  count: number
}

// 특가 타입
export interface SpecialItemType extends ItemType {
  bundleId: number
  vender?: string
  minPrice: number
  isLiked: boolean
  buyNow?: number
  isSale?: SaleItemType
  review?: ItemReviewType
  isSSG?: boolean
}

export interface ProductItemType extends ItemType {
  productId: number

  delivery: string
  isSale?: SaleItemType
}

export interface DeliveryType {
  id: number
  title: string
  url: string
  selectUrl: string
}

export interface CategoryType {
  id: number
  title: string
}
