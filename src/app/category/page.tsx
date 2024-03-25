import CategoryList from '@/containers/category/CategoryList'
import ThemeList from '@/containers/category/ThemeList'
import { CategoryLMType } from '@/types/categoryType'

async function getCategoryLM(): Promise<CategoryLMType[] | []> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/categories`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryLM', err)
    return []
  }
}

export default async function Page() {
  const data = await getCategoryLM()

  return (
    <main className="w-full">
      <CategoryList data={data} />
      <ThemeList />
    </main>
  )
}
