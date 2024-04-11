'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/containers/login/login.module.css'
import { saveId, getId, saveCheckbox, getCheckbox } from '@/utils/localStorage'

interface Data {
  accountId: string
  password: string
}

export default function LoginForm() {
  const params = useSearchParams().get('callbackUrl') || '/'

  const [payload, setPayload] = useState<Data>({
    accountId: '',
    password: '',
  })

  const [idInput, setIdInput] = useState<boolean>(false)
  const [pwInput, setPwInput] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const [alert, setAlert] = useRecoilState(AlertState)

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
      accountId: e.target.value,
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

  // eslint-disable-next-line consistent-return
  async function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isChecked) {
      saveId(payload.accountId)
      saveCheckbox(isChecked)
    }
    if (!payload.accountId) {
      return showAlert('아이디 또는 이메일 주소를 입력해주세요.')
    }
    if (!payload.password) {
      return showAlert('비밀번호를 입력해주세요.')
    }

    await signIn('credentials', {
      accountId: payload.accountId,
      password: payload.password,
      redirect: true,
      callbackUrl: params,
    })
  }

  useEffect(() => {
    const id = getId()
    const checkbox = getCheckbox()

    if (id) {
      setPayload(() => ({
        ...payload,
        accountId: id,
      }))
    }

    if (checkbox !== null) {
      setIsChecked(checkbox)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.cmem_login_form}>
      <form id="login_form" onSubmit={loginSubmit}>
        <div className={style.cmem_inp_area}>
          <span
            className={`${style.cmem_inp_txt2} ${idInput ? style.writing : ''}`}
          >
            <label
              htmlFor="id"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              아이디
            </label>
            <input
              type="text"
              placeholder="아이디"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={50}
              value={payload.accountId}
              onFocus={handleIdInput}
              onChange={handleIdInput}
            />
            <button
              type="button"
              className={style.inp_clear}
              onClick={() => {
                setPayload(() => ({
                  ...payload,
                  accountId: '',
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
            <label
              htmlFor="pwd"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              비밀번호
            </label>
            <input
              type="password"
              autoComplete="off"
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
            <label
              htmlFor="keep_id"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              아이디 저장
            </label>
            <input
              type="checkbox"
              id="keep_id"
              value="Y"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
            <span className="text-sm leading-[22px] text-black">
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
        <Link href="/find-idpw?tab=id">아이디 찾기</Link>
        <Link href="/find-idpw?tab=pw">비밀번호 찾기</Link>
        <Link href="/join-intro">회원가입</Link>
      </div>
    </div>
  )
}
