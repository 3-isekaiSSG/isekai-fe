'use client'

import { useState } from 'react'
import style from './mylike.module.css'

export default function MyLikeFolder() {
  const [checkAll, setCheckAll] = useState<boolean>(true)

  return (
    <div className={style.mylike_folder}>
      <div className={style.mylike_folder_slider}>
        <ul className={style.mylike_folder_list}>
          <li className={style.mylike_folder_item}>
            <button
              className={`${style.mylike_folder_btn} ${style.ty_all} ${style.clickable} ${checkAll ? style.on : ''}`}
              type="button"
              onClick={() => {
                setCheckAll(true)
              }}
            >
              <span
                className={`${style.mylike_folder_thmb} ${checkAll ? 'before:bg-[var(--m-colors-primary)]' : 'before:bg-[--m-colors-gray300]'}`}
              />
              <em className={`${style.mylike_folder_name} not-italic`}>
                전체보기
              </em>
            </button>
          </li>
          <li className={style.mylike_folder_item}>
            <button
              className={`${style.mylike_folder_btn} ${style.ty_create} ${style.clickable}`}
              type="button"
            >
              <span className={style.mylike_folder_thmb} />
              <em className={`${style.mylike_folder_name} not-italic`}>
                새폴더
              </em>
            </button>
          </li>
          <li className={style.mylike_folder_item}>
            <button
              className={`${style.mylike_folder_btn} ${style.ty_manage} ${style.clickable}`}
              type="button"
            >
              <span className={style.mylike_folder_thmb} />
              <em className={`${style.mylike_folder_name} not-italic`}>
                폴더관리
              </em>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
