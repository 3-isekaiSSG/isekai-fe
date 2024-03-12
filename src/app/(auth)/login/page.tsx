/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import LoginForm from '@/components/forms/LoginForm'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className="mcom_tit_renew">
        <h2 className="mcom_tit_txt">
          <Link href="/">로그인</Link>
        </h2>
        <div className="mcom_tit_lft">
          <Link href="javascript:history.back();" />
        </div>
      </div>
      <div className="cmem_ct_login v2">
        <fieldset>
          <div>
            <span className="cmem_inp_txt2">
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
            </span>
            <span>
              <input
                type="password"
                id="inp_pw"
                name="password"
                placeholder="비밀번호"
              />
            </span>
          </div>
          <div className="cmem_login_chk">
            <span className="cmem_inp_chk type3">
              <input
                type="checkbox"
                id="keep_id"
                name="chk_log"
                value="Y"
                checked
                data-gtm-form-interact-field-id="0"
              />
              <span>아이디 저장</span>
            </span>
          </div>
          <div className="cmem_btn_area">
            <button
              type="submit"
              className="cmem_btn cmem_btn_orange3"
              onClick={LoginForm}
            >
              로그인
            </button>
          </div>
          <div className="cmem_login_support">
            <Link href="/">아이디 찾기</Link>
            <Link href="/">비밀번호 찾기</Link>
            <Link href="/">회원가입</Link>
          </div>
        </fieldset>
      </div>
    </div>
  )
}
