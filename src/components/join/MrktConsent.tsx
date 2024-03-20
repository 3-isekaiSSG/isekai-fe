/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import style from './join.module.css'

export default function TermsAgree() {
  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>마케팅 정보 수신 동의</h3>
      </div>
      <div className={style.cmem_cont}>
        <div className={style.cmem_row}>
          <div className={style.cmem_term_box}>
            <span className={style.cmem_inp_chk}>
              <input
                type="checkbox"
                id="infoRcvAgree"
                name="mbrAddtInfoAgreeDto.agreeYn"
                value="Y"
                data-gtm-form-interact-field-id="2"
              />
              <label
              // for="infoRcvAgree"
              >
                <strong>(선택) </strong>
                마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의
              </label>
            </span>
            <Link
              href="https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02&t=simple"
              // return false;
              title="새창열림"
              className={`${style.cmem_btn} ${style.cmem_btn_blkline2}`}
            >
              내용보기
            </Link>
            <ul className={style.cmem_termlst}>
              <li>
                <span className={style.cmem_inp_chk}>
                  <input
                    type="checkbox"
                    id="email"
                    name="emailRcvYn"
                    value="Y"
                    data-gtm-form-interact-field-id="3"
                    // disabled=""
                  />
                  <label
                  // for="email"
                  >
                    이메일
                  </label>
                </span>
              </li>
              <li>
                <span className={style.cmem_inp_chk}>
                  <input
                    type="checkbox"
                    id="sms"
                    name="smsRcvYn"
                    value="Y"
                    data-gtm-form-interact-field-id="4"
                    // disabled=""
                  />
                  <label
                  // for="sms"
                  >
                    문자
                  </label>
                </span>
              </li>
            </ul>
            <p className={style.cmem_noti}>
              <em>
                마케팅 정보 수신 동의를 하시면 SSG.COM 상품 · 서비스 및 이벤트
                정보를 받으실 수 있습니다.
              </em>
            </p>
          </div>
        </div>
        <div className={style.cmem_row}>
          <p className={style.cmem_noti}>
            <strong>
              선택 항목에 동의하지 않더라도 SSG.COM 회원가입 및 기본 서비스를
              이용하실 수 있습니다.
            </strong>
          </p>
        </div>
      </div>
    </>
  )
}
