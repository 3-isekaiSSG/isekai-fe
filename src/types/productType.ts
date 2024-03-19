export interface ItemType {
  imageUrl: string
  title: string
  vender?: string
  buyNow?: number
  isSSG?: boolean
}

export interface SaleItemType {
  rate: number
  rawPrice: number
  salePrice: number
}

// 리뷰 평점, 리뷰 수
export interface ItemReviewType {
  star: number
  count: number
}

// 특가 타입
export interface BundleItemType extends ItemType {
  bundleId: number
  minPrice: number
  isSale?: SaleItemType
  review?: ItemReviewType
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
