import Link from 'next/link'
import style from '@/containers/login/login.module.css'
import LoginAdBtn from './LoginAdBtn'

export default async function NonArea({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  return (
    <div className={`${style.cmem_nomemarea} ${style.notranslate}`}>
      <LoginAdBtn />
      {searchParams ? (
        <Link href="/non-login" className={style.cmem_nomem_btn}>
          <span>비회원 조회하기</span>
        </Link>
      ) : (
        <Link href="/non-order" className={style.cmem_nomem_btn}>
          <span>비회원 주문하기</span>
        </Link>
      )}
    </div>
  )
}
