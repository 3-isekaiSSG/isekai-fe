export interface CarouselType {
  id: number
  tag?: string[]
  image: string
  title: string[]
  description: string
}

export interface SaleCardsType {
  style: 'ssg' | 'samsung' | 'hyundai' | 'shinhan' | 'kb'
  title: string[]
  image: string
  description: string
  type: string
}
