import LoginForm from '@/containers/login/LoginForm'
import NonArea from '@/containers/login/NonArea'
import SocialLoginForm from '@/containers/login/SocialLoginForm'

export default function Page() {
  return (
    <div className="pt-10 pb-5 px-5 text-[#666]">
      <LoginForm />
      <SocialLoginForm />
      <NonArea />
    </div>
  )
}
