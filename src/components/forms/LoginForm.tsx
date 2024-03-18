/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

// import { signIn, signOut, useSession } from 'next-auth/react'
import style from '@/components/login.module.css'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <div className={style.cmem_login_form}>
      <form
        id="login_form"
        // method="post"
        // onSubmit="return false;"
      >
        <fieldset>
          <div className={style.cmem_inp_area}>
            {/* [D] 입력 중일 때 .cmem_inp_txt2에 .writing 클래스 추가, 그 외에는 해당 클래스 제거
              입력완료 시 .cmem_inp_txt2_에 .ok 클래스 추가, 그 외에는 해당 클래스 제거 */}
            <span
              className={style.cmem_inp_txt2}
              // className={style.writing}
            >
              <label
              // htmlFor="inp_id"
              >
                <span className={style.blind}>아이디</span>
              </label>
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
              <label
              // htmlFor="inp_pw"
              >
                <span className={style.blind}>비밀번호</span>
              </label>
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
            <Link href="/">아이디 찾기</Link>
            <Link href="/">비밀번호 찾기</Link>
            <Link href="/">회원가입</Link>
          </div>
        </fieldset>
      </form>
    </div>
  )
  // const { data: session } = useSession()
  // if (session)
  //   return (
  //     <>
  //       <h1>Kakao</h1>

  //       <p
  //         onClick={() => signIn('kakao')}
  //         className="cursor-pointer w-32 h-12 bg-yellow-500 text-white text-center leading-12 rounded-md"
  //       >
  //         kakao login
  //       </p>
  //       <p onClick={() => signOut()}>sign out</p>
  //     </>
  //   )
}
