/* eslint-disable jsx-a11y/control-has-associated-label */
import MyProfile from '@/containers/myssg/MyProfile'
import OrderCheck from '@/containers/myssg/OrderCheck'
import QuickLink from '@/containers/myssg/QuickLink'
import ManagingReview from '@/containers/myssg/ManagingReview'
import LinkList from '@/containers/myssg/LinkList'
import BandBanner from '@/containers/myssg/BandBanner'

export default function Page() {
  return (
    <main className="tracking-[-0.3px]">
      <MyProfile />
      <OrderCheck />
      <QuickLink />
      <ManagingReview />
      <LinkList />
      <BandBanner />
    </main>
  )
}
