import Link from 'next/link'
import style from '@/components/join.module.css'
import TermsAgree from '../join/TermsAgree'
import MemberInfo from '../join/MemberInfo'
import MrktConsent from '../join/MrktConsent'

export default function JoinForm() {
  return (
    <form
      id="submitForm"
      name="submitForm"
      action="/"
      // action="/m/member/join/successEmail.ssg"
      // method="post"
      // data-gtm-form-interact-id="0"
    >
      <TermsAgree />
      <MemberInfo />
      <MrktConsent />
      <div
        className={style.cmem_btn_area}
        // data-reactingv2-key="00199_000000750|t00000|1"
      >
        <Link
          href="/"
          id="btnSubmit"
          className={`${style.cmem_btn} ${style.cmem_btn_orange2}`}
        >
          확인
        </Link>
      </div>
    </form>
  )
}
