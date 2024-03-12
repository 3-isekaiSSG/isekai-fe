import CategoryList from '@/components/category/CategoryList'
import ThemeList from '@/components/category/ThemeList'

export default function Page() {
  // TODO: 카테고리 리스트를 fetch 받아 CategoryList에 Prop 시키기
  // const categoryLM = []
  const data = undefined

  return (
    <>
      <div>
        <CategoryList data={data} />
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
