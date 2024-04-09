import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import NonBottom from '@/containers/non-login/NonBottom'
import NonOrderForm from '@/containers/non-order/NonOrderForm'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <main className="text-[#666] px-[30px] py-5">
      <NonOrderForm />
      <NonBottom />
    </main>
  )
}
