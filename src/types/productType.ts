export interface IdListType {
  id: number
  productId?: number
  bundleId?: number
}

export interface ItemType {
  imageUrl: string
  title: string
  vender?: string
  buyNow?: number
  isSSG?: boolean
}

// 할인율, 정상가격, 판매가격
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

// 특가 상품
export interface BundleItemType extends ItemType {
  bundleId: number
  minPrice: number
  isSale?: SaleItemType
  review?: ItemReviewType
}

// 일반 상품
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
