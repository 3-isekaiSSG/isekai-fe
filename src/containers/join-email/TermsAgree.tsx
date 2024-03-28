'use client'

import Link from 'next/link'
import { useState } from 'react'
import style from '@/containers/join-auth/join.module.css'
import { useRecoilState } from 'recoil'
import { termsAgreeState } from './state'

interface TermType {
  id: number
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
  content: string
  termUrl: string
}

export default function TermsAgree() {
  const [, setTermsAgree] = useRecoilState(termsAgreeState)

  const [flag, setFlag] = useState({
    terms: false,
    privacy: false,
    age: false,
  })

  const TermList: TermType[] = [
    {
      id: 0,
      handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target

        setFlag(() => ({
          ...flag,
          terms: checked,
        }))

        if (Object.values(flag).every(Boolean)) {
          setTermsAgree(true)
        }
      },
      content: 'SSG.COM 회원 이용약관',
      termUrl:
        'https://member.ssg.com/policies/termPopup.ssg?mbrOperScrnId=M100001',
    },
    {
      id: 1,
      handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target

        setFlag(() => ({
          ...flag,
          privacy: checked,
        }))

        if (Object.values(flag).every(Boolean)) {
          setTermsAgree(true)
        }
      },
      content: 'SSG.COM 회원 개인정보 수집 및 이용동의',
      termUrl:
        'https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_email',
    },
    {
      id: 2,
      handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target

        setFlag(() => ({
          ...flag,
          age: checked,
        }))

        if (Object.values(flag).every(Boolean)) {
          setTermsAgree(true)
        }
      },
      content: '만 14세 이상 회원입니다.',
      termUrl: '',
    },
  ]

  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>약관동의</h3>
      </div>
      <div className={style.cmem_cont}>
        {TermList.map((item) => (
          <div key={item.id} className={style.cmem_row}>
            <div className={style.cmem_term_box}>
              <span className={style.cmem_inp_chk}>
                <input
                  type="checkbox"
                  data-terms="Y"
                  onChange={item.handleCheck}
                />
                <span className="text-xs leading-[18px] text-[#222]">
                  (필수) {item.content}
                </span>
              </span>
              {item.termUrl !== '' && (
                <Link
                  href={item.termUrl}
                  target="_blank"
                  className={`${style.cmem_btn} ${style.cmem_btn_blkline2}`}
                >
                  내용 보기
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
