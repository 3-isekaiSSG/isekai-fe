import style from '@/containers/join-auth/join.module.css'
import InfoInput from './InfoInput'
import PhoneCert from './PhoneCert'

export default function MemberInfo() {
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
