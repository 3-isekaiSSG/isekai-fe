export default function NoSearchItem({ data }: { data: string }) {
  return (
    <div className="pt-4 pb-4 pl-[15px] pr-[15px] text-sm text-[color:var(--m-colors-black)]">
      <h3 className="font-bold">&apos;{data}&apos; 상품이 없습니다.</h3>
      <p>단어의 철자나 띄어쓰기가 정확한지 확인해보세요</p>
    </div>
  )
}
