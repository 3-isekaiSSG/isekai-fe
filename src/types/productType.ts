export interface IdListType {
  id: number
  productId?: number
  bundleId?: number
}

export interface DeliveryType {
  id: number
  title: string
  url: string
  selectUrl: string
}

export interface IdCodeType {
  id: number
  code: number
}

export interface CategoryProductType {
  id: number
  largeName: string
  mediumName: string
  smallName: string | null
  total: number
  curPage: number
  lastPage: number
  products: IdCodeType[]
}
