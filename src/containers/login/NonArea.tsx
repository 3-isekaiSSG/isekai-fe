import Link from 'next/link'
import style from '@/containers/login/login.module.css'
import LoginAdBtn from './LoginAdBtn'

export default function NonArea() {
  return (
    <div className={`${style.cmem_nomemarea} ${style.notranslate}`}>
      <LoginAdBtn />
      <Link href="/non-login" className={style.cmem_nomem_btn}>
        <span>비회원 조회하기</span>
      </Link>
      {/* <Link href="/" className={style.cmem_nomem_btn}>
        <span>비회원 주문하기</span>
      </Link> */}
    </div>
  )
}
