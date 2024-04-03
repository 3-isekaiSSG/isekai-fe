import style from '@/containers/pw-reset/reset.module.css'

export default function IdSection() {
  return (
    <div className={`${style.cmem_top} ${style.cmem_bg}`}>
      <div className={style.cmem_join_desc}>
        <p className={style.cmem_join_desc_tit}>신세계포인트 통합회원 아이디</p>
      </div>
      <div className={style.cmem_result}>
        <p className={style.cmem_result_txt}>1234</p>
      </div>
    </div>
  )
}
