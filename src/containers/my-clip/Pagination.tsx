import style from './mylike.module.css'

interface PaginationProps {
  page: number
  setPage: (value: number) => void
}

export default function Pagination({ page, setPage }: PaginationProps) {
  return (
    <div className={style.m_paginate_wrap}>
      <div className={style.m_paginate}>
        <button
          type="button"
          className={style.prev}
          title="이전"
          onClick={() => {
            setPage(page - 1)
          }}
        >
          <span className={style.blind}>[이전]</span>
        </button>
        <strong title="현재위치">{page + 1}</strong>
        <button
          type="button"
          className={style.next}
          title="다음"
          onClick={() => {
            setPage(page + 1)
          }}
        >
          <span className={style.blind}>[다음]</span>
        </button>
      </div>
    </div>
  )
}
