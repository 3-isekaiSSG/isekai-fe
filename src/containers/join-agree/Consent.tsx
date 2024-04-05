'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import style from '@/components/Join/join.module.css'

interface CheckFlagType {
  [key: string]: boolean
}

interface ConsentType {
  id: number
  content: string
  href: string
}

export default function Consent() {
  const router = useRouter()
  const name = useSearchParams().get('name')
  const phone = useSearchParams().get('phone')

  const pointConsentList: ConsentType[] = [
    {
      id: 2,
      content: '(필수) 신세계포인트 회원 이용약관',
      href: 'https://member.shinsegaepoint.com/shinsegaepoint/group/stplat/terms',
    },
    {
      id: 3,
      content: '(필수) 개인정보 수집 및 이용 동의',
      href: 'https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms01',
    },
    {
      id: 4,
      content:
        '(필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용 동의',
      href: 'https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms02',
    },
    {
      id: 5,
      content: '(필수) 통합회원 서비스 제공을 위한 개인정보 제3자 제공 동의',
      href: 'https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms06',
    },
  ]

  const ssgConsentList: ConsentType[] = [
    {
      id: 6,
      content: '(필수) SSG.COM 회원 이용약관',
      href: 'https://member.ssg.com/policies/termPopup.ssg?mbrOperScrnId=M100001',
    },
    {
      id: 7,
      content: '(필수) 개인정보 수집 및 이용 동의',
      href: 'https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom01',
    },
  ]

  const [checkAll, setCheckAll] = useState(false)
  const [checkFlag, setCheckFlag] = useState<CheckFlagType>({
    ssgterms02: false,
    ssgterms03: false,
    ssgterms04: false,
    ssgterms05: false,
    ssgterms06: false,
    ssgterms07: false,
  })

  const sendParams = () => {
    router.push(`/join-form?name=${name}&phone=${phone}`)
  }

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckFlag(() => ({
      ssgterms02: e.target.checked,
      ssgterms03: e.target.checked,
      ssgterms04: e.target.checked,
      ssgterms05: e.target.checked,
      ssgterms06: e.target.checked,
      ssgterms07: e.target.checked,
    }))

    setCheckAll(e.target.checked)
  }

  return (
    <div className={`${style.cmem_ct_join} ${style.cmem_cont}`}>
      <div className={style.cmem_row}>
        <div className={style.cmem_term_box}>
          <span className={`${style.cmem_inp_chk} ${style.ty_tit}`}>
            <label htmlFor="checkAll">약관 전체 동의</label>
            <input
              type="checkbox"
              id="checkAll"
              name="checkAll"
              checked={checkAll}
              onChange={handleCheckAll}
            />
          </span>
        </div>
        <div className={`${style.cmem_terms} ${style.ty_sub}`}>
          <div className={style.cmem_term_tit}>
            <h4>신세계포인트</h4>
          </div>
          {pointConsentList.map((item) => (
            <div key={item.id} className={style.cmem_term_box}>
              <span className={style.cmem_inp_chk}>
                <label htmlFor={`ssgterms0${item.id}`}>{item.content}</label>
                <input
                  type="checkbox"
                  id={`ssgterms0${item.id}`}
                  name={`ssgterms0${item.id}`}
                  checked={checkFlag[`ssgterms0${item.id}`]}
                  onChange={(e) => {
                    setCheckFlag((prevState) => ({
                      ...prevState,
                      [`ssgterms0${item.id}`]: e.target.checked,
                    }))
                  }}
                />
              </span>
              <Link
                href={item.href}
                target="_blank"
                className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                title="새창 열림"
              >
                내용 보기
              </Link>
            </div>
          ))}
          <div className={style.cmem_term_tit}>
            <h4>SSG.COM</h4>
          </div>
          {ssgConsentList.map((item) => (
            <div key={item.id} className={style.cmem_term_box}>
              <span className={style.cmem_inp_chk}>
                <label htmlFor={`ssgterms0${item.id}`}>{item.content}</label>
                <input
                  type="checkbox"
                  id={`ssgterms0${item.id}`}
                  name={`ssgterms0${item.id}`}
                  checked={checkFlag[`ssgterms0${item.id}`]}
                  onChange={(e) => {
                    setCheckFlag((prevState) => ({
                      ...prevState,
                      [`ssgterms0${item.id}`]: e.target.checked,
                    }))
                  }}
                />
              </span>
              <Link
                href={item.href}
                target="_blank"
                className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                title="새창 열림"
              >
                내용 보기
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={style.cmem_btn_area}>
        <button
          type="button"
          onClick={sendParams}
          className={`${style.cmem_btn} ${style.cmem_btn_orange2}`}
        >
          다음
        </button>
      </div>
    </div>
  )
}
