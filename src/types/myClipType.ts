export interface ClipCntType {
  product: number
  seller: number
  category: number
}

export interface ClipType {
  favoriteId: number
  division: string
  identifier: number
}
export interface CategoryClipType extends ClipType {
  categoryLName: string
  categoryMImg: string
  categoryMName: string
}

export interface FavoriteType {
  identifier: string
  division: string
}
