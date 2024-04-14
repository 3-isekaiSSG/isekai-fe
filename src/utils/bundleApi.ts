import { BundleIdType } from '@/types/BundleType'

export async function getBundleList(
  sortType?: string,
): Promise<BundleIdType[]> {
  let queryString = ''

  try {
    if (sortType) {
      queryString = `?sortType=${sortType}`
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/bundles${queryString}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getBundleList', err)
    return []
  }
}
