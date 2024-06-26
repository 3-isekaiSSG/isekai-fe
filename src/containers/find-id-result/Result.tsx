'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import style from './result.module.css'

export default function Result() {
  const userId = useSearchParams().get('result')

  return (
    <div className={style.m_resbx}>
      <ul className={style.m_result_list}>
        <li>
          <p className={style.res_top}>고객님께서 가입하신 아이디입니다.</p>
          <p className={`${style.res_bx} text-sm`}>
            아이디<span className={style.txt}>{userId}</span>
          </p>
        </li>
      </ul>
      <ul className={style.bnbox}>
        <li>
          <Link href={`/pw-reset?result=${userId}`} className={style.bn_gray}>
            비밀번호 재설정
          </Link>
        </li>
        <li>
          <Link href="/login" className={style.bn_pnk}>
            로그인
          </Link>
        </li>
      </ul>
    </div>
  )
}
