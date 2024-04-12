// 묶음상품 API
export async function getBundleList(sortType: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/bundles/${sortType}`,
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
