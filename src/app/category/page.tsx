import CategoryList from '@/containers/category/CategoryList'
import ThemeList from '@/containers/category/ThemeList'

async function getCategoryLM() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products/category`,
    )
    const data = await response.json()
    return data
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
