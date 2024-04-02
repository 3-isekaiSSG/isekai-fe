'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import IdInput from '@/components/Input/IdInput'
import NameInput from '@/components/Input/NameInput'
import PwdInput from '@/components/Input/PwdInput'
import MrktConsent from '@/components/MrktConsent'
import style from '@/containers/join-auth/join.module.css'
import PhoneCert from './PhoneCert'
import TermsAgree from './TermsAgree'
import { memberInfoState, termsAgreeState } from './state'

export default function EasyForm() {
  const termsAgree = useRecoilValue(termsAgreeState)
  const memberInfo = useRecoilValue(memberInfoState)
  // const mrktConsent = useRecoilValue(mrktConsentState)

  const [alert, setAlert] = useRecoilState(AlertState)
  const [fetched, setFetched] = useState(false)

  const router = useRouter()

  /** 모달 open */
  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }
  /** 모달 close */
  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  const sendData = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!termsAgree) {
      return showAlert('필수 약관에 동의해주세요.')
    }
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

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/auth/join`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accountId: memberInfo.accountId,
            name: memberInfo.name,
            password: memberInfo.password,
            email: memberInfo.email,
            phone: memberInfo.phone,
            address: '',
            gender: 0,
          }),
        },
      )

      const data = await res.json()
      if (res.status === 201) {
        setFetched(true)
      }
      return showAlert(data.message)
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
      <div className={style.cmem_cont}>
        <IdInput />
        <PwdInput />
        <NameInput />
        <PhoneCert />
      </div>
      <MrktConsent />
      <div className={style.cmem_btn_area}>
        {/* 버튼으로 구현, 유효성 검증 실시하고 모두 통과한 경우에는 회원가입 데이터 넘기기 */}
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
