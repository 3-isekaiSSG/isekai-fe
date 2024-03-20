/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import style from './join.module.css'

export default function TermsAgree() {
  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>약관동의</h3>
      </div>
      <div className={style.cmem_cont}>
        <div className={style.cmem_row}>
          <div className={style.cmem_term_box}>
            <span className={style.cmem_inp_chk}>
              <input type="checkbox" data-terms="Y" />
              <label>(필수) SSG.COM 회원 이용약관</label>
            </span>
            <Link
              href="https://member.ssg.com/policies/termPopup.ssg?mbrOperScrnId=M100001"
              target="_blank"
              className={`${style.cmem_btn} ${style.cmem_btn_blkline2}`}
            >
              내용 보기
            </Link>
          </div>
        </div>
        <div className={style.cmem_row}>
          <div className={style.cmem_term_box}>
            <span className={style.cmem_inp_chk}>
              <input type="checkbox" data-terms="Y" />
              <label>(필수) SSG.COM 회원 개인정보 수집 및 이용동의</label>
            </span>
            <Link
              href="https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_email"
              target="_blank"
              className={`${style.cmem_btn} ${style.cmem_btn_blkline2}`}
            >
              내용 보기
            </Link>
          </div>
        </div>
        <div className={style.cmem_row}>
          <div className={style.cmem_term_box}>
            <span className={style.cmem_inp_chk}>
              <input type="checkbox" data-terms="Y" />
              <label>(필수) 만 14세 이상 회원입니다.</label>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
