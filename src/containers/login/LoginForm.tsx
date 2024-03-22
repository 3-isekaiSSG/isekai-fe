'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import style from '@/containers/login/login.module.css'

export default function LoginForm() {
  const [payload, setPayload] = useState({
    loginId: '',
    password: '',
  })

  const [idInput, setIdInput] = useState(false)
  const [pwInput, setPwInput] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      loginId: e.target.value,
    }))

    setIdInput(e.target.value !== '')
  }

  const handlePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      password: e.target.value,
    }))

    setPwInput(e.target.value !== '')
  }

  async function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!payload.loginId) {
      return <Link href="/" />
    }
    if (!payload.password) {
      return alert('비밀번호를 입력해주세요.')
    }

    e.preventDefault()

    const res = await signIn('credentials', {
      loginId: payload.loginId,
      password: payload.password,
      redirect: true,
      callbackUrl: '/login',
    })

    if (!res) {
      return alert(
        '아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인하신 후 입력해주세요.',
      )
    }

    return console.log(payload)
  }

  return (
    <div className={style.cmem_login_form}>
      <form id="login_form" onSubmit={loginSubmit}>
        <fieldset>
          <div className={style.cmem_inp_area}>
            <span
              className={`${style.cmem_inp_txt2} ${idInput ? style.writing : ''}`}
            >
              <input
                type="text"
                placeholder="아이디"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                maxLength={50}
                value={payload.loginId}
                onFocus={handleIdInput}
                onChange={handleIdInput}
              />
              <button
                type="button"
                className={style.inp_clear}
                onClick={() => {
                  setPayload(() => ({
                    ...payload,
                    loginId: '',
                  }))
                  setIdInput(false)
                }}
                aria-label="ID 지우기"
              >
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                />
              </button>
            </span>
            <span
              className={`${style.cmem_inp_txt2} ${pwInput ? style.writing : ''}`}
            >
              <input
                type="password"
                value={payload.password}
                onFocus={handlePwInput}
                onChange={handlePwInput}
                placeholder="비밀번호"
              />
              <button
                type="button"
                className={style.inp_clear}
                onClick={() => {
                  setPayload(() => ({
                    ...payload,
                    password: '',
                  }))
                  setPwInput(false)
                }}
                aria-label="PWD 지우기"
              >
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                />
              </button>
            </span>
          </div>
          <div className={style.cmem_login_chk}>
            <span className={`${style.cmem_inp_chk} ${style.type3}`}>
              <input
                type="checkbox"
                id="keep_id"
                name="chk_log"
                value="Y"
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked)
                }}
              />
              <span className="text-sm leading-[22px] text-[#222]">
                아이디 저장
              </span>
            </span>
          </div>
          <div className="mt-[30px]">
            <button
              type="submit"
              className={`mt-5 text-base h-[50px] border border-[color:var(--m-colors-primary,#ff5452)] bg-[#ff5452] text-white leading-[50px] border-solid ${style.cmem_btn}`}
              id="loginBtn"
            >
              로그인
            </button>
          </div>
          <div className={style.cmem_login_support}>
            {/* 아이디 찾기 / 비밀번호 찾기는 탭 상태로 넘겨줘야 하나 */}
            <Link href="/find-id-pw">아이디 찾기</Link>
            <Link href="/find-id-pw">비밀번호 찾기</Link>
            <Link href="/join-intro">회원가입</Link>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
