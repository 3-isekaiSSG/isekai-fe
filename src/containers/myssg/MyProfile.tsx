/* eslint-disable jsx-a11y/control-has-associated-label */
import { LuChevronRightCircle } from 'react-icons/lu'
import Link from 'next/link'
import style from './myssg.module.css'
import BenefitCarousel from './BenefitCarousel'
import CouponCarousel from './CouponCarousel'
import UniverseCarousel from './UniverseCarousel'

export default function MyProfile() {
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
            박준표 님
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
      <UniverseCarousel />
    </div>
  )
}
