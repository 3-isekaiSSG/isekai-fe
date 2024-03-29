// e 혜택안내
// 쿠폰/포인트/SSGMONEY
import Link from 'next/link'
import { FaBarcode } from 'react-icons/fa6'
import style from './myssg.module.css'

export default function couponCarousel() {
  return (
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
            <Link href="https://member.ssg.com/m/myssg/ssgmoneyMng/ssgmoneySavedList.ssg?menu=smoneySavedList">
              <div className={style.clickable}>
                <span className={style.myssg_user_reward_item_subtitle}>
                  SSG MONEY
                </span>
                <div className={style.myssg_user_reward_item_title}>
                  <strong>0</strong>
                  <span>원</span>
                </div>
              </div>
            </Link>
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
            // style="margin-right: 8px;"
          >
            <Link
              href="https://member.ssg.com/m/myssg/moneyMng/spointMain.ssg?_mpop=new"
              className={style.clickable}
            >
              <span className={style.myssg_user_reward_item_subtitle}>
                신세계포인트
              </span>
              {/* [D] 통합회원 일 경우 포인트 노출 */}
              <div className={style.myssg_user_reward_item_title}>
                <strong>1,151</strong>
                <span>p</span>
              </div>
            </Link>
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
    </div>
  )
}
