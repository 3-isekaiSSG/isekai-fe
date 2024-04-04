'use client'

// import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
// import { tabState } from '@/containers/find-idpw/state'
import style from '@/containers/join-auth/join.module.css'

// interface pathType {
//   id: number
//   pathname: string
//   query1: string
//   query2?: string
// }

export default function AuthInput() {
  const [isCheck, setIsCheck] = useState(false)
  // const router = useRouter()
  // const pathname = usePathname()
  // const tab = useRecoilValue(tabState)
  const [alert, setAlert] = useRecoilState(AlertState)
  // const [userId, setUserId] = useState('')

  const [payload, setPayload] = useState({
    name: '',
    gender: '',
    birth: '',
    nation: '',
    phoneNum: '',
  })

  // const pathList: pathType[] = [
  //   {
  //     id: 1,
  //     pathname: 'find-id-result',
  //     query1: userId,
  //   },
  //   {
  //     id: 2,
  //     pathname: 'pw-reset',
  //     query1: userId,
  //   }
  // ]

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
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

  const sendMessage = () => {
    if (!payload.name) {
      return showAlert('이름을 입력해주세요.')
    }
    if (!payload.gender) {
      return showAlert('성별을 선택해주세요.')
    }
    if (!payload.birth || payload.birth.length !== 8) {
      return showAlert('생년월일 8자리를 정확하게 입력해주세요.\n예) 20100101')
    }
    if (!payload.phoneNum) {
      return showAlert('휴대폰번호를 정확히 입력해주세요.')
    }

    return setIsCheck(true)
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
                  id="userMale"
                  checked={payload.gender === '1'}
                  onChange={handleGender}
                  className="checked:bg-black checked:border-black checked:text-white"
                />
                <span className="block relative min-w-[14px] h-[22px] bg-white border text-sm leading-[22px] text-[#222] text-center z-10 pt-px pb-0 px-2.5 rounded-[13px] border-solid border-[#c6cdd0]">
                  남
                </span>
              </span>
              <span className={style.tag}>
                <input
                  type="radio"
                  id="userFemale"
                  checked={payload.gender === '2'}
                  onChange={handleGender}
                  className="checked:bg-black checked:border-black checked:text-white"
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
        ''
        // <button
        //   className={`${style.btn_base} ${style.btn_apply}`}
        //   id="btnConfirm"
        //   onClick={pathname === 'join-auth' ? router.push(`/join-agree?name`) : ''}
        // >
        //   확인
        // </button>
      )}
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </div>
  )
}
