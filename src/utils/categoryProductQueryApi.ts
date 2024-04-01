import { CategoryProductType } from '@/types/productType'

export async function getCategoryProduct(
  largeName: string,
  mediumName: string,
): Promise<CategoryProductType | undefined> {
  const replaceLargeName = largeName.replaceAll('/', '-')
  const replaceMediumName = mediumName.replaceAll('/', '-')

  // 사용하는 페이지로 이동
  // const updateQueryString = useUpdateQueryString()

  // let query
  // query = updateQueryString('largeName', replaceLargeName)
  // query = updateQueryString('mediumName', replaceMediumName)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products?largeName=${replaceLargeName}&mediumName=${replaceMediumName}`,
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
