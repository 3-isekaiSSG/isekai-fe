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
  isSale?: SaleItemType
  review?: ItemReviewType
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
}

// 베스트 상품
export interface RankingItemType extends ItemType {
  productId: number
  price: number
  ranking?: number
  rankChange?: number
}

// 일반 상품
export interface ProductItemType extends ItemType {
  productId: number
  price: number
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
