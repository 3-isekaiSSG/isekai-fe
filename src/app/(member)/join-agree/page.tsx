import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Consent from '@/containers/join-agree/Consent'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return <Consent />
}
