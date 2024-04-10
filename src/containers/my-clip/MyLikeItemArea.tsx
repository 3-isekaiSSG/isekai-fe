'use client'

import { useState } from 'react'
import MyLikeFilter from './MyLikeFilter'
import MyLikeItemEdit from './MyLikeItemEdit'
import MyLikeItemInfo from './MyLikeItemInfo'
import MyLikeItemList from './MyLikeItemList'
import Pagination from './Pagination'
import style from './mylike.module.css'

export default function MyLikeItems() {
  const [btnDefault, setBtnDefault] = useState<boolean>(false)

  return (
    <>
      <MyLikeFilter />
      <div className={style.mylike_cmitem_wrap}>
        {/* 상품이 하나도 없으면 아래 컴포넌트 + 추천 상품 리스트 출력 */}
        {/* <div className={style.mylike_cmitem_none}>
          아직 좋아요한 상품이 없습니다.
        </div> */}
        {/* 상품이 하나라도 있으면 아래 컴포넌트 + 버튼 */}
        <div className={style.mylike_cmitem_modify}>
          {!btnDefault ? (
            <MyLikeItemInfo setBtnDefault={setBtnDefault} />
          ) : (
            <MyLikeItemEdit setBtnDefault={setBtnDefault} />
          )}
        </div>
        <MyLikeItemList />
        <Pagination />
        {btnDefault && (
          <div className="fixed w-full z-[1000] bottom-0">
            <button
              type="button"
              className="bg-[var(--m-colors-secondary)] w-1/2 bottom-0 flex-1 h-12 text-white text-lg"
            >
              폴더에 추가
            </button>
            {/* 삭제 버튼 눌렀을 때 선택된 상품 있으면, 정말 삭제하시겠습니다 Alert */}
            {/* 삭제 성공 후, Success 모달 한 번 더 */}
            {/* 삭제 버튼 누르면 토스터 삭제할 상품을 선택해주세요. */}
            <button
              type="button"
              className="bg-[var(--m-colors-primary)] w-1/2 bottom-0 flex-1 h-12 text-white text-lg"
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </>
  )
}
