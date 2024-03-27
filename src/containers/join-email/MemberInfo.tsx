import InfoInput from '@/containers/join-email/InfoInput'
import style from '@/containers/join-auth/join.module.css'
import PhoneCert from './PhoneCert'

export default function MemberInfo() {
  /** 인증번호 발송 로직, 휴대폰 인증과 연결 필요함 */
  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>회원정보</h3>
      </div>
      <div className={style.cmem_cont}>
        <InfoInput />
        <PhoneCert />
      </div>
    </>
  )
}
