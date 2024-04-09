import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import FindHeader from '@/containers/find-idpw/FindHeader'
import FindIdPw from '@/containers/find-idpw/FindIdPw'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <div className="pt-[13px] pb-[35px] px-[5px] bg-[#f7f7f7]">
      <FindHeader />
      <FindIdPw />
    </div>
  )
}
