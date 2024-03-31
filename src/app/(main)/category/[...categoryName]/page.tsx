import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryMAll from '@/containers/category/[categoryName]/CategoryMAll'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  return (
    <main className="relative min-h-[50vh]">
      <CategoryNameHeader categoryName={params.categoryName} />

      {params.categoryName.length === 1 ? (
        <CategoryLAll largeName={params.categoryName[0]} />
      ) : (
        <CategoryMAll categoryName={params.categoryName} />
      )}
    </main>
  )
}
