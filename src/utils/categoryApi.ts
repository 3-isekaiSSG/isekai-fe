'use server'

import {
  CategoryMType,
  CategorySType,
  CategoryType,
} from '@/types/categoryType'

/** 대 카테고리 조회 */
export async function getCategoryL(): Promise<CategoryType[] | []> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/categories/large`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryL', err)
    return []
  }
}

/** 중 카테고리 조회 */
export async function getCategoryM(
  largeName: string,
): Promise<CategoryMType | undefined> {
  const replaceLargeName = largeName.replaceAll('/', '-')

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/categories/medium/${replaceLargeName}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryM', err)
    return undefined
  }
}

/** 소 카테고리 조회 */
export async function getCategoryS(
  mediumName: string,
): Promise<CategorySType | undefined> {
  const replaceMediumName = mediumName.replaceAll('/', '-')

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/categories/small/${replaceMediumName}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryS', err)
    return undefined
  }
}
