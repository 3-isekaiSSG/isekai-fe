'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { JoinState } from '@/states/authAtom'
import style from './header.module.css'
import { HeaderList } from './state'

export default function Header() {
  const router = useRouter()
  const [flag, setFlag] = useRecoilState(JoinState)
  const closeModal = useSetRecoilState(JoinState)

  const close = () => {
    setFlag(flag)
    return flag ? closeModal(false) : router.back()
  }

  const pathname = usePathname()
  const [title, setTitle] = useState('')

  useEffect(() => {
    HeaderList.forEach((element) => {
      if (element.path === pathname) {
        setTitle(element.title)
      }
    })
  })

  return (
    <div className={style.mcom_tit_renew}>
      <h2 className={style.mcom_tit_txt}>
        <span>{title}</span>
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
