'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import IdInput from '@/components/Join/IdInput'
import MarketConsent from '@/components/Join/MarketConsent'
import NameInput from '@/components/Join/NameInput'
import PwdInput from '@/components/Join/PwdInput'
import style from '@/components/Join/join.module.css'
import { memberInfoState, termsAgreeState } from '@/components/Join/state'
import PhoneCert from './PhoneCert'
import SocialPhoneCert from './SocialPhoneCert'
import TermsAgree from './TermsAgree'

export default function EasyForm() {
  const termsAgree = useRecoilValue(termsAgreeState)
  const memberInfo = useRecoilValue(memberInfoState)
  // const marketConsent = useRecoilValue(marketConsentState)

  const [alert, setAlert] = useRecoilState(AlertState)
  const [fetched, setFetched] = useState<boolean>(false)

  const router = useRouter()
  const hasEmail = useSearchParams().has('email')
  const email = useSearchParams().get('email')
  const hasId = useSearchParams().has('id')
  const id = useSearchParams().get('id')

  /** 모달 open */
  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }
  /** 모달 close */
  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  // eslint-disable-next-line consistent-return
  const sendData = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!termsAgree) {
      return showAlert('필수 약관에 동의해주세요.')
    }
    if (!hasEmail) {
      if (!memberInfo.accountId) {
        return showAlert('아이디를 입력해주세요.')
      }
      if (!memberInfo.dupCheck) {
        return showAlert('아이디 중복체크를 해주세요.')
      }
      if (!memberInfo.password) {
        return showAlert('비밀번호를 입력해주세요.')
      }
      if (memberInfo.password !== memberInfo.pwd2) {
        return showAlert('비밀번호가 일치하지 않습니다.')
      }
    }
    if (!memberInfo.name) {
      return showAlert('이름을 입력해주세요.')
    }
    if (!memberInfo.phone) {
      return showAlert('핸드폰 번호를 입력해주세요.')
    }
    if (!memberInfo.phoneCert) {
      return showAlert(
        '휴대폰번호 인증 후 SSG.COM서비스 이용이 가능합니다. 휴대폰번호 인증을 진행해주세요.',
      )
    }

    const requestBody = {
      accountId: email || memberInfo.accountId,
      name: memberInfo.name,
      password: email ? 'kakao' : memberInfo.password,
      email: email || memberInfo.email,
      phone: memberInfo.phone,
      address: '',
      gender: 0,
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/auth/join`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        },
      )

      const data = await res.json()
      if (res.status === 201) {
        console.log(data)

        if (hasId) {
          await fetch(
            `${process.env.NEXT_PUBLIC_API}/members/auth/social-mapping`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                uuid: data.uuid,
                memberSocialCode: id,
              }),
            },
          )
        }
        setFetched(true)
        return showAlert('회원가입에 성공하셨습니다.')
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    if (!alert.isOpen && fetched) {
      router.push('/myssg')
    }
  }, [router, alert.isOpen, fetched])

  return (
    <form id="submitForm" name="submitForm">
      <TermsAgree />
      <div className={style.cmem_card_tit}>
        <h3>회원정보</h3>
      </div>
      {!hasEmail ? (
        <div className={style.cmem_cont}>
          <IdInput />
          <PwdInput />
          <NameInput />
          <PhoneCert />
        </div>
      ) : (
        <div className={style.cmem_cont}>
          <div className={style.cmem_row}>
            <dl className={style.cmem_ip}>
              <dt>
                <span className={style.cmem_require}>
                  <span className={style.star} aria-hidden="true">
                    *
                  </span>
                </span>
                아이디
              </dt>
              <dd>
                <div className={style.cmem_inpbtn_set}>
                  <span className={style.cmem_inp_txt}>{email}</span>
                </div>
              </dd>
            </dl>
          </div>
          <NameInput />
          <SocialPhoneCert />
        </div>
      )}
      <MarketConsent />
      <div className={style.cmem_btn_area}>
        <button
          type="submit"
          className={`${style.cmem_btn} ${style.cmem_btn_orange2}`}
          onClick={sendData}
        >
          확인
        </button>
      </div>
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </form>
  )
}
