import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import JoinForm from '@/containers/join-form/JoinForm'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return <JoinForm />
}
