import { useRecoilState, useRecoilValue } from 'recoil'
import { filterState, likeCntState } from '@/states/likeAtom'
import style from './mylike.module.css'

export default function MyLikeFilter() {
  const [filter, setFilter] = useRecoilState(filterState)
  const likeCnt = useRecoilValue(likeCntState)

  return (
    <div className={style.mylike_filter}>
      <div className={style.mylike_filter_hscroll}>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.product ? style.on : ''}`}
          onClick={() => {
            setFilter({
              product: true,
              seller: false,
              category: false,
            })
          }}
        >
          상품 ({likeCnt.product})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.seller ? style.on : ''}`}
          onClick={() => {
            setFilter({
              product: false,
              seller: true,
              category: false,
            })
          }}
        >
          브랜드&스토어 ({likeCnt.seller})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.category ? style.on : ''}`}
          onClick={() => {
            setFilter({
              product: false,
              seller: false,
              category: true,
            })
          }}
        >
          카테고리 ({likeCnt.category})
        </button>
      </div>
    </div>
  )
}
