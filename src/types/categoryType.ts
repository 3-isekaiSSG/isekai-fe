export interface CategoryType {
  id: number
  categoryId: number
  name: string
  img?: string | undefined
  colored?: boolean | undefined
}

export interface CategoryLType extends CategoryType {}

export interface CategoryMType {
  id: number
  largeName: string
  categoryMList: CategoryType[]
}
export interface CategorySType {
  id: number
  mediumName: string
  categorySList: CategoryType[]
}
