import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import LoginForm from '@/containers/login/LoginForm'
import NonArea from '@/containers/login/NonArea'
import SocialLoginForm from '@/containers/login/SocialLoginForm'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <div className="pt-10 pb-5 px-5 text-[#666]">
      <LoginForm />
      <SocialLoginForm />
      <NonArea />
    </div>
  )
}
