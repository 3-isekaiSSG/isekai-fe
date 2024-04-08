'use client'

import { useState } from 'react'
import style from '@/containers/login/login.module.css'
import OrderDeliveryInput from '@/containers/non-login/OrderDeliveryInput'
import TravelBookInput from '@/containers/non-login/TravelBookInput'

export default function NonLoginForm() {
  const [order, setOrder] = useState<boolean>(true)
  const [travel, setTravel] = useState<boolean>(false)

  return (
    <div className={style.cmem_tabrdo}>
      <form id="noMbrForm">
        <ul className={style.cmem_tabrdo_list} role="tablist">
          <li role="presentation">
            <span
              className={`${style.cmem_inp_rdo} ${order ? style.on : ''}`}
              role="tab"
            >
              <input
                type="radio"
                id="ui_test111"
                value="order"
                name="searchKey"
                className={style.cmem_tabrdo_btn}
                checked={order}
                onChange={() => {
                  setOrder(true)
                  setTravel(false)
                }}
              />
              <label htmlFor="ui_test111">주문/배송 조회</label>
            </span>
          </li>
          <li role="presentation">
            <span
              className={`${style.cmem_inp_rdo} ${travel ? style.on : ''}`}
              role="tab"
            >
              <input
                type="radio"
                id="ui_test222"
                value="trip"
                name="searchKey"
                className={style.cmem_tabrdo_btn}
                checked={travel}
                onChange={() => {
                  setOrder(false)
                  setTravel(true)
                }}
              />
              <label htmlFor="ui_test222">여행 예약 조회</label>
            </span>
          </li>
        </ul>
        <div className={style.cmem_tabrdo_cont}>
          <div className={style.cmem_tabrdo_panel} role="tabpanel">
            {order && <OrderDeliveryInput />}
            {travel && <TravelBookInput />}
          </div>
        </div>
      </form>
    </div>
  )
}
