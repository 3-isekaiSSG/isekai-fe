import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import Floating from '@/components/FloatingBtn'
import TabBar from '@/components/TabBar'
import BandBanner from '@/containers/myssg/BandBanner'
import LinkList from '@/containers/myssg/LinkList'
import ManagingReview from '@/containers/myssg/ManagingReview'
import MyProfile from '@/containers/myssg/MyProfile'
import OrderCheck from '@/containers/myssg/OrderCheck'
import QuickLink from '@/containers/myssg/QuickLink'

interface StatusType {
  status: number
  statusName: string
  count: number
}

async function getCountStatus(
  statusCode: number,
  headers: { [key: string]: string },
): Promise<StatusType | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/deliveries/status/${statusCode}`,
      {
        headers,
      },
    )
    if (!res.ok) {
      throw Error(res.statusText)
    }
    return await res.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCountStatus', err)
    return undefined
  }
}

async function getStatusCounts(headers: {
  [key: string]: string
}): Promise<StatusType[] | undefined[]> {
  const results = await Promise.all(
    Array.from({ length: 7 }, (_, i) => getCountStatus(i, headers)),
  )
  return results
}

export default async function Page() {
  const session = await getServerSession(options)

  const headers = {
    Authorization: session?.user.accessToken,
  }

  const countStatusData = await getStatusCounts(headers)
  return (
    <div className="tracking-[-0.3px]">
      <MyProfile />
      <OrderCheck countStatusData={countStatusData} />
      <QuickLink />
      <ManagingReview />
      <LinkList />
      <BandBanner />

      <TabBar />
      <Floating />
    </div>
  )
}
