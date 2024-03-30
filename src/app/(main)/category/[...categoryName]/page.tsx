import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  // const categoryLargeURL = decodeURIComponent(decodeURI(params.categoryName[0]))
  // const categoryMediumURL = params.categoryName[1].replaceAll('%252F', '/')

  return (
    <main className="relative min-h-[50vh]">
      <CategoryNameHeader categoryName={params.categoryName} />

      {params.categoryName.length === 1 ? (
        <CategoryLAll largeName={params.categoryName[0]} />
      ) : (
        <div style={{ wordBreak: 'break-all' }}>카테고리 categoryName</div>
      )}
    </main>
  )
}
