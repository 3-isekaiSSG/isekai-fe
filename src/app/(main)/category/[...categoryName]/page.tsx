export default function page({
  params,
}: {
  params: { categoryName: string[] }
}) {
  const decodeParams = params.categoryName.map((name) => {
    return decodeURI(name)
  })

  return <div style={{ wordBreak: 'break-all' }}>카테고리 {decodeParams}</div>
}
