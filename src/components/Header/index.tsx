'use client'

import { useRouter } from 'next/navigation'
import { GoArrowLeft } from 'react-icons/go'
import style from './header.module.css'

export default function Header() {
  const router = useRouter()

  return (
    <div className={style.mcom_tit_renew}>
      <h2 className={style.mcom_tit_txt}>
        {/* 현재 페이지에 따라 헤더가 계속 바껴야 해 */}
        <span>로그인</span>
      </h2>
      <div className={style.mcom_tit_lft}>
        <button
          type="button"
          onClick={() => router.back()}
          className={style.btn_back}
          aria-label="뒤로가기"
        >
          <GoArrowLeft className="inline-block w-7 h-7 align-middle" />
        </button>
      </div>
    </div>
  )
}
