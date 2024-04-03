import '@/styles/detail.scss'

import Subject from './Subject'

export default function ProductDetail({
  itemCode,
  detailHTML = '',
}: {
  itemCode: number
  detailHTML?: string
}) {
  return (
    <div>
      <Subject title="상세정보" />
      <div className="mt-5 px-4">
        <p className="text-sm tracking-[-0.3px] text-[color:var(--m-colors-gray600)] leading-[17px] mt-1">
          상품번호: {itemCode}
        </p>
      </div>
      {/* max-h-[1800px] */}
      <div className=" overflow-hidden relative bg-[color:var(--m-colors-white)] mt-5">
        <div className=" border-t-[color:var(--m-colors-gray200)] break-keep mx-4 my-0 px-0 py-5 border-t border-solid break-words">
          <div // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: detailHTML }}
          />
          <div>펼쳐보기</div>
        </div>
      </div>
    </div>
  )
}
