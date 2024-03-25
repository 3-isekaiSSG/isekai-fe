'use client'

import Link from 'next/link'
import { useState } from 'react'
import style from '@/containers/join-auth/join.module.css'

export default function TermsAgree() {
  const [flag, setFlag] = useState({
    terms: false,
    privacy: false,
    age: false,
  })

  const handleTerms = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target

    setFlag((prev) => ({
      ...prev,
      terms: checked,
    }))
  }

  const handlePrivacy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target

    setFlag((prev) => ({
      ...prev,
      privacy: checked,
    }))
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target

    setFlag((prev) => ({
      ...prev,
      age: checked,
    }))
  }

  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>약관동의</h3>
      </div>
      <div className={style.cmem_cont}>
        <div className={style.cmem_row}>
          <div className={style.cmem_term_box}>
            <span className={style.cmem_inp_chk}>
              <input
                type="checkbox"
                data-terms="Y"
                value="terms"
                checked={flag.terms}
                onChange={handleTerms}
              />
              <span className="text-sm leading-[18px] text-[#222]">
                (필수) SSG.COM 회원 이용약관
              </span>
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
              <input
                type="checkbox"
                data-terms="Y"
                value=""
                checked={flag.privacy}
                onChange={handlePrivacy}
              />
              <span className="text-sm leading-[18px] text-[#222]">
                (필수) SSG.COM 회원 개인정보 수집 및 이용동의
              </span>
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
              <input
                type="checkbox"
                data-terms="Y"
                value=""
                checked={flag.age}
                onChange={handleAge}
              />
              <span className="text-sm leading-[18px] text-[#222]">
                (필수) 만 14세 이상 회원입니다.
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
