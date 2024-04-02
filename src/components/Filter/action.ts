'use server'

export interface SortType {
  id: number
  option: string
  value: string
  isInfo: boolean
}

export interface DeliveryType {
  id: number
  deliveryTypeId: number
  name: string
  engName: string
}

export async function getSortListTypes(): Promise<SortType[] | []> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products/products/sort`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getSortListTypes', err)
    return []
  }
}

export async function getDeliveryTypes(): Promise<DeliveryType[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/delivery-types/`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDeliveryTypes', err)
    return []
  }
}

export interface BrandType {
  id: number
  name: string
  cnt: number
}

export async function getBrandList(
  largeName: string,
  mediumName: string,
  smallName?: string,
  sort?: string,
): Promise<BrandType[]> {
  let queryObject = {
    largeName: largeName.replaceAll('/', '-'),
    mediumName: mediumName.replaceAll('/', '-'),
    smallName: '',
    sort: '',
  }
  if (smallName) {
    queryObject = { ...queryObject, smallName }
  }
  if (sort) {
    queryObject = { ...queryObject, sort }
  }

  const queryString = new URLSearchParams(queryObject).toString()

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/sellers/products?${queryString}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getBrandList', err)
    return []
  }
}
