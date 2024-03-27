'use client'

import { useRouter } from 'next/navigation'
import { JoinState } from '@/states/joinAtom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { GoArrowLeft } from 'react-icons/go'
import style from './header.module.css'

export default function Header() {
  const router = useRouter()
  const [flag, setFlag] = useRecoilState(JoinState)
  const closeModal = useSetRecoilState(JoinState)

  const close = () => {
    setFlag(flag)
    return flag ? closeModal(false) : router.back()
  }

  return (
    <div className={style.mcom_tit_renew}>
      <h2 className={style.mcom_tit_txt}>
        <span>로그인</span>
      </h2>
      <div className={style.mcom_tit_lft}>
        <button
          type="button"
          onClick={close}
          className={style.btn_back}
          aria-label="뒤로가기"
        >
          <GoArrowLeft className="inline-block w-7 h-7 align-middle" />
        </button>
      </div>
    </div>
  )
}
