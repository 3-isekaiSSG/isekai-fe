export interface SaleItemType {
  rate: number
  rawPrice: number
  salePrice: number
}

export interface SpacialItemType {
  id: number
  bundleId: number
  imageUrl: string
  vender: string
  title: string
  minPrice: number
  isLiked: boolean
  buyNow?: number
  isSale?: SaleItemType
}

export interface DeliveryType {
  id: number
  title: string
  url: string
  selectUrl: string
}
