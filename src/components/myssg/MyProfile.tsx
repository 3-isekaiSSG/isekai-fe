/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaBarcode } from 'react-icons/fa6'
import Image from 'next/image'
import style from './myssg.module.css'

export default function MyProfile() {
  return (
    <div
      className={`${style.myssg_user_sec} ${style.universe}`}
      data-react-tarea-cd="00040_000000233"
      data-observable-unit="true"
    >
      {/* 프로필 */}
      <div
        className={`${style.myssg_top_area} ${style.react_area}`}
        data-react-unit-type="text"
        data-react-unit-text='[{"type":"tarea_addt_val","value":"SSG혜택"},{"type":"tarea_addt_val","value":"혜택받기"}]'
      >
        <div className={style.myssg_user_name_area}>
          <a
            href="https://member.ssg.com/m/myssg/myinfoMng/main.ssg?_mpop=new"
            className={style.myssg_user_name}
          >
            박준표 님
          </a>
          <div
            className={style.myssg_user_badge_group}
            data-react-unit-type="text"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"배지"}]'
          />
        </div>
        <a
          href="/myssg/mbrStatus.ssg"
          className={`${style.myssg_page_title_group} ${style.clickable}`}
          data-react-tarea-dtl-cd="t00060"
        >
          <strong className={style.myssg_page_title}>
            SSG에서 즐거운 쇼핑 되세요!
            <i
              className={`${style.icon} ${style.ty_sm} ${style.icon_chevron_right}`}
            />
          </strong>
        </a>
        <div
          className={style.myssg_btn_benefit_group}
          data-react-tarea-cd="00040_000000233"
        />
      </div>
      {/* e 프로필 */}
      {/* 혜택안내 */}
      {/* 혜택안내(멤버십 미가입자) */}
      <div
        className={`${style.myssg_swiper_container} ${style.swiper_container_vertical} ${style.swiper_container_ios}`}
      >
        <ul
          className={style.swiper_wrapper}
          // style="transition-duration: 0ms; transform: translate3d(0px, -175px, 0px);"
        >
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="0"
          >
            <a
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                <span className={style.myssg_primary_text}>
                  {' '}
                  최대7%쿠폰 5장+스타벅스 별 더블적립 받기
                </span>
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_prev}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="1"
          >
            <a
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                유니버스클럽 가입하고
                <span className={style.myssg_primary_text}>
                  {' '}
                  최대 8만원 혜택받기
                </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="2"
          >
            <a
              href="https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?custFitInfoId=2"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                맞춤정보 등록하고 상품 &amp; 리뷰 추천 받기
                <span className={style.myssg_primary_text}> </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate_next}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="0"
          >
            <a
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                <span className={style.myssg_primary_text}>
                  {' '}
                  최대7%쿠폰 5장+스타벅스 별 더블적립 받기
                </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_prev}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="1"
          >
            <a
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                유니버스클럽 가입하고
                <span className={style.myssg_primary_text}>
                  {' '}
                  최대 8만원 혜택받기
                </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_active}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="2"
          >
            <a
              href="https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?custFitInfoId=2"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                맞춤정보 등록하고 상품 &amp; 리뷰 추천 받기
                <span className={style.myssg_primary_text}> </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_next}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="0"
          >
            <a
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                <span className={style.myssg_primary_text}>
                  {' '}
                  최대7%쿠폰 5장+스타벅스 별 더블적립 받기
                </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_prev}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="1"
          >
            <a
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                유니버스클럽 가입하고
                <span className={style.myssg_primary_text}>
                  {' '}
                  최대 8만원 혜택받기
                </span>{' '}
              </span>
            </a>
          </li>
          <li
            className={`${style.myssg_premium_reivew} ${style.no_prepend_icon} ${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
            data-swiper-slide-index="2"
          >
            <a
              href="https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?custFitInfoId=2"
              className={`${style.myssg_review_promotion} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00060"
              data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
            >
              <span className={style.myssg_reivew_text}>
                맞춤정보 등록하고 상품 &amp; 리뷰 추천 받기
                <span className={style.myssg_primary_text}> </span>{' '}
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* e 혜택안내 */}
      {/* 쿠폰/포인트/SSGMONEY */}
      <div
        className={`${style.myssg_user_reward_group} ${style.myssg_layer_conts} ${style.v2}`}
      >
        <div
          className={`${style.myssg_reward_container} ${style.swiper_container_horizontal} ${style.swiper_container_ios}`}
        >
          <div className={`${style.myssg_reward_list} ${style.swiper_wrapper}`}>
            {/* 쿠폰 */}
            <div
              className={`${style.myssg_user_reward_item} ${style.myssg_user_reward_item_coupon} ${style.swiper_slide} ${style.swiper_slide_active}`}
              data-react-tarea-cd="00034_000000002"
              // style="margin-right: 8px;"
            >
              <a href="/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new">
                <span className={style.myssg_user_reward_item_subtitle}>
                  쿠폰
                </span>
                <div className={style.myssg_user_reward_item_title}>
                  {/* 쿠폰 데이터 필요 */}
                  <strong>0</strong>
                  <span>장</span>
                </div>
              </a>
              <div className={style.myssg_user_reward_item_actions}>
                <div
                  className={style.myssg_user_reward_button_group}
                  data-react-unit-type="text"
                  data-react-unit-text='[{"type":"tarea_addt_val","value":"쿠폰함"}]'
                >
                  <a
                    href="/myssg/moneyMng/memberCpnOwnList.ssg?_mpop=new"
                    className={`${style.myssg_user_reward_button} ${style.clickable}`}
                    data-react-tarea-dtl-cd="t00060"
                    data-react-tarea="MYSSG_메인|쿠폰|쿠폰함_클릭"
                  >
                    <span className={style.myssg_user_reward_button_content}>
                      쿠폰함
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* 미식 MONEY */}
            {/* SSG MOMEY */}
            <div
              className={`${style.myssg_user_reward_item} ${style.swiper_slide} ${style.swiper_slide_next}`}
              data-react-tarea-cd="00034_000000003"
              // style="margin-right: 8px;"
            >
              <a
                href="https://member.ssg.com/m/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList"
                data-react-unit-type="text"
                data-react-unit-text='[{"type":"tarea_addt_val","value":"SSGMONEY"}]'
              >
                <div
                  data-react-tarea-dtl-cd="t00060"
                  className={style.clickable}
                >
                  <span className={style.myssg_user_reward_item_subtitle}>
                    SSG MONEY
                  </span>
                  <div className={style.myssg_user_reward_item_title}>
                    <strong>0</strong>
                    <span>원</span>
                  </div>
                </div>
              </a>
              <div className={style.myssg_user_reward_item_actions}>
                <div className={style.myssg_user_reward_button_group}>
                  <a
                    href="/"
                    role="button"
                    className={`${style.myssg_user_reward_button} ${style.color_primary}`}
                    data-react-unit-type="text"
                    data-react-unit-text='[{"type":"tarea_addt_val","value":"상품권"}]'
                    // onClick="javascript:popupSsgpay('memberGiftCharge', '0001');"
                  >
                    <div
                      data-react-tarea-dtl-cd="t00060"
                      className={style.clickable}
                    >
                      <span className={style.myssg_user_reward_button_content}>
                        상품권
                      </span>
                    </div>
                  </a>
                  <a
                    href="/"
                    role="button"
                    className={style.myssg_user_reward_button}
                    data-react-unit-type="text"
                    data-react-unit-text='[{"type":"tarea_addt_val","value":"계좌"}]'
                    // onClick="javascript:popupSsgpay('memberRegCharge', '0001');"
                  >
                    <div
                      data-react-tarea-dtl-cd="t00060"
                      className={style.clickable}
                    >
                      <span className={style.myssg_user_reward_button_content}>
                        계좌
                      </span>
                    </div>
                  </a>
                  <a
                    href="/"
                    role="button"
                    className={`${style.myssg_user_reward_button} ${style.color_gray_700}`}
                    data-react-unit-type="text"
                    data-react-unit-text='[{"type":"tarea_addt_val","value":"포인트"}]'
                    // onClick="javascript:popupSsgpay('memberRegTransForm', '0001');"
                  >
                    <div
                      data-react-tarea-dtl-cd="t00060"
                      className={style.clickable}
                    >
                      <span className={style.myssg_user_reward_button_content}>
                        포인트
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--신세계포인트 --> */}
            <div
              className={`${style.myssg_user_reward_item} ${style.swiper_slide}`}
              data-react-tarea-cd="00034_000000004"
              // style="margin-right: 8px;"
            >
              <a
                href="https://member.ssg.com/m/myssg/moneyMng/spointMain.ssg?_mpop=new"
                className={style.clickable}
                data-react-unit-type="text"
                data-react-unit-text='[{"type":"tarea_addt_val","value":"신세계포인트"}]'
                data-react-tarea-dtl-cd="t00060"
              >
                <span className={style.myssg_user_reward_item_subtitle}>
                  신세계포인트
                </span>
                {/* [D] 통합회원 일 경우 포인트 노출 */}
                <div className={style.myssg_user_reward_item_title}>
                  <strong>1,151</strong>
                  <span>p</span>
                </div>
              </a>
              <div className={style.myssg_user_reward_item_actions}>
                <div className={style.myssg_user_reward_button_group}>
                  <div
                    className={`${style.myssg_user_reward_button} ${style.myssg_user_reward_button_icon} ${style.myssg_layer_open_btn}`}
                  >
                    <span className={style.myssg_user_reward_button_content}>
                      <i
                        className={`${style.icon} ${style.ty_xs} ${style.icon_barcode_v2}`}
                        aria-hidden="true"
                      >
                        <FaBarcode />
                      </i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.swiper_container_banner} ${style.swiper_container_horizontal} ${style.swiper_container_ios}`}
        >
          <ul
            className={style.swiper_wrapper}
            // style="transform: translate3d(-826px, 0px, 0px); transition-duration: 0ms;"
          >
            <li
              className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
              data-swiper-slide-index="1"
              // style="width: 398px; margin-right: 15px;"
            >
              <div
                className={style.myssg_banner}
                data-react-unit-type="banr"
                data-react-unit-text='[{"type":"text","value": "미가입자 (2) - 문구컨펌안"}]'
              >
                <a
                  href="https://m.ssg.com/membership/gate.ssg"
                  className={`${style.myssg_banner_content} ${style.clickable}`}
                  data-react-tarea-dtl-cd="t00001"
                  data-react-tarea="MYSSG_메인|배너|배너_클릭"
                >
                  <div className={style.myssg_banner_img}>
                    <Image
                      src="https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png"
                      alt=""
                      fill
                    />
                  </div>
                </a>
              </div>
            </li>
            <li
              className={`${style.swiper_slide} ${style.swiper_slide_prev} ${style.swiper_slide_duplicate_next}`}
              data-swiper-slide-index="0"
              // style="width: 398px; margin-right: 15px;"
            >
              <div
                className={style.myssg_banner}
                data-react-unit-type="banr"
                data-react-unit-text='[{"type":"text","value": "미가입자 (1) - 문구컨펌안"}]'
              >
                <a
                  href="https://m.ssg.com/membership/gate.ssg"
                  className={`${style.myssg_banner_content} ${style.clickable}`}
                  data-react-tarea-dtl-cd="t00001"
                  data-react-tarea="MYSSG_메인|배너|배너_클릭"
                >
                  <div className={style.myssg_banner_img}>
                    <Image
                      src="https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png"
                      alt=""
                      fill
                    />
                  </div>
                </a>
              </div>
            </li>
            <li
              className={`${style.swiper_slide} ${style.swiper_slide_active}`}
              data-swiper-slide-index="1"
              // style="width: 398px; margin-right: 15px;"
            >
              <div
                className={style.myssg_banner}
                data-react-unit-type="banr"
                data-react-unit-text='[{"type":"text","value": "미가입자 (2) - 문구컨펌안"}]'
              >
                <a
                  href="https://m.ssg.com/membership/gate.ssg"
                  className={`${style.myssg_banner_content} ${style.clickable}`}
                  data-react-tarea-dtl-cd="t00001"
                  data-react-tarea="MYSSG_메인|배너|배너_클릭"
                >
                  <div className={style.myssg_banner_img}>
                    <Image
                      src="https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png"
                      alt=""
                      fill
                    />
                  </div>
                </a>
              </div>
            </li>
            <li
              className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_next} ${style.swiper_slide_duplicate_prev}`}
              data-swiper-slide-index="0"
              // style="width: 398px; margin-right: 15px;"
            >
              <div
                className={style.myssg_banner}
                data-react-unit-type="banr"
                data-react-unit-text='[{"type":"text","value": "미가입자 (1) - 문구컨펌안"}]'
              >
                <a
                  href="https://m.ssg.com/membership/gate.ssg"
                  className={`${style.myssg_banner_content} ${style.clickable}`}
                  data-react-tarea-dtl-cd="t00001"
                  data-react-tarea="MYSSG_메인|배너|배너_클릭"
                >
                  <div className={style.myssg_banner_img}>
                    <Image
                      src="https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png"
                      alt=""
                      fill
                    />
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <div className="swiper-pagination swiper-pagination-fraction">
            <span className="swiper-pagination-current">2</span> /{' '}
            <span className="swiper-pagination-total">2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
