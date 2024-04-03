export interface FilterListType {
  id: number
  name: string
  key: string
  listData: string
}

export const filterListData: FilterListType[] = [
  { id: 1, name: '브랜드', key: 'brandName', listData: 'brandList' },
  { id: 2, name: '배송유형', key: 'dType', listData: 'deliveryList' },
  { id: 3, name: '가격', key: 'maxPrc', listData: 'priceList' },
]
