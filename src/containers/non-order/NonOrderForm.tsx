'use client'

import { useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import style from '@/containers/login/login.module.css'
import NonBtn from '@/containers/non-login/NonBtn'

interface Data {
  name: string
  phone: string
  email: string
  zipcode: string
  address: string
  consent: boolean
}

export default function NonOrderForm() {
  const daumurl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  const openModal = useDaumPostcodePopup(daumurl)
  const [payload, setPayload] = useState<Data>({
    name: '',
    phone: '',
    email: '',
    zipcode: '',
    address: '',
    consent: false,
  })

  const handleComplete = (data: { zonecode: string; address: string }) => {
    setPayload((prevState) => ({
      ...prevState,
      zipcode: data.zonecode,
      address: data.address,
    }))
  }

  const handleModal = () => {
    openModal({ onComplete: handleComplete })
  }

  return (
    <div className={style.cmem_login_form}>
      <form id="noMbrForm">
        <div className={style.cmem_inp_area}>
          <span className={style.cmem_inp_txt3}>
            <label htmlFor="mbrNm" className={style.blind}>
              주문자명
            </label>
            <input
              type="text"
              id="mbrNm"
              name="mbrNm"
              placeholder="주문자명"
              maxLength={20}
              autoComplete="off"
              value={payload.name}
              onChange={(e) => {
                setPayload((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }}
            />
            <button type="button" className={style.inp_clear}>
              <span
                className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
              >
                <span className={style.blind}>입력내용 삭제</span>
              </span>
            </button>
            <span className={`${style.sp_cmem_login} ${style.cmem_ico_ok}`} />
          </span>
          <span className={style.cmem_inp_txt3}>
            <label htmlFor="mbrCntsno" className={style.blind}>
              휴대폰번호 (&quot;-&quot; 없이 입력)
            </label>
            <input
              type="tel"
              id="mbrCntsno"
              name="mbrCntsno"
              placeholder='휴대폰 번호 ("-" 없이 입력)'
              autoComplete="off"
              maxLength={11}
              value={payload.phone}
              onChange={(e) => {
                setPayload((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }}
            />
            <button type="button" className={style.inp_clear}>
              <span
                className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
              >
                <span className={style.blind}>입력내용 삭제</span>
              </span>
            </button>
            <span className={`${style.sp_cmem_login} ${style.cmem_ico_ok}`} />
          </span>
          <span className={style.cmem_inp_txt3}>
            <label htmlFor="emailId" className={style.blind}>
              이메일 주소
            </label>
            <input
              type="text"
              id="emailId"
              name="emailId"
              placeholder="이메일 주소"
              autoComplete="off"
              value={payload.email}
              onChange={(e) => {
                setPayload((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }}
            />
            <button type="button" className={style.inp_clear}>
              <span
                className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
              >
                <span className={style.blind}>입력내용 삭제</span>
              </span>
            </button>
            <span className={`${style.sp_cmem_login} ${style.cmem_ico_ok}`} />
          </span>
          {/* 우편번호 외부 API => 이 div 어디를 클릭해도 넘어가야 한다. */}
          <div className={style.cmem_inpbtn_set}>
            <span className={style.cmem_inp_txt3}>
              <label
                htmlFor="zipcd"
                className="overflow-hidden absolute w-px h-px text-[0px]"
              >
                배송 주소
              </label>
              <input
                type="text"
                id="zipcd"
                name="zipcd"
                autoComplete="off"
                placeholder="배송 주소"
                onClick={handleModal}
              />
            </span>
            <button
              type="button"
              className={`${style.cmem_btn} ${style.cmem_btn_gray5}`}
              onClick={handleModal}
            >
              우편번호찾기
            </button>
          </div>
          <div className={style.cmem_user_addr} id="addr_info" />
          <div className={style.cmem_agreement}>
            <span className={style.cmem_inp_chk}>
              <input
                type="checkbox"
                id="chg_mem"
                name="chg_mem"
                autoComplete="off"
                checked={payload.consent}
                onChange={(e) => {
                  setPayload((prevState) => ({
                    ...prevState,
                    consent: e.target.checked,
                  }))
                }}
              />
              <label htmlFor="chg_mem">[필수]만 14세 이상 고객입니다</label>
            </span>
          </div>
          <NonBtn />
        </div>
      </form>
    </div>
  )
}
