import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { LuChevronRightCircle } from 'react-icons/lu'
import { options } from '@/app/api/auth/[...nextauth]/options'
import BenefitCarousel from './BenefitCarousel'
import CouponCarousel from './CouponCarousel'
// import UniverseCarousel from './UniverseCarousel'
import style from './myssg.module.css'

export default async function MyProfile() {
  const session = await getServerSession(options)

  return (
    <div className={`${style.myssg_user_sec} ${style.universe}`}>
      {/* 프로필 */}
      <div className={`${style.myssg_top_area} ${style.react_area}`}>
        <div className={style.myssg_user_name_area}>
          <Link
            // 내 정보 관리 페이지로 리다이렉트
            href="/"
            className={style.myssg_user_name}
          >
            {session?.user.name} 님
          </Link>
        </div>
        <div className={`${style.myssg_page_title_group} ${style.clickable}`}>
          <strong className={style.myssg_page_title}>
            SSG에서 즐거운 쇼핑 되세요!
            <i
              className={`${style.icon} ${style.ty_sm} ${style.icon_chevron_right}`}
            >
              <LuChevronRightCircle className="inline-flex w-5 h-5" />
            </i>
          </strong>
        </div>
      </div>
      <BenefitCarousel />
      <CouponCarousel />
      {/* <UniverseCarousel /> */}
    </div>
  )
}
