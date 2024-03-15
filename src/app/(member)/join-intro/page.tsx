import Link from 'next/link'
import style from '@/components/join.module.css'

export default function Page() {
  return (
    <div className={`${style.m_content} ${style.cmem_ct_join}`}>
      <div className={`${style.cmem_card} ${style.cmem_card_intergrate}`}>
        <div className={style.cmem_join_desc3}>
          <p className={style.cmem_join_desc_tit}>
            믿고 사는 즐거움
            <br />
            SSG.COM에 오신 것을 환영합니다.
          </p>
        </div>
        <div className={style.cmem_card_tit}>
          <h3>신세계포인트 통합회원</h3>
        </div>
        <p className={style.cmem_card_subtit}>
          신세계 유니버스 클럽 3개월 무료체험이 제공됩니다.
          <br />
          매월 제공되는 쿠폰 받으시고 알뜰하게 쇼핑하세요!
        </p>
        <p className={style.cmem_card_subtit}>
          * 멤버십은 3개월 후 자동 해지 됩니다.
        </p>
        <div className={`${style.cmem_cont} ${style.ty_benefit}`}>
          <ul className={style.cmem_join_benefit}>
            <li>
              <span
                className={`${style.sp_cmem_join} ${style.cmem_join_asset_03}`}
              />
              <span className={style.cmem_benefit_name}>
                멤버십 신규 가입 축하
                <br />
                1만원 할인 쿠폰
              </span>
            </li>
            <li>
              <span
                className={`${style.sp_cmem_join} ${style.cmem_join_asset_01}`}
              />
              <span className={style.cmem_benefit_name}>
                매월 전상품
                <br />
                7% 할인 쿠폰
              </span>
            </li>
            <li>
              <span
                className={`${style.sp_cmem_join} ${style.cmem_join_asset_02}`}
              />
              <span className={style.cmem_benefit_name}>
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
              href="/"
              className={`${style.cmem_btn} ${style.cmem_btn_black_alpha20}`}
            >
              통합회원만 가입하기
            </Link>
          </div>
        </div>
      </div>
      <div className={style.cmem_card}>
        <div className={style.cmem_card_tit}>
          <h3>간편회원</h3>
        </div>
        <div className={style.cmem_cont}>
          <ul className={style.cmem_sns_login}>
            <li>
              <Link href="/">
                <span className={style.ico_area}>
                  <span
                    className={`${style.sp_cmem_sns} ${style.cmem_ico_email}`}
                  />
                </span>
                <span className={style.cmem_sns_name}>이메일</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className={style.ico_area}>
                  <span
                    className={`${style.sp_cmem_sns} ${style.cmem_ico_naver}`}
                  />
                </span>
                <span className={style.cmem_sns_name}>네이버</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className={style.ico_area}>
                  <span
                    className={`${style.sp_cmem_sns} ${style.cmem_ico_kakao}`}
                  />
                </span>
                <span className={style.cmem_sns_name}>카카오</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className={style.ico_area}>
                  <span
                    className={`${style.sp_cmem_sns} ${style.cmem_ico_apple}`}
                  />
                </span>
                <span className={style.cmem_sns_name}>애플</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
