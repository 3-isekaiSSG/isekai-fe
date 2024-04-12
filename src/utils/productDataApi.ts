import {
  CardDataType,
  CardDetailType,
  DiscountType,
  ProductCategoryType,
  ProductDeliveryType,
  ReviewTotalType,
  SellersType,
  ThumbnailType,
} from '@/types/productDataType'

/** 단일 상품 상세 조회 */
export async function getDetail(
  type: 'products' | 'bundles',
  code: number,
): Promise<CardDetailType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${type}/${code}/detail`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDetail', err)
    return undefined
  }
}

/** 단일 상품 데이터 조회 */
export async function getCardData(
  type: 'products' | 'bundles',
  code: number,
): Promise<CardDataType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${type}/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCardData', err)
    return undefined
  }
}

/** 단일 상품 썸네일 조회 */
export async function getThumbnail(
  type: 'products' | 'bundles',
  code: number,
): Promise<ThumbnailType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/images/${type}/${code}/thumbnail`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getThumbnail', err)
    return undefined
  }
}

/** 단일 상품 배송 유형 조회 */
export async function getDeliveryType(
  type: 'products' | 'bundles',
  code: number,
): Promise<ProductDeliveryType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/delivery-types/${type}/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDeliveryType', err)
    return undefined
  }
}

/** 단일 상품 판매자 조회 */
export async function getSeller(
  type: 'products' | 'bundles',
  code: number,
): Promise<SellersType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/sellers/${type}/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getSeller', err)
    return undefined
  }
}

/** 단일 상품 할인 정보 */
export async function getDiscount(
  type: 'products' | 'bundles',
  code: number,
): Promise<DiscountType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${type}/${code}/discount`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDiscount', err)
    return undefined
  }
}

/** 단일 상품 이미지 리스트 */
export async function getImageList(
  type: 'products' | 'bundles',
  code: number,
): Promise<ThumbnailType[] | []> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/images/${type}/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getImageList', err)
    return []
  }
}

/** 단일 상품 리뷰 집계 */
export async function getReviewTotal(
  type: 'products' | 'bundles',
  code: number,
): Promise<ReviewTotalType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${type}/${code}/review-score`,
      { cache: 'no-store' },
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getReviewTotal', err)
    return undefined
  }
}

/** 단일상품 대-중-소 조회 */
export async function getProductsCategory(
  code: number,
): Promise<ProductCategoryType | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/categories/products/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getProductsCategory', err)
    return undefined
  }
}
