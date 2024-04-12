import { ItemPriceType } from '@/states/cartAtom'

export const calculateTotalPrice = (
  ssgItems: ItemPriceType[],
  postItems: ItemPriceType[],
  key: 'buyPrice' | 'originPrice',
) => {
  const allItems = [...ssgItems, ...postItems]
  return allItems.reduce((total: number, currentItem: ItemPriceType) => {
    return total + currentItem.count * currentItem[key]
  }, 0)
}
