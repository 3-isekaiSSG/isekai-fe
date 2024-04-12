export interface ReviewContentType {
  reviewId: number
  score: number
  reviewContent: string
  accountId: string
  reviewImage: string
  productId: number
  createdAt: string
}

export interface ReviewDataType {
  content: ReviewContentType[]
  totalPages: number
}
