import Link from 'next/link'
import style from '@/components/login.module.css'
import NonForm from '@/components/forms/NonForm'

export default function Page() {
  return (
    <div id="m_content" className={style.cmem_ct_nomem}>
      <NonForm />
      <div className={style.cmem_login_btm}>
        <span className={style.cmem_btm_txt}>
          SSG.COM 회원가입을 하시면 더 많은 혜택을 받으실 수 있습니다.
        </span>
        <Link href="/join-intro" className={style.cmem_btm_btn}>
          <span>회원가입</span>
          <span className={style.cmpop_ico_arr} />
        </Link>
      </div>
    </div>
  )
}
