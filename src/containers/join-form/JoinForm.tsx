import IdInput from '@/components/Input/IdInput'
import NameInput from '@/components/Input/NameInput'
import PwdInput from '@/components/Input/PwdInput'
import MrktConsent from '@/components/MrktConsent'
import style from '@/containers/join-auth/join.module.css'
import AddressForm from './AddressForm'
import EtcInput from './EtcInput'

export default function JoinForm() {
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
      <MrktConsent />
    </form>
  )
}
