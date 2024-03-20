/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

// import { signIn, useSession } from 'next-auth/react'
// import { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '@/components/login.module.css'

export default function LoginForm() {
  // const { data: session } = useSession()

  // const onClick = async (e: React.MouseEvent) => {
  //   e.preventDefault();

  //   if (!session) {
  //     await signIn();
  //   }

  // }

  // useEffect(() => {
  //   console.log(session)
  // })

  // const [payload, setPayload] = useState({
  //   loginId: '',
  //   password: '',
  // })

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if (!payload.loginId)
    //   return alert('아이디 또는 이메일 주소를 입력해주세요.')
    // if (!payload.password) return alert('비밀번호를 입력해주세요.')

    // console.log(payload)
    // const res = async fetch(`${process.env.API_BASE_URL}/auth/login`) signIn('credentials', {
    //   loginId: payload.loginId,
    //   password: payload.password,
    //   redirect: true,
    //   callbackUrl: '/',
    // })

    // if (!res.ok)
    //   return null
    // }
  }

  return (
    <div className={style.cmem_login_form}>
      <form id="login_form" onSubmit={loginSubmit}>
        <fieldset>
          <div className={style.cmem_inp_area}>
            {/* [D] 입력 중일 때 .cmem_inp_txt2에 .writing 클래스 추가, 그 외에는 해당 클래스 제거
              입력완료 시 .cmem_inp_txt2_에 .ok 클래스 추가, 그 외에는 해당 클래스 제거 */}
            <span
              className={style.cmem_inp_txt2}
              // className={style.writing}
            >
              <input
                type="text"
                id="inp_id"
                name="mbrLoginId"
                placeholder="아이디"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                maxLength={50}
              />
              <button type="button" className={style.inp_clear}>
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                >
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
              </button>
            </span>
            <span className={style.cmem_inp_txt2}>
              <input
                type="password"
                id="inp_pw"
                name="password"
                placeholder="비밀번호"
              />
              <button type="button" className={style.inp_clear}>
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                >
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
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
                // checked=""
              />
              <label htmlFor="keep_id">아이디 저장</label>
            </span>
          </div>
          <div className={style.cmem_btn_area}>
            <button
              type="submit"
              className={`${style.cmem_btn} ${style.cmem_btn_orange3}`}
              // onClick="loginModel.login();"
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
