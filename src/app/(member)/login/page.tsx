import style from '@/components/login.module.css'
import LoginForm from '@/components/forms/LoginForm'
import SocialLoginForm from '@/components/forms/SocialLoginForm'
import NonArea from '@/components/non/NonArea'

export default function Page() {
  return (
    // TODO: 시멘틱태그 비꾸기
    <div id="m_content" className={`${style.cmem_ct_login} ${style.v2}`}>
      <LoginForm />
      <SocialLoginForm />
      <NonArea />
    </div>
  )
}
