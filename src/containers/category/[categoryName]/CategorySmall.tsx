'use client'

import { usePathname, useRouter } from 'next/navigation'
import { CategoryType } from '@/types/categoryType'

export default function CategorySmall({
  smallCategoryList,
  searchParams,
}: {
  smallCategoryList: CategoryType[]
  searchParams: { [key: string]: string }
}) {
  const router = useRouter()
  const pathName = usePathname()

  const handleClick = (item: CategoryType) => {
    router.replace(`${pathName}?smallName=${item.name}`)
  }

  return (
    <div className="grid grid-cols-[repeat(3,1fr)] border-[color:var(--m-colors-gray200)] p-0 border-t">
      {smallCategoryList.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleClick(item)}
          className={`${searchParams?.smallName === item.name && 'bg-[color:var(--m-colors-gray900)] text-[color:var(--m-colors-white)]'} relative flex items-center h-[46px] border-[color:var(--m-colors-gray200)] pl-[15px] border-b border-r `}
        >
          <span className="text-[13px] text-left">{item.name}</span>
        </button>
      ))}
    </div>
  )
}
