'use server'

import { CategoryType } from '@/types/categoryType'
import { getCategoryM } from '@/utils/categoryApi'

export async function getCategoryMediumData(
  largeName: string,
): Promise<CategoryType[]> {
  const res = await getCategoryM(largeName)
  if (res) return res.categoryMList
  return []
}
