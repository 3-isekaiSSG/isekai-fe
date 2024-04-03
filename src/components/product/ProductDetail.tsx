'use client'

import '@/styles/detail.scss'

import { useState } from 'react'
import Subject from './Subject'

export default function ProductDetail({
  itemCode,
  detailHTML = '',
}: {
  itemCode: number
  detailHTML?: string
}) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <Subject title="상세정보" />
      <div className="mt-5 px-4">
        <p className="text-sm tracking-[-0.3px] text-[color:var(--m-colors-gray600)] leading-[17px] mt-1">
          상품번호: {itemCode}
        </p>
      </div>
      <div
        className={`${!isShow && 'max-h-[1800px]'} overflow-hidden relative bg-[color:var(--m-colors-white)] mt-5 detail`}
      >
        <div className=" border-t-[color:var(--m-colors-gray200)] break-keep mx-4 my-0 px-0 py-5 border-t border-solid break-words">
          <div // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: detailHTML }}
          />
          <div className="absolute z-[2] bottom-0 inset-x-0 before:content-[''] before:absolute before:h-[30px] before:bg-[-webkit-gradient(_linear,left_top,left_bottom,from(rgba(255,255,255,0)),to(#ffffff)_)] before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0),#ffffff)] before:bottom-[50px] before:inset-x-0">
            <button
              type="button"
              onClick={() => setIsShow(!isShow)}
              className="block relative z-[1] w-full h-[50px] bg-[color:var(--m-colors-white)] text-sm leading-[1.29] tracking-[-0.3px] text-[color:var(--m-colors-gray900)] text-center"
            >
              {!isShow ? (
                <span className="pr-1">상세정보 펼쳐보기</span>
              ) : (
                <span className="pr-1">상세정보 접기</span>
              )}
              <i
                className={`inline-block w-2 h-1.5 align-middle mt-[-3px] before:content-[''] before:block before:border-t-[6px] before:border-t-[#222] before:border-x-4 before:border-x-transparent before:border-solid ${isShow && 'rotate-180'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
