/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/containers/login/login.module.css'
import OrderDeliveryInput from '@/containers/non-login/OrderDeliveryInput'
// import TravelBookInput from '@/containers/non-login/TravelBookInput'

export default function NonLoginForm() {
  return (
    <div className={style.cmem_tabrdo}>
      <form
        id="noMbrForm"
        // method="POST"
        // onSubmit="loginNoMbr();return false;"
        // data-gtm-form-interact-id="0"
      >
        <ul className={style.cmem_tabrdo_list} role="tablist">
          <li role="presentation">
            {/* 라디오 상태에 따라 on 특성 추가 */}
            <span
              className={style.cmem_inp_rdo}
              role="tab"
              // aria-selected="true"
            >
              <input
                type="radio"
                id="ui_test111"
                value="order"
                name="searchKey"
                className={style.cmem_tabrdo_btn}
                // data-gtm-form-interact-field-id="1"
              />
              <span className="text-[#5e5e65] text-[15px] leading-5">
                주문/배송 조회
              </span>
            </span>
          </li>
          <li role="presentation">
            <span
              className={style.cmem_inp_rdo}
              role="tab"
              // aria-selected="false"
            >
              <input
                type="radio"
                id="ui_test222"
                value="trip"
                name="searchKey"
                className={style.cmem_tabrdo_btn}
                // data-gtm-form-interact-field-id="0"
              />
              <label htmlFor="ui_test222">여행 예약 조회</label>
            </span>
          </li>
        </ul>
        <div className={style.cmem_tabrdo_cont}>
          <div
            className={style.cmem_tabrdo_panel}
            role="tabpanel"
            // style="display: block;"
          >
            <OrderDeliveryInput />
            {/* 라디오 상태에 따라 boolean 변수로 TravelBookInput으로 왔다갔다 하도록 해야 한다. */}
          </div>
        </div>
      </form>
    </div>
  )
}