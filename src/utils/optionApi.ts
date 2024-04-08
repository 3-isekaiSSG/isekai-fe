import { ChildOptionsType, OptionCategoryType } from '@/types/OptionType'

/** 단일 상품 옵션 전체 조회 */
export async function getOptions(
  type: 'products' | 'bundles',
  code: number,
): Promise<OptionCategoryType[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/options/${type}/${code}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getOptions', err)
    return []
  }
}
/** 옵션 상세 조회 */
export async function getOptionsToParent(
  type: 'products' | 'bundles',
  code: number,
  parentId?: number,
): Promise<ChildOptionsType[]> {
  let queryString
  if (parentId) {
    queryString = `parentId=${parentId}`
  } else {
    queryString = ''
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/options/detail/${type}/${code}?${queryString}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getOptionsToParent', err)
    return []
  }
}
