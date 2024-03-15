/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import style from '@/components/login.module.css'

export default function Login() {
  return (
    <div id="m_content" className={`${style.cmem_ct_login} ${style.v2}`}>
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
      <ul className={style.cmem_sns_login}>
        <li>
          <Link
            href="/"
            // onClick="snsLogin.naver('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
            // name="snsLogin"
          >
            <span className={style.ico_area}>
              <span
                className={`${style.sp_cmem_sns} ${style.cmem_ico_naver}`}
              />
            </span>
            <span className={style.cmem_sns_name}>네이버</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            // onClick="snsLogin.kakao('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
            // name="snsLogin"
          >
            <span className={style.ico_area}>
              <span
                className={`${style.sp_cmem_sns} ${style.cmem_ico_kakao}`}
              />
            </span>
            <span className={style.cmem_sns_name}>카카오</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            // onClick="snsLogin.apple('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
            // name="snsLogin"
          >
            <span className={style.ico_area}>
              <span
                className={`${style.sp_cmem_sns} ${style.cmem_ico_apple}`}
              />
            </span>
            <span className={style.cmem_sns_name}>애플</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            // onClick="snsLogin.toss('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
            // name="snsLogin"
          >
            <span className={style.ico_area}>
              <span className={`${style.sp_cmem_sns} ${style.cmem_ico_toss}`} />
            </span>
            <span className={style.cmem_sns_name}>토스</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            // onClick="snsLogin.toss('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
            // name="snsLogin"
          >
            <span className={style.ico_area}>
              <span
                className={`${style.sp_cmem_sns} ${style.cmem_ico_phone}`}
              />
            </span>
            <span className={style.cmem_sns_name}>휴대폰</span>
          </Link>
        </li>
      </ul>
      <div className={`${style.cmem_nomemarea} ${style.notranslate}`}>
        <div
          className={`${style.cmem_btn_area} ${style.ty2}`}
          // data-reactingv2-key="00201_000000801|t00000|1"
        >
          <span className={style.cmem_btn_ad}>AD</span>
          <button
            type="submit"
            className={`${style.cmem_btn} ${style.cmem_btn_phone}`}
            // onclick="location.href='https://sepay.org/spm/join?regSiteCode=FA&amp;ctgCode=2'"
            // data-reactingv2-key="00201_000000801|t00060|1"
          >
            휴대폰 간편 로그인
            <span className={style.adver}>광고</span>
          </button>
        </div>
        <Link
          href="/m/member/nonMemberLogin.ssg"
          className={style.cmem_nomem_btn}
        >
          <span>비회원 조회하기</span>
        </Link>
      </div>
    </div>
  )
}
