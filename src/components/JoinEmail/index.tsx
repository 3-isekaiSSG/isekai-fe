import Link from 'next/link'
import style from '@/components/join.module.css'
import TermsAgree from './TermsAgree'
import MemberInfo from './MemberInfo'
import MrktConsent from './MrktConsent'

export default function JoinEmail() {
  return (
    <div className={`${style.m_content} ${style.cmem_ct_join}`}>
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
    </div>
  )
}
