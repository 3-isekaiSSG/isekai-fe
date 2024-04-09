'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import style from '@/containers/login/login.module.css'

export default function SocialLoginForm() {
  const params = useSearchParams().get('callbackUrl') || ''
  const kakaoLogin = () => {
    signIn('kakao', {
      redirect: true,
      callbackUrl: `/${params}`,
    })
  }

  return (
    <ul className={style.cmem_sns_login}>
      <li>
        <button type="button">
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_naver}`} />
          </span>
          <span className={style.cmem_sns_name}>네이버</span>
        </button>
      </li>
      <li>
        <button type="button" onClick={kakaoLogin}>
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_kakao}`} />
          </span>
          <span className={style.cmem_sns_name}>카카오</span>
        </button>
      </li>
      <li>
        <button type="button">
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_apple}`} />
          </span>
          <span className={style.cmem_sns_name}>애플</span>
        </button>
      </li>
      <li>
        <button type="button">
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_toss}`} />
          </span>
          <span className={style.cmem_sns_name}>토스</span>
        </button>
      </li>
      <li>
        <button type="button">
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_phone}`} />
          </span>
          <span className={style.cmem_sns_name}>휴대폰</span>
        </button>
      </li>
    </ul>
  )
}
