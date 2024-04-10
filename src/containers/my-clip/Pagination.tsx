import style from './mylike.module.css'

export default function Pagination() {
  return (
    <div className={style.m_paginate_wrap}>
      <div className={style.m_paginate}>
        <button type="button" className={style.prev} title="이전">
          <span className={style.blind}>[이전]</span>
        </button>
        <strong title="현재위치">1</strong>
        <button type="button" className={style.next} title="다음">
          <span className={style.blind}>[다음]</span>
        </button>
      </div>
    </div>
  )
}
