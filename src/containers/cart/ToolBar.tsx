export default function ToolBar() {
  return (
    <div className="z-[99] fixed w-full h-[52px] bg-[color:var(--m-colors-white)] box-border left-0 bottom-0">
      <div className="flex justify-around h-full -mt-px">
        {/* TODO: 클릭 시 장바구니 전체 | 선택 상품을 가지고 주문 페이지로 이동 */}
        <button
          type="button"
          className="flex-1 bg-[color:var(--m-colors-primary)] text-[color:var(--m-colors-white)] text-[17px] tracking-[-0.3px]"
        >
          주문하기
        </button>
      </div>

      <div className="fixed bottom-[52px]  max-w-screen-sm max-h-[84vh] shadow-[rgba(0,0,0,0.2)_0px_-4px_16px] rounded-t-2xl inset-x-0 bg-[color:var(--m-colors-white)] box-border m-0 p-0 border-[none] backdrop:hidden">
        <div className="relative bg-[color:var(--m-colors-white)] p-4 rounded-[6px_6px_0_0]">
          <p className=" text-[color:var(--m-colors-gray900)] text-sm tracking-[-0.3px] leading-[17px] break-all">
            {/* TODO: 전채 상품 | 선택 상품 갯수, 가격, 배송비, 전체 합 가격 */}
            <span>전체 상품 N개 </span>
            <span>
              {Number(27360).toLocaleString('ko-KR')}원 + 배송비{' '}
              {Number(3000).toLocaleString('ko-KR')}원 ={' '}
            </span>
            <span className="font-bold">
              {Number(27360).toLocaleString('ko-KR')}원
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
