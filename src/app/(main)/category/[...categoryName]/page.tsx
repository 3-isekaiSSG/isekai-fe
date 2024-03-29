import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  const decodeParams = params.categoryName.map((name) => {
    return decodeURIComponent(name)
  })

  return (
    <main className="relative min-h-[50vh]">
      <CategoryNameHeader nowData={decodeParams} />

      {decodeParams.length === 1 ? (
        <CategoryLAll largeName={decodeParams[0]} />
      ) : (
        <div style={{ wordBreak: 'break-all' }}>카테고리 {decodeParams}</div>
      )}
    </main>
  )
}
