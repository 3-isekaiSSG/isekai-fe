'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import style from '@/containers/join-auth/join.module.css'
import { mrktConsentState } from '@/containers/join-email/./state'

export default function TermsAgree() {
  const [, setMrktConsent] = useRecoilState(mrktConsentState)

  const [isAgreed, setIsAgreed] = useState(false)
  const [email, setEmail] = useState(false)
  const [sms, setSms] = useState(false)

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setIsAgreed(checked)
    setEmail(checked)
    setSms(checked)

    setMrktConsent({
      email: checked,
      sms: checked,
    })
  }

  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>마케팅 정보 수신 동의</h3>
      </div>
      <div className={style.cmem_cont}>
        <div className={style.cmem_row}>
          <div className={style.cmem_term_box}>
            <span className={style.cmem_inp_chk}>
              <input type="checkbox" onChange={handleCheckbox} />
              <span className="text-xs leading-[18px] text-[#222]">
                <strong>(선택) </strong>
                마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의
              </span>
            </span>
            <Link
              href="https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02&t=simple"
              target="_blank"
              className={`${style.cmem_btn} ${style.cmem_btn_blkline2}`}
            >
              내용보기
            </Link>
            <ul className={style.cmem_termlst}>
              <li>
                <span className={style.cmem_inp_chk}>
                  <input
                    type="checkbox"
                    checked={email}
                    disabled={!isAgreed}
                    className={!isAgreed ? 'text-[#bbb]' : ''}
                    onChange={(e) => {
                      setEmail(e.target.checked)
                      setMrktConsent((prevState) => ({
                        ...prevState,
                        email: e.target.checked,
                      }))
                    }}
                  />
                  <span
                    className={`text-xs leading-[18px] ${!isAgreed ? 'text-[#bbb]' : 'text-[#222]'}`}
                  >
                    이메일
                  </span>
                </span>
              </li>
              <li>
                <span className={style.cmem_inp_chk}>
                  <input
                    type="checkbox"
                    checked={sms}
                    disabled={!isAgreed}
                    className={!isAgreed ? 'text-[#bbb]' : ''}
                    onChange={(e) => {
                      setEmail(e.target.checked)
                      setMrktConsent((prevState) => ({
                        ...prevState,
                        sms: e.target.checked,
                      }))
                    }}
                  />
                  <span
                    className={`text-xs leading-[18px] ${!isAgreed ? 'text-[#bbb]' : 'text-[#222]'}`}
                  >
                    문자
                  </span>
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
