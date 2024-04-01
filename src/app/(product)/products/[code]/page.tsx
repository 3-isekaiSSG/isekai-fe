export default function Page({ params }: { params: { code: number } }) {
  return (
    <div>
      상품상품
      {params.code}
    </div>
  )
}
