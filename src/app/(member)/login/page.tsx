/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import Image from 'next/image'
import naver from '@/../public/images/login/Naver.png'
import kakao from '@/../public/images/login/Kakao.png'
import apple from '@/../public/images/login/Apple.png'
import toss from '@/../public/images/login/Toss.png'
import phone from '@/../public/images/login/Phone.png'
import style from './login.module.css'

export default function Page() {
  return (
    <div className={`${style.cmem_ct_login} ${style.v2}`}>
      <div className="cmem_login_form">
        <form>
          <fieldset>
            <legend className={style.legend_css}>로그인</legend>
            <div className="cmem_inp_area">
              <span className={style.cmem_inp_txt2}>
                <label className="cursor-default">
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
                  <span className={(style.sp_cmem_login, style.cmem_ico_clear)}>
                    <span className={style.blind}>입력 내용 삭제</span>
                  </span>
                </button>
              </span>
              <span className={style.cmem_inp_txt2}>
                <label className="cursor-default">
                  <span className={style.blind}>비밀번호</span>
                </label>
                <input
                  type="password"
                  id="inp_pw"
                  name="password"
                  placeholder="비밀번호"
                />
                <button type="button" className={style.inp_clear}>
                  <span className={(style.sp_cmem_login, style.cmem_ico_clear)}>
                    <span className={style.blind}>입력 내용 삭제</span>
                  </span>
                </button>
              </span>
            </div>
            <div className={style.cmem_login_chk}>
              <span className={(style.cmem_inp_chk, style.type3)}>
                <input
                  type="checkbox"
                  id="keep_id"
                  name="chk_log"
                  value="Y"
                  checked
                  data-gtm-form-interact-field-id="0"
                />
                <label>아이디 저장</label>
              </span>
            </div>
            <div className={style.cmem_btn_area}>
              <button
                type="submit"
                // css 2개 이상 적용하는 방법
                className={style.cmem_btn_orange3}
                // 로그인 버튼 누를 경우 유효성 체크 실시
                // onClick={isValid}
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
        <li className="list-item">
          <Link href="/">
            <span>
              <Image
                className={style.cmem_ico}
                src={naver}
                alt="네이버"
                width={51}
                height={51}
              />
            </span>
            <span className={style.cmem_sns_name}>네이버</span>
          </Link>
        </li>
        <li className="list-item">
          <Link href="/">
            <span>
              <Image
                className={style.cmem_ico}
                src={kakao}
                alt="카카오"
                width={51}
                height={51}
              />
            </span>
            <span className={style.cmem_sns_name}>카카오</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                className={style.cmem_ico}
                src={apple}
                alt="애플"
                width={51}
                height={51}
              />
            </span>
            <span className={style.cmem_sns_name}>애플</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                className={style.cmem_ico}
                src={toss}
                alt="토스"
                width={51}
                height={51}
              />
            </span>
            <span className={style.cmem_sns_name}>토스</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                className={style.cmem_ico}
                src={phone}
                alt="휴대폰"
                width={51}
                height={51}
              />
            </span>
            <span className={style.cmem_sns_name}>휴대폰</span>
          </Link>
        </li>
      </ul>
      <div className={style.cmem_nomemarea}>
        <div
          className={`${style.cmem_btn_area} ${style.ty2}`}
          data-reactingv2-key="00201_000000801|t00000|1"
        >
          <span className={style.cmem_btn_ad}>AD</span>
          <button
            type="submit"
            className={`${style.cmem_btn} ${style.cmem_btn_phone}`}
            data-reactingv2-key="00201_000000801|t00060|1"
          >
            휴대폰 간편 로그인
            <span className={style.adver}>광고</span>
          </button>
        </div>
        <Link href="/">
          <span className={style.cmem_nomem_btn}>비회원 조회하기</span>
        </Link>
      </div>
    </div>
  )
}
