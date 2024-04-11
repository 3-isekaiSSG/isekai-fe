import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Result from '@/containers/find-id-result/Result'

export default async function Page() {
  const session = await getServerSession()

  if (!session) {
    redirect('/')
  }

  return <Result />
}
