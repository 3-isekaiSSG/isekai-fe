/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link'
import { MdLocationPin } from 'react-icons/md'
import style from './myssg.module.css'

interface StatusType {
  status: number
  statusName: string
  count: number
}

export default function OrderCheck({
  countStatusData,
}: {
  countStatusData: (StatusType | undefined)[]
}) {
  const filteredData = countStatusData
    .slice(0, 6)
    .filter((item) => item?.status !== 3)

  return (
    <div className={`${style.myssg_sec} ${style.myssg_sec_order}`}>
      <div className={style.myssg_sec_conts} id="divMyOrderSecConts">
        <p
          // href="https://pay.ssg.com/m/myssg/orderInfo.ssg?_mpop=new"
          // data-react-tarea="MYSSG|M_MY_SSG_주문배송조회"
          className={`${style.myssg_sec_title} ${style.ty_order} ${style.clickable}`}
        >
          주문/배송 조회
        </p>
        <p
          // href="https://member.ssg.com/m/comm/shpplocList.ssg?_mpop=new"
          className={style.myssg_btn_manage_addr}
        >
          <span className={style.myssg_btn_content}>
            <i className={style.icon_location}>
              <MdLocationPin className="w-[12px] h-[12px]" />
            </i>{' '}
            배송지 관리{' '}
          </span>
        </p>

        <div className={style.myssg_order_process}>
          <ul className={style.myssg_process_list}>
            {filteredData?.map((item) => (
              <li key={item?.status}>
                <span
                  id="ordRcp"
                  className={`${item?.count === 0 && style.ty_zero} ${style.myssg_process_count} `}
                >
                  {item?.count}
                </span>
                <span id="ordRcpTxt" className={style.myssg_process_title}>
                  {item?.statusName}
                </span>
              </li>
            ))}
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
          </div>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>교환</span>
            <span
              className={`${style.myssg_claim_count} ${style.ty_zero}`}
              id="exchangeClaimCount"
            >
              0
            </span>
          </div>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>반품</span>
            <span
              className={`${style.myssg_claim_count} ${style.ty_zero}`}
              id="returnClaimCount"
            >
              0
            </span>
          </div>
          <div className={style.myssg_claim_conts}>
            <span className={style.myssg_claim_title}>
              {countStatusData[countStatusData.length - 1]?.statusName}
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
              {countStatusData[countStatusData.length - 1]?.count}
            </span>
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
