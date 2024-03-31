'use client'

import { useRecoilValue } from 'recoil'
import IdInput from '@/components/Input/IdInput'
import NameInput from '@/components/Input/NameInput'
import PwdInput from '@/components/Input/PwdInput'
import style from '@/containers/join-auth/join.module.css'
import MrktConsent from './MrktConsent'
import PhoneCert from './PhoneCert'
import TermsAgree from './TermsAgree'
import { memberInfoState, mrktConsentState, termsAgreeState } from './state'

export default function JoinForm() {
  const termsAgree = useRecoilValue(termsAgreeState)
  const mrktConsent = useRecoilValue(mrktConsentState)
  const memberInfo = useRecoilValue(memberInfoState)

  const sendData = async () => {
    const res = await fetch('간편회원가입', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        termsAgree,
        memberInfo,
        mrktConsent,
      }),
    })

    if (res.ok) {
      return res.json
    }

    return null
  }

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
    </form>
  )
}
