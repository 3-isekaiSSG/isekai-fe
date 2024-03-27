import AllCategoryDrop from '@/containers/category/[categoryName]/AllCategoryDrop'
import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  const decodeParams = params.categoryName.map((name) => {
    return decodeURIComponent(name)
  })

  return (
    <main className="relative">
      <AllCategoryDrop nowData={decodeParams} />

      {decodeParams.length === 1 ? (
        <CategoryLAll largeName={decodeParams[0]} />
      ) : (
        <div style={{ wordBreak: 'break-all' }}>카테고리 {decodeParams}</div>
      )}
    </main>
  )
}
