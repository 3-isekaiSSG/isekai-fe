'use server'

export interface DeliveryType {
  id: number
  deliveryTypeId: number
  name: string
  engName: string
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
