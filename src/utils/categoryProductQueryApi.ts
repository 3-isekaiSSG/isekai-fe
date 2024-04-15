import { CategoryProductType } from '@/types/productType'

export async function getCategoryProduct(
  largeName: string,
  mediumName: string | null,
  queryString: string,
): Promise<CategoryProductType | undefined> {
  const replaceLargeName = largeName.replaceAll('/', '-')

  const mediumQuery = mediumName
    ? `mediumName=${mediumName.replaceAll('/', '-')}`
    : null

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products?largeName=${replaceLargeName}&${mediumQuery}&${queryString}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryProduct', err)
    return undefined
  }
}
