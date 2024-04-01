export interface DeliveryType {
  id: number
  name: string
  url: string | null
  selectUrl: string | null
}

export async function getDeliveryTypes() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/delivery-types`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getDeliveryTypes', err)
    return undefined
  }
}
