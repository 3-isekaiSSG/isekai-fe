import { OptionCategoryType } from '@/types/OptionType'

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
