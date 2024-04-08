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
import { memberInfoState } from '@/components/Join/state'
import AddressForm from './AddressForm'
import EtcInput from './EtcInput'

export default function JoinForm() {
  const router = useRouter()
  const [fetched, setFetched] = useState<boolean>(false)
  const [alert, setAlert] = useRecoilState(AlertState)
  const memberInfo = useRecoilValue(memberInfoState)

  const name = useSearchParams().get('name')
  const phone = useSearchParams().get('phone')

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

    const regexId = /^[a-zA-Z0-9]{6,20}$/
    const regexPassword = /^[A-Za-z0-9!@#$%^&*()_+=-]{8,20}$/
    const regexEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (!memberInfo.accountId) {
      return showAlert('아이디를 입력해주세요.')
    }
    if (!regexId.test(memberInfo.accountId)) {
      return showAlert('아이디를 정확하게 입력해주세요.')
    }
    if (!memberInfo.dupCheck) {
      return showAlert('아이디 중복체크를 해주세요.')
    }
    if (!memberInfo.password) {
      return showAlert('비밀번호를 입력해주세요.')
    }
    if (!memberInfo.pwd2) {
      return showAlert('비밀번호 재확인을 입력해주세요.')
    }
    if (!regexPassword.test(memberInfo.password)) {
      return showAlert('비밀번호의 형식을 지켜주세요.')
    }
    if (memberInfo.password !== memberInfo.pwd2) {
      return showAlert('비밀번호가 일치하지 않습니다.')
    }
    if (!memberInfo.email || !regexEmail.test(memberInfo.email)) {
      return showAlert('이메일주소를 정확히 입력해주세요.')
    }
    // Todo: 주소 유효성 검사 추가

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
            name,
            password: memberInfo.password,
            email: memberInfo.email,
            phone,
            zipcode: memberInfo.zipcode,
            address: memberInfo.address,
            gender: memberInfo.gender,
          }),
        },
      )

      if (res.status === 201) {
        setFetched(true)
      }
      return showAlert('회원가입에 성공하셨습니다.')
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
      <div className={style.cmem_card_tit}>
        <h3>회원정보</h3>
      </div>
      <div className={style.cmem_cont}>
        <IdInput />
        <PwdInput />
        <NameInput />
        <AddressForm />
        <EtcInput />
      </div>
      <MarketConsent />
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
