/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import style from './header.module.css'

export default function Header() {
  return (
    <div className={style.mcom_tit_renew}>
      <h2 className={style.mcom_tit_txt}>
        {/* 현재 페이지에 따라 헤더가 계속 바껴야 해 */}
        <Link href="/">로그인</Link>
      </h2>
      <div className={style.mcom_tit_lft}>
        <Link href="javascript:history.back();" className={style.btn_back}>
          <span className={`${style.ctg_icon_back} ${style.sp_ctg_icon}`}>
            <span className={style.blind}>이전 페이지</span>
          </span>
        </Link>
      </div>
      <div
        className={style.mcom_tit_rgt}
        data-react-tarea-cd="00041_000000456"
      />
    </div>
  )
}
