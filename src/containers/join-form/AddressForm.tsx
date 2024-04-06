'use client'

import { useState } from 'react'
import style from '@/components/Join/join.module.css'

export default function AddressForm() {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  return (
    <div className={style.cmem_row}>
      <div className={style.cmem_user_addr}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
              <label htmlFor="zipcd">
                <span className={style.blind}>필수입력</span>주소
              </label>
            </span>
          </dt>
          <dd>
            <div className={style.cmem_inpbtn_set}>
              <span className={style.cmem_inp_txt}>
                <input
                  type="text"
                  id="zipcd"
                  name="zipcode"
                  readOnly
                  onClick={handleModal}
                />
              </span>
              <button
                type="button"
                className={`${style.cmem_btn} ${style.cmem_btn_gray}`}
                id="btnPostNum"
                onClick={handleModal}
              >
                우편번호<span className={style.blind}>찾기</span>
              </button>
            </div>
            {openModal && (
              <div className={`${style.addr_info} ${style.v2}`} id="addr_info">
                <strong className={style.info_tit}>도로명</strong>
                <span className={style.info_cont}>{}</span>
              </div>
            )}
          </dd>
        </dl>
      </div>
    </div>
  )
}
