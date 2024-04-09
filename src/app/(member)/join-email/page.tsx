import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import EasyForm from '@/containers/join-email/EasyForm'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return <EasyForm />
}
