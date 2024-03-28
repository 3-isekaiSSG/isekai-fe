import CategoryList from '@/containers/category/CategoryList'
import ThemeList from '@/containers/category/ThemeList'
import { getCategoryL } from '@/utils/categoryApi'

export default async function Page() {
  const data = await getCategoryL()

  return (
    <main className="w-full">
      <CategoryList data={data} />
      <ThemeList />
    </main>
  )
}
