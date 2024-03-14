/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import style from '@/components/Login/loginheader.module.css'
import back_icon from '../../../public/images/login/Back_Icon.png'

export default function Header() {
  return (
    <div className={style.mcom_tit_renew}>
      <h2 className={style.mcom_tit_txt}>
        <Link href="/">로그인</Link>
      </h2>
      <div className={style.mcom_tit_lft}>
        <Link href="javascript:history.back();" className={style.btn_back}>
          <span className={(style.ctg_icon_back, style.sp_ctg_icon)}>
            <Image src={back_icon} alt="back" />
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
