import { Dispatch, SetStateAction } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { favoriteDelCnt, favoriteDelState } from '@/states/likeAtom'
import style from './mylike.module.css'

interface PropFunction {
  setBtnDefault: Dispatch<SetStateAction<boolean>>
  cnt: number
}

export default function MyLikeListEdit({ setBtnDefault, cnt }: PropFunction) {
  const selectedCnt = useRecoilValue(favoriteDelCnt)
  const setDelList = useResetRecoilState(favoriteDelState)

  return (
    <>
      <div className={style.mylike_modify_count}>
        <div className={`${style.cmitem_chk} relative`}>
          <input type="checkbox" id="c_all" className={style.cmitem_chk_inp} />
          <label htmlFor="c_all" className={style.blind}>
            전체 상품
          </label>
        </div>
        <span id="countLike">
          <em className="not-italic" id="clip-chk-cnt">
            {selectedCnt}
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
          setDelList()
        }}
      >
        취소
      </button>
    </>
  )
}
