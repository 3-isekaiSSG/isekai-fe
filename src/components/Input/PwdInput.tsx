'use client'

import { useState } from 'react'
import style from '@/containers/join-auth/join.module.css'

export default function PwdInput() {
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')

  const [pwdInput, setPwdInput] = useState(false)
  const [pwd2Input, setPwd2Input] = useState(false)

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value)
    setPwdInput(e.target.value !== '')
  }

  const handlePwd2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd2(e.target.value)
    setPwd2Input(e.target.value !== '')
  }

  return (
    <div className={style.cmem_row}>
      <dl className={style.cmem_ip}>
        <dt>
          <span className={style.cmem_require}>
            <span className={style.star} aria-hidden="true">
              *
            </span>
          </span>
          비밀번호
        </dt>
        <dd>
          <div
            className={`${style.cmem_inp_txt} ${pwdInput ? style.writing : ''}`}
          >
            <label htmlFor="pwd" className={style.blind}>
              비밀번호
            </label>
            <input
              type="password"
              maxLength={20}
              placeholder="영문, 숫자 조합 8~20자리"
              autoComplete="off"
              value={pwd}
              onChange={handlePwd}
            />
            <button
              type="button"
              className={style.inp_clear}
              aria-label="입력내용 삭제"
              onClick={() => {
                setPwd('')
                setPwdInput(false)
              }}
            >
              <span className={style.cmem_ico_clear} />
            </button>
          </div>
          <div
            className={`${style.cmem_inp_txt} ${pwd2Input ? style.writing : ''}`}
          >
            <label htmlFor="pwd2" className={style.blind}>
              비밀번호 재확인
            </label>
            <input
              type="password"
              placeholder="비밀번호 재확인"
              autoComplete="off"
              value={pwd2}
              onChange={handlePwd2}
            />
            <button
              type="button"
              className={style.inp_clear}
              aria-label="입력내용 삭제"
              onClick={() => {
                setPwd2('')
                setPwd2Input(false)
              }}
            >
              <span className={style.cmem_ico_clear} />
            </button>
          </div>
        </dd>
      </dl>
    </div>
  )
}
