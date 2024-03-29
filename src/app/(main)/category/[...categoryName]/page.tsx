import CategoryLAll from '@/containers/category/[categoryName]/CategoryLAll'
import CategoryNameHeader from '@/containers/category/[categoryName]/CategoryNameHeader'

export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  console.log(params)
  return (
    <main className="relative min-h-[50vh]">
      <CategoryNameHeader nowData={params.categoryName} />

      {params.categoryName.length === 1 ? (
        <CategoryLAll largeName={params.categoryName[0]} />
      ) : (
        <div style={{ wordBreak: 'break-all' }}>
          카테고리 {decodeURIComponent(params.categoryName[0])} &
          {params.categoryName[1]}
          <br />
          <br />
          {/* {decodeURI(params.categoryName[1]).replaceAll('%2F', '/')} */}
        </div>
      )}
    </main>
  )
}
