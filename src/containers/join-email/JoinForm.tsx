'use client'

import style from '@/containers/join-auth/join.module.css'
import TermsAgree from './TermsAgree'
import MemberInfo from './MemberInfo'
import MrktConsent from './MrktConsent'

export default function JoinForm() {
  const sendData = async () => {
    const res = await fetch('간편회원가입')
    if (res.ok) {
      return res.json
    }

    return null
  }

  return (
    <form id="submitForm" name="submitForm">
      <TermsAgree />
      <MemberInfo />
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
