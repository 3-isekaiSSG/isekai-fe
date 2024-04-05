import Link from 'next/link'
import style from '@/components/Join/join.module.css'

export default function ToJoinAuthBtn() {
  return (
    <div className={`${style.cmem_cont} ${style.ty_benefit}`}>
      <ul className={style.cmem_join_benefit}>
        <li>
          <span
            className={`${style.sp_cmem_join} ${style.cmem_join_asset_03}`}
          />
          <span className={`${style.cmem_benefit_name} text-sm`}>
            멤버십 신규 가입 축하
            <br />
            1만원 할인 쿠폰
          </span>
        </li>
        <li>
          <span
            className={`${style.sp_cmem_join} ${style.cmem_join_asset_01}`}
          />
          <span className={`${style.cmem_benefit_name} text-sm`}>
            매월 전상품
            <br />
            7% 할인 쿠폰
          </span>
        </li>
        <li>
          <span
            className={`${style.sp_cmem_join} ${style.cmem_join_asset_02}`}
          />
          <span className={`${style.cmem_benefit_name} text-sm`}>
            매월 전상품
            <br />
            5% 할인 쿠폰
          </span>
        </li>
      </ul>
      <div className={style.cmem_btn_area}>
        <Link
          href="https://member.ssg.com/m/member/join/auth.ssg?bothJoinYn=Y"
          className={`${style.cmem_btn} ${style.cmem_btn_primary}`}
        >
          멤버십 혜택 받고 통합회원 가입하기
        </Link>
        <Link
          href="/join-auth"
          className={`${style.cmem_btn} ${style.cmem_btn_black_alpha20}`}
        >
          통합회원만 가입하기
        </Link>
      </div>
    </div>
  )
}
