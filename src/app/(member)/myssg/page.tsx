/* eslint-disable jsx-a11y/control-has-associated-label */
import style from '@/components/myssg/myssg.module.css'
import MyProfile from '@/components/myssg/MyProfile'
// import OrderCheck from '@/components/myssg/OrderCheck'
// import QuickLink from '@/components/myssg/QuickLink'
// import ManagingReview from '@/components/myssg/ManagingReview'
// import LinkList from '@/components/myssg/LinkList'
import BandBanner from '@/components/myssg/BandBanner'

export default function Page() {
  return (
    <div id="m_content" className={style.myssg_main}>
      <MyProfile />
      {/* <OrderCheck />
      <QuickLink />
      <ManagingReview />
      <LinkList /> */}
      <BandBanner />
    </div>
  )
}
