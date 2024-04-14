import { Dispatch, SetStateAction } from 'react'
import style from './mylike.module.css'

interface PropFunction {
  setBtnDefault: Dispatch<SetStateAction<boolean>>
  cnt: number
}

export default function MyLikeListEdit({ setBtnDefault, cnt }: PropFunction) {
  return (
    <>
      <div className={style.mylike_modify_count}>
        <div className={style.cmitem_chk}>
          <input type="checkbox" id="c_all" />
          <label htmlFor="c_all" className={style.blind}>
            전체 상품
          </label>
        </div>
        <span id="countLike">
          <em className="not-italic" id="clip-chk-cnt">
            {0}
          </em>{' '}
          / {cnt}
        </span>
      </div>
      <button
        type="button"
        className="text-black text-[13px] tracking-[-0.28px] h-[30px] rounded px-2.5 py-0 border border-[var(--m-colors-gray300)]"
        id="mylikeModify"
        onClick={() => {
          setBtnDefault((prevState) => !prevState)
        }}
      >
        취소
      </button>
    </>
  )
}
