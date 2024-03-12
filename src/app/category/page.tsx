import CategoryList from '@/components/category/CategoryList'
import ThemeList from '@/components/category/ThemeList'

export default function Page() {
  return (
    <>
      <div>
        <CategoryList />
      </div>
      <div className="relative mb-[20px]">
        <h2 className="pb-[5px] pt-[20px] pl-[15px] text-[14px] font-bold text-[color:var(--m-colors-black)]">
          테마추천
        </h2>
        <ThemeList />
      </div>
    </>
  )
}
