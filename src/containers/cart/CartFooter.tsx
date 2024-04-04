export default function CartFooter() {
  return (
    <footer className="bg-[color:var(--m-colors-gray100)] relative pt-5 pb-10 px-4">
      <h3 className="text-[color:var(--m-colors-gray700)] text-base font-bold">
        장바구니 상품안내
      </h3>
      <p className="text-[color:var(--m-colors-gray700)] text-[13px] leading-4 tracking-[-0.3px] mt-2.5 pl-1.5 relative before:bg-[color:var(--m-colors-gray900)] before:content-[''] before:absolute before:w-0.5 before:h-0.5 before:rounded-[50%] before:left-0 before:top-[6px]">
        장바구니에 담은 상품은 최대 150개까지 보관됩니다.
      </p>
    </footer>
  )
}
