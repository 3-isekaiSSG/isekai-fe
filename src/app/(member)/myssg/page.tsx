/* eslint-disable jsx-a11y/control-has-associated-label */
import BandBanner from '@/containers/myssg/BandBanner'
import LinkList from '@/containers/myssg/LinkList'
import ManagingReview from '@/containers/myssg/ManagingReview'
import MyProfile from '@/containers/myssg/MyProfile'
import OrderCheck from '@/containers/myssg/OrderCheck'
import QuickLink from '@/containers/myssg/QuickLink'

export default function Page() {
  return (
    <div className="tracking-[-0.3px]">
      <MyProfile />
      <OrderCheck />
      <QuickLink />
      <ManagingReview />
      <LinkList />
      <BandBanner />
    </div>
  )
}
