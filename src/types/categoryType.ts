export interface CategoryLType {
  id: number
  categoryLId: number
  largeName: string
  largeImg: string
}

export interface CategoryMType {
  id: number
  colored: boolean
  categoryMId: number
  mediumName: string
}

export interface CategoryLMType extends CategoryLType {
  categoryMList: CategoryMType[]
}
