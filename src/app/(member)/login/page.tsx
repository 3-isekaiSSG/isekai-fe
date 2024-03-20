import style from '@/components/login.module.css'
import LoginForm from '@/components/forms/LoginForm'
import SocialLoginForm from '@/components/forms/SocialLoginForm'
import NonArea from '@/components/non/NonArea'

export default function Page() {
  return (
    // 시맨틱 태그 main 정의
    <div id="m_content" className={`${style.cmem_ct_login} ${style.v2}`}>
      <LoginForm />
      <SocialLoginForm />
      <NonArea />
    </div>
  )
}
