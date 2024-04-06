'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from './reset.module.css'

export default function ResetForm() {
  const params = useSearchParams().get('result')

  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')

  const [alert, setAlert] = useRecoilState(AlertState)

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value)
  }

  const handlePwd2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd2(e.target.value)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/

    if (!pwd) {
      return showAlert('비밀번호를 입력해주세요.')
    }
    if (pwd.length < 8 || pwd.length > 20) {
      return showAlert('비밀번호는 8~20자로 입력해주세요.')
    }
    if (!regex.test(pwd)) {
      return showAlert('비밀번호는 영어와 숫자를 조합하여 입력해주세요.')
    }
    if (!pwd2) {
      return showAlert('비밀번호 확인을 입력해주세요.')
    }
    if (pwd !== pwd2) {
      return showAlert(
        '입력하신 비밀번호가 일치하지 않습니다.\n비밀번호를 다시 입력해주세요.',
      )
    }

    await fetch(`${process.env.NEXT_PUBLIC_API}/members/info/password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accountId: params,
        newPassword: pwd,
      }),
    })

    return null
  }

  return (
    <form id="changePwdForm" onSubmit={onSubmit}>
      <dl className={style.cmem_dl} role="presentation">
        <dt className={style.cmem_dt}>
          <span className={style.cmem_dt_tit}>
            <label htmlFor="password">비밀번호</label>
          </span>
        </dt>
        <dd className={style.cmem_dd}>
          <span className={style.cmem_inp_txt2}>
            <input
              type="password"
              name="newPwd"
              id="password"
              value={pwd}
              onChange={handlePwd}
              title="새로 설정할 비밀번호를 입력해주세요."
              placeholder="숫자, 영어 조합으로 8~20자리 입력해주세요."
            />
          </span>
        </dd>
      </dl>
      <dl className={style.cmem_dl} role="presentation">
        <dt className={style.cmem_dt}>
          <span className={style.cmem_dt_tit}>
            <label htmlFor="password_confirm">비밀번호 확인</label>
          </span>
        </dt>
        <dd className={style.cmem_dd}>
          <span className={style.cmem_inp_txt2}>
            <input
              type="password"
              value={pwd2}
              onChange={handlePwd2}
              title="새로 설정할 비밀번호를 재입력해주세요."
              placeholder="비밀번호를 한 번 더 입력해주세요."
            />
          </span>
        </dd>
      </dl>
      <div className="mt-5 mb-10">
        <button
          type="submit"
          id="btn_change"
          className={`w-full block box-border text-center text-base font-['Pretendard'] ${style.cmem_btn_orange2}`}
        >
          확인
        </button>
      </div>
      <div>
        <Alert isOpen={alert.isOpen} close={closeAlert}>
          {alert.message}
        </Alert>
      </div>
    </form>
  )
}
