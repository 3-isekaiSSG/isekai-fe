import { IoWarningOutline } from 'react-icons/io5'
import Subject from './Subject'

export default function ProductDetail({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  itemCode,
}: {
  type: 'products' | 'bundles'
  itemCode: number
}) {
  return (
    <>
      <Subject title="상세정보" />
      <div className="mt-5 px-4">
        <p className="text-sm tracking-[-0.3px] text-[color:var(--m-colors-gray600)] leading-[17px] mt-1">
          상품번호: {itemCode}
        </p>
        <div className="relative flex flex-wrap items-center mt-5">
          <IoWarningOutline />
          신고하기
        </div>
      </div>
      <div>상세정보 + 펼쳐보기</div>
    </>
  )
}
