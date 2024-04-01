'use client'

import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/containers/join-auth/join.module.css'
import { memberInfoState } from './state'

export default function CheckCert() {
  /** 휴대폰 앞자리 */
  const [mobileFront, setMobileFront] = useState('010')
  /** 휴대폰 뒷자리 */
  const [mobileBack, setMobileBack] = useState('')

  /** 메시지 전송여부 + 메시지 전송횟수 */
  const [isMessage, setIsMessage] = useState(false)
  const [cntMessage, setCntMessage] = useState(0)

  // 경고 모달
  const [alert, setAlert] = useRecoilState(AlertState)

  // message 보낸 후, 시간 흐르는 로직
  const [messageMinutes, setMessageMinutes] = useState(0)
  const [messageSeconds, setMessageSeconds] = useState(0)

  // 5회 인증 시도 시 disabled
  const [disableTime, setDisableTime] = useState(0)

  // 인증번호
  const [optNo, setOptNo] = useState('')

  const setMemberInfo = useSetRecoilState(memberInfoState)

  /** 인증번호 핸들링 */
  const handleOptNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptNo(e.target.value)
  }

  /** 모달 open */
  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }
  /** 모달 close */
  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  /** 유효성 검사 후 인증번호 발송 */
  const sendMessage = async () => {
    // 유효성 검증
    const regex = /^[0-9]*$/
    if (!regex.test(mobileBack)) {
      return showAlert('휴대폰번호를 정확히 입력해주세요.')
    }
    if (mobileFront === '010') {
      if (mobileBack.length !== 8) {
        return showAlert('휴대폰번호를 정확히 입력해주세요.')
      }
    } else if (mobileBack.length > 8 || mobileBack.length < 7) {
      return showAlert('휴대폰번호를 정확히 입력해주세요.')
    }

    // 3번 내지 5번의 인증번호 발송횟수를 초과하면 showAlert, 일정 시간 인증 불가
    if (cntMessage === 5) {
      setCntMessage(cntMessage + 1)
      setDisableTime(180)
      return showAlert(
        '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
      )
    }
    if (cntMessage > 5) {
      return showAlert(
        '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
      )
    }
    if (disableTime) {
      return showAlert(
        '인증번호 발송횟수를 초과하였습니다. 잠시 후 다시 인증을 시도해주세요.',
      )
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/phone-verification/send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: `${mobileFront}${mobileBack}`,
            verificationNumber: 'string',
          }),
        },
      )

      const data = await res.json()
      if (res.status === 200) {
        setIsMessage(true)
        setCntMessage(cntMessage + 1)
        setMessageMinutes(3)
        setMessageSeconds(0)
      }

      return showAlert(data.message)
    } catch (err) {
      return err
    }
  }

  const onConfirm = async () => {
    if (!messageMinutes && !messageSeconds) {
      return showAlert(
        '인증번호 입력시간을 초과하였습니다. 인증번호 재전송 후 다시 입력해주세요.',
      )
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/phone-verification/confirm`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: `${mobileFront}${mobileBack}`,
            verificationNumber: optNo,
          }),
        },
      )

      const data = await res.json()
      if (res.status === 200) {
        setMemberInfo((prevState) => ({
          ...prevState,
          phone: `${mobileFront}${mobileBack}`,
          phoneCert: true,
        }))
        setIsMessage(false)
      }
      return showAlert(data.message)
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (messageSeconds > 0) {
        setMessageSeconds((prevSeconds) => prevSeconds - 1)
      } else if (messageMinutes > 0) {
        setMessageMinutes((prevMinutes) => prevMinutes - 1)
        setMessageSeconds(59)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [messageSeconds, messageMinutes])

  useEffect(() => {
    const countdown = setInterval(() => {
      if (disableTime > 0) {
        setDisableTime((prevTime) => prevTime - 1)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [disableTime])

  return (
    <>
      <div className={style.cmem_row}>
        <div className={style.cmem_user_phone}>
          <dl className={style.cmem_ip}>
            <dt>
              <span className={style.cmem_require}>
                <span className={style.star} aria-hidden="true">
                  *
                </span>
              </span>
              휴대폰 번호
            </dt>
            <dd>
              <div className={style.phone_num}>
                <div className={style.cmem_inp_grp}>
                  <span className={`${style.cmem_inp_sel} ${style.v2}`}>
                    <select
                      title="휴대폰 앞자리"
                      value={mobileFront}
                      onChange={(e) => {
                        setMobileFront(e.target.value)
                      }}
                    >
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                    <span className={style.sel_arr} />
                  </span>
                  <span className={style.space} />
                  <span className={style.cmem_inp_txt}>
                    <label htmlFor="tel" className={style.blind}>
                      휴대폰 뒷자리
                    </label>
                    <input
                      type="tel"
                      placeholder="휴대폰 뒷자리"
                      onFocus={(e) => {
                        setMobileBack(e.target.value)
                      }}
                      onChange={(e) => {
                        setMobileBack(e.target.value)
                      }}
                    />
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                  onClick={sendMessage}
                >
                  인증번호 발송
                </button>
              </div>
              {isMessage ? (
                <>
                  <div
                    className={`${style.cmem_inpbtn_set} ${style.otpNoWrap}`}
                  >
                    <span className={style.cmem_inp_txt}>
                      <label htmlFor="optNo" className={style.blind}>
                        인증번호
                      </label>
                      <input
                        type="text"
                        value={optNo}
                        placeholder="인증번호 입력"
                        onChange={handleOptNo}
                      />
                    </span>
                    <button
                      type="button"
                      className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                      onClick={() => {
                        setMessageMinutes(3)
                        setMessageSeconds(0)
                        sendMessage()
                      }}
                    >
                      재발송
                    </button>
                  </div>
                  <span
                    className={`${style.cmem_noti} ${style.otpNoWrap}`}
                    // style="display: none"
                  >
                    {messageMinutes || messageSeconds ? (
                      <em className={style.auth_code_noti}>
                        남은시간 <span>0{messageMinutes}</span>분
                        <span>{String(messageSeconds).padStart(2, '0')}</span>초
                      </em>
                    ) : (
                      <em className={style.auth_code_noti}>
                        인증번호 재전송 후 다시 입력해주세요.
                      </em>
                    )}
                  </span>
                  <div className={`${style.cmem_btn_area} ${style.otpNoWrap}`}>
                    <ul>
                      <li>
                        <button
                          type="button"
                          className={`${style.cmem_btn} ${style.cmem_btn_blkline}`}
                          onClick={() => {
                            setIsMessage(false)
                            setMessageMinutes(0)
                            setMessageSeconds(0)
                          }}
                        >
                          <span className={style.notranslate}>취소</span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`${style.cmem_btn} ${style.cmem_btn_gray}`}
                          onClick={onConfirm}
                        >
                          <span className={style.notranslate}>확인</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}
            </dd>
          </dl>
        </div>
      </div>
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
