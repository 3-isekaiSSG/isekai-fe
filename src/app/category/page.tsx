import CategoryList from '@/containers/category/CategoryList'
import ThemeList from '@/containers/category/ThemeList'
import { getCategoryLM } from '@/utils/categoryApi'

export default async function Page() {
  const data = await getCategoryLM()

  return (
    <main className="w-full">
      <CategoryList data={data} />
      <ThemeList />
    </main>
  )
}
