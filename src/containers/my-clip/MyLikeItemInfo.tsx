'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { CiCircleQuestion } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { useResetRecoilState } from 'recoil'
import { favoriteDelCnt, favoriteDelState } from '@/states/likeAtom'
import style from './mylike.module.css'

interface PropFunction {
  setBtnDefault: Dispatch<SetStateAction<boolean>>
}

export default function MyLikeItemInfo({ setBtnDefault }: PropFunction) {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const resetSelect = useResetRecoilState(favoriteDelState)
  const resetSelectCnt = useResetRecoilState(favoriteDelCnt)

  const handleClick = async () => {
    resetSelect()
    resetSelectCnt()
    setBtnDefault((prevState) => !prevState)
  }

  return (
    <>
      <div className={`${style.mylike_infos_tooltip} ${style.mylike_tooltip}`}>
        <button
          type="button"
          className={`${style.mylike_tooltip_btn_open} ${style.js_btn_tooltip_open}`}
          onClick={() => {
            setOpenModal(!openModal)
          }}
        >
          <span className={`${style.mylike_btn_tx} text-sm mr-[3px]`}>
            상품 안내
          </span>
          <CiCircleQuestion />
        </button>
        {openModal && (
          <div
            className={`${style.mylike_tooltip_cont} ${style.myssgcm_tooltip_withdraw} block translate-x-[15px] translate-y-[265px] text-sm`}
          >
            <div className={style.mylike_tooltip_content}>
              <ul className={style.mylike_tooltip_list}>
                <li className={style.mylike_tooltip_item}>
                  좋아요에 담긴 상품은 최대 5년 보관합니다.
                </li>
                <li className={style.mylike_tooltip_item}>
                  표기되는 항공/호텔 상품 요금 정보는 클립 시점 기준이며, 현재
                  기준 요금과 상이할 수 있습니다.
                </li>
              </ul>
              <IoMdClose
                className={`${style.mylike_tooltip_btn_close} w-5 h-5 text-white`}
                onClick={() => {
                  setOpenModal(false)
                }}
              >
                <span className={style.mylike_btn_tx}>
                  <span className={style.blind}>
                    좋아요 상품 안내 툴팁 닫기
                  </span>
                </span>
              </IoMdClose>
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        className={`${style.mylike_modify_btn} ${style.clickable}`}
        id="mylikeModify"
        onClick={handleClick}
      >
        편집
      </button>
    </>
  )
}
