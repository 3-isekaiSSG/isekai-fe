/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link'
import { MdLocationPin } from 'react-icons/md'
import style from './myssg.module.css'

export default function OrderCheck() {
  return (
    <div className={`${style.myssg_sec} ${style.myssg_sec_order}`}>
      {/* 주문/배송조회 */}
      <div className={style.myssg_sec_conts} id="divMyOrderSecConts">
        <Link
          href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"
          className={`${style.myssg_sec_title} ${style.ty_order} ${style.clickable}`}
          data-react-tarea="MYSSG|M_MY_SSG_주문배송조회"
        >
          주문/배송 조회
        </Link>
        <Link
          href="https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new"
          className={style.myssg_btn_manage_addr}
        >
          <span className={style.myssg_btn_content}>
            <i className={style.icon_location}>
              <MdLocationPin className="w-[12px] h-[12px]" />
            </i>{' '}
            배송지 관리{' '}
          </span>
        </Link>
        {/* 주문 summary */}
        <div className={style.myssg_order_process}>
          <ul className={style.myssg_process_list}>
            <li>
              <span
                id="ordRcp"
                className={`${style.myssg_process_count} ${style.ty_zero}`}
              >
                0
              </span>
              <span id="ordRcpTxt" className={style.myssg_process_title}>
                주문접수
              </span>
              <Link
                href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C15"
                className={style.myssg_process_link}
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_주문접수"
              />
            </li>
            <li>
              <span
                id="paymtCmpt"
                className={`${style.myssg_process_count} ${style.ty_zero}`}
              >
                0
              </span>
              <span id="paymtCmptTxt" className={style.myssg_process_title}>
                결제완료
              </span>
              <Link
                href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C11"
                className={style.myssg_process_link}
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_결제완료"
              />
            </li>
            <li>
              <span
                id="itemReady"
                className={`${style.myssg_process_count} ${style.ty_zero}`}
              >
                0
              </span>
              <span id="itemReadyTxt" className={style.myssg_process_title}>
                상품준비중
              </span>
              <Link
                href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C12"
                className={style.myssg_process_link}
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_상품준비중"
              />
            </li>
            <li>
              <span
                id="shpp"
                className={`${style.myssg_process_count} ${style.ty_zero}`}
              >
                0
              </span>
              <span id="shppTxt" className={style.myssg_process_title}>
                배송중
              </span>
              <Link
                href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C13"
                className={style.myssg_process_link}
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_배송중"
              />
            </li>
            <li>
              <span
                id="shppCmpt"
                className={`${style.myssg_process_count} ${style.ty_zero}`}
              >
                0
              </span>
              <span id="shppCmptTxt" className={style.myssg_process_title}>
                배송완료{' '}
                <button
                  type="button"
                  className={`${style.myssg_question_btn} ${style.myssg_modal_btn} tracking-[-0.3px]`}
                  data-morph-target=".myssg_modal_completed"
                />
              </span>
              <Link
                href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C14"
                className={style.myssg_process_link}
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_배송완료"
              />
            </li>
          </ul>
        </div>
        <div className={style.myssg_order_claim}>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>취소</span>
            <span
              className={`${style.myssg_claim_count} ${style.ty_zero}`}
              id="cancelClaimCount"
            >
              0
            </span>
            <Link
              href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C16"
              className={style.myssg_claim_link}
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_취소"
            />
          </div>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>교환</span>
            <span
              className={`${style.myssg_claim_count} ${style.ty_zero}`}
              id="exchangeClaimCount"
            >
              0
            </span>
            <Link
              href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C18"
              className={style.myssg_claim_link}
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_교환"
            />
          </div>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>반품</span>
            <span
              className={`${style.myssg_claim_count} ${style.ty_zero}`}
              id="returnClaimCount"
            >
              0
            </span>
            <Link
              href="https://pay.ssg.com/m/myssg/orderInfo.ssg?searchType=6&amp;searchCheckBox=%2C17"
              className={style.myssg_claim_link}
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_반품"
            />
          </div>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>
              구매확정
              <button
                type="button"
                className={`${style.myssg_question_btn} ${style.myssg_modal_btn}`}
                data-morph-target=".myssg_modal_confirm"
              />
            </span>
            <span
              className={`${style.myssg_claim_count} ${style.ty_zero}`}
              id="ordPurchDcsnCnt"
            >
              0
            </span>
            <Link href="/" className={style.myssg_claim_link} />
          </div>
        </div>
        <Link
          href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"
          className={style.myssg_gray_btn}
          data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_보러가기"
        >
          <span className={style.myssg_btn_text}>주문/배송조회 보러가기</span>
        </Link>
        <div data-react-tarea-cd="00014_000000693">
          <div
            className={style.myssg_order_trip}
            data-react-unit-type="text"
            data-react-unit-text='[{"type":"tarea_addt_val","value":"항공권예약"}]'
          >
            <Link
              href="https://m-triip.ssg.com/flight/myssg/rsvtList.ssg"
              className={style.clickable}
              data-react-tarea-dtl-cd="t00060"
            >
              <span className={style.myssg_trip_title}>항공권 예약</span>
              <span className={`${style.myssg_trip_count} ${style.ty_zero}`}>
                0
              </span>
            </Link>
            <Link href="https://m-triip.ssg.com/hotel/myssg/rsvtList.ssg?_mpop=new">
              <span className={style.myssg_trip_title}>호텔 예약</span>
              <span className={`${style.myssg_trip_count} ${style.ty_zero}`}>
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
