'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/containers/login/login.module.css'
import { saveId, getId, saveCheckbox, getCheckbox } from '@/utils/localStorage'

// 쿠키는 보안 측면에서 우수한 기능은 아니다.
export default function LoginForm() {
  const [payload, setPayload] = useState({
    loginId: '',
    password: '',
  })

  const [idInput, setIdInput] = useState(false)
  const [pwInput, setPwInput] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const [alert, setAlert] = useRecoilState(AlertState)

  const router = useRouter()

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  /** Id 입력 있을 때마다 업데이트 */
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
    e.preventDefault()
    if (isChecked) {
      saveId(payload.loginId)
      saveCheckbox(isChecked)
    }
    if (!payload.loginId) {
      return showAlert('아이디 또는 이메일 주소를 입력해주세요.')
    }
    if (!payload.password) {
      return showAlert('비밀번호를 입력해주세요.')
    }

    const res = await signIn('credentials', {
      loginId: payload.loginId,
      password: payload.password,
      redirect: true,
      callbackUrl: `${router.back()}`,
    })

    return console.log(res)
  }

  useEffect(() => {
    const id = getId()
    const checkbox = getCheckbox()

    if (id) {
      setPayload(() => ({
        ...payload,
        loginId: id,
      }))
    }

    if (checkbox !== null) {
      setIsChecked(checkbox)
    }
  }, [payload])

  return (
    <div className={style.cmem_login_form}>
      <form id="login_form" onSubmit={loginSubmit}>
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
      </form>
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
      <div className={style.cmem_login_support}>
        {/* 아이디 찾기 / 비밀번호 찾기는 탭 상태로 넘겨줘야 하나 */}
        <Link href="/find-idpw">아이디 찾기</Link>
        <Link href="/find-idpw">비밀번호 찾기</Link>
        <Link href="/join-intro">회원가입</Link>
      </div>
    </div>
  )
}
