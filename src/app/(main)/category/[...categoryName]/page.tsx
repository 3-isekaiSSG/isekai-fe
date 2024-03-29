import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  return (
    <main className="relative min-h-[50vh]">
      <CategoryNameHeader nowData={params.categoryName} />

      {params.categoryName.length === 1 ? (
        <CategoryLAll largeName={params.categoryName[0]} />
      ) : (
        <div style={{ wordBreak: 'break-all' }}>
          카테고리 {decodeURIComponent(params.categoryName[0])} &
          {decodeURIComponent(params.categoryName[1])}
        </div>
      )}
    </main>
  )
}
