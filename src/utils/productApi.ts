export interface ThumbnailType {
  id: number
  isThumbnail: number
  seq: number
  imageUrl: string
}
export interface ProductDeliveryType {
  id: number
  deliveryTypeId: number
  name: string
  imageUrl: string | null
  selectedImageUrl: string | null
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
