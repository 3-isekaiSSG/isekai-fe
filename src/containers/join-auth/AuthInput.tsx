'use client'

import Link from 'next/link'
import { useState } from 'react'
import style from './join.module.css'

export default function AuthInput() {
  const [isCheck, setIsCheck] = useState(false)

  const [payload, setPayload] = useState({
    name: '',
    gender: '',
    birth: '',
    nation: '',
    phoneNum: '',
  })

  const sendMessage = () => {
    if (!payload.name) {
      return alert
    }
    if (!payload.gender) {
      return alert
    }
    if (!payload.birth) {
      return alert
    }
    if (!payload.nation) {
      return alert
    }
    if (!payload.phoneNum) {
      return alert
    }

    return setIsCheck(true)
  }

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      name: e.target.value,
    }))
  }

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      gender: e.target.value,
    }))
  }

  const handleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      birth: e.target.value,
    }))
  }

  const handleNation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      nation: e.target.value,
    }))
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload((prevState) => ({
      ...prevState,
      phoneNum: e.target.value,
    }))
  }

  return (
    <div className={style.m_auth_section}>
      <div className={style.auth_bx}>
        <div className={style.row}>
          <div className={style.column}>
            <span className={style.inp_txt}>
              <input
                type="text"
                id="userName"
                name="name"
                maxLength={50}
                placeholder="이름"
                onChange={handleNameInput}
              />
            </span>
          </div>
          <div className={`${style.column} ${style.gender}`}>
            <span className={style.tag_group}>
              <span className={style.tag}>
                <input
                  type="radio"
                  name="sex"
                  id="userMale"
                  checked={payload.gender === '1'}
                  onChange={handleGender}
                />
                <span className="block relative min-w-[14px] h-[22px] bg-white border text-sm leading-[22px] text-[#222] text-center z-10 pt-px pb-0 px-2.5 rounded-[13px] border-solid border-[#c6cdd0]">
                  남
                </span>
              </span>
              <span className={style.tag}>
                <input
                  type="radio"
                  name="sex"
                  id="userFemale"
                  checked={payload.gender === '2'}
                  onChange={handleGender}
                />
                <span className="block relative min-w-[14px] h-[22px] bg-white border text-sm leading-[22px] text-[#222] text-center z-10 pt-px pb-0 px-2.5 rounded-[13px] border-solid border-[#c6cdd0]">
                  여
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <span className={style.inp_txt}>
              <input
                type="number"
                id="userBirth"
                name="birthday"
                maxLength={8}
                placeholder="생년월일 8자리(예. 20100101)"
                onChange={handleBirth}
              />
            </span>
          </div>
          <div className={`${style.column} ${style.nation}`}>
            <div className={style.custom_sel}>
              <select
                id="userNation"
                name="nation"
                title="내/외국인 선택"
                value={payload.nation}
                onChange={handleNation}
              >
                <option
                  className="font-normal block min-h-[1.2em] whitespace-nowrap pt-0 pb-px px-0.5"
                  value="1"
                  aria-checked="true"
                >
                  내국인
                </option>
                <option
                  className="font-normal block min-h-[1.2em] whitespace-nowrap pt-0 pb-px px-0.5"
                  value="2"
                >
                  외국인
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className={`${style.column} ${style.telecom}`}>
            <div className={style.custom_sel}>
              <select name="telComCd" id="telComCd" title="통신사 선택">
                <option value="01">SKT</option>
                <option value="02">KT</option>
                <option value="03">LG U+</option>
                <option value="04">SKT 알뜰폰</option>
                <option value="05">KT 알뜰폰</option>
                <option value="06">LG U+ 알뜰폰</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <span className={style.inp_txt}>
              <input
                type="tel"
                id="userMobile"
                name="telNo"
                maxLength={11}
                placeholder="-없이 휴대폰번호 입력"
                onChange={handlePhoneInput}
              />
            </span>
          </div>
        </div>
        {/* [D] 인증번호 요청 버튼 클릭시 노출 */}
        {isCheck && (
          <div id="sectionOtp" className={`${style.row} ${style.display}`}>
            <div className={`${style.column} ${style.send_num}`}>
              <span className={style.inp_txt}>
                <input
                  type="tel"
                  id="userAuth"
                  name="otpNo"
                  placeholder="인증번호"
                  maxLength={6}
                />
              </span>
              <button type="button" className={style.btn_send}>
                재전송
              </button>
              <span className={style.time}>
                남은시간 {}:{}
              </span>
            </div>
          </div>
        )}
      </div>
      {!isCheck ? (
        <button
          type="button"
          className={`${style.btn_base} ${style.btn_apply}`}
          id="btnReqOtp"
          onClick={sendMessage}
        >
          인증번호 요청
        </button>
      ) : (
        <Link
          href={{
            pathname: '/join-agree',
            query: { param1: payload.name, param2: payload.phoneNum },
          }}
          className={`${style.btn_base} ${style.btn_apply}`}
          id="btnConfirm"
        >
          확인
        </Link>
      )}
    </div>
  )
}
