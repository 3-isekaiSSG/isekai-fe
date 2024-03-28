export interface CategoryType {
  id: number
  categoryId: number
  name: string
  img: string
  colored?: boolean | undefined
}

export interface CategoryLType extends CategoryType {}

export interface CategoryMType {
  id: number
  largeName: string
  categoryMList: CategoryType[]
}
