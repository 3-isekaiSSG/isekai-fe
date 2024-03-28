/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import CategoryTab from '@/components/CategoryTab'
import Divider from '@/components/Divider'
import MiniTitle from '@/components/MiniTitle'
import { CategoryType } from '@/types/categoryType'

export default function LCategoryBest({
  largeName,
  mediumData,
}: {
  largeName: string
  mediumData: CategoryType[] | []
}) {
  // const [selectCategoryName, setSelectCategoryName] = useState<string>('')
  // const [selectCategoryId, setSelectCategoryId] = useState<number>(0)

  return (
    <section className="px-4 py-0 mt-10">
      <MiniTitle title="카테고리 베스트" description="" />
      <Divider height={20} unit="px" color="" />

      {/* <CategoryTab data={mediumData} categoryType="medium" /> */}
      <div className="py-4">
        <div>{}</div>
      </div>
    </section>
  )
}
