import AllCategoryDrop from '@/containers/category/[categoryName]/AllCategoryDrop'
import CategoryLAll from '@/containers/category/[categoryName]/categoryLAll'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  const decodeParams = params.categoryName.map((name) => {
    return decodeURI(name)
  })

  return (
    <main>
      <AllCategoryDrop nowData={decodeParams} />

      {decodeParams.length === 1 ? (
        <CategoryLAll />
      ) : (
        <div style={{ wordBreak: 'break-all' }}>카테고리 {decodeParams}</div>
      )}
    </main>
  )
}
