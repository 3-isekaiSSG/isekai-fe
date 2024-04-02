'use server'

export interface SortType {
  id: number
  option: string
  value: string
  isInfo: boolean
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
