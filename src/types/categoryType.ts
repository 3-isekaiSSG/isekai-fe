export interface CategoryMType {
  id: number
  colored: boolean
  categoryMId: number
  mediumName: string
}

export interface CategoryLMType {
  id: number
  categoryMList: CategoryMType[]
  categoryLId: number
  largeName: string
}
