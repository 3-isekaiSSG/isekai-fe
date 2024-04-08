'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/components/Join/join.module.css'
import CheckCert from './CheckCert'

export default function PhoneCert() {
  const router = useRouter()
  /** 휴대폰 앞자리 */
  const [mobileFront, setMobileFront] = useState<string>('010')
  /** 휴대폰 뒷자리 */
  const [mobileBack, setMobileBack] = useState<string>('')

  /** 메시지 전송여부 + 메시지 전송횟수 */
  const [isMessage, setIsMessage] = useState<boolean>(false)
  const [cntMessage, setCntMessage] = useState<number>(0)

  // 경고 모달
  const [alert, setAlert] = useRecoilState(AlertState)

  // 5회 인증 시도 시 disabled
  const [disableTime, setDisableTime] = useState<number>(0)

  const [fetched, setFetched] = useState<boolean>(false)

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
    if (mobileFront === '010') {
      const phoneRegex = /^\d{8}$/
      if (!phoneRegex.test(mobileBack)) {
        return showAlert('휴대폰번호를 정확히 입력해주세요.')
      }
    } else {
      const phoneRegex = /^(\d{7}|\d{8})$/
      if (!phoneRegex.test(mobileBack)) {
        return showAlert('휴대폰번호를 정확히 입력해주세요.')
      }
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
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: `${mobileFront}${mobileBack}`,
          }),
        },
      )

      if (res.status === 409) {
        showAlert('이미 존재하는 회원입니다. 기존 계정에 연결하시겠습니까?')
        return setFetched(true)
      }

      setIsMessage(true)
      setCntMessage(cntMessage + 1)
      return showAlert('인증번호가 발송되었습니다.')
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (disableTime > 0) {
        setDisableTime((prevTime) => prevTime - 1)
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [disableTime])

  useEffect(() => {
    if (!alert.isOpen && fetched) {
      router.push('/login')
    }
  }, [router, alert.isOpen, fetched])

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
                      autoComplete="off"
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
                <CheckCert
                  phoneNum={mobileFront + mobileBack}
                  setIsMessage={setIsMessage}
                  sendMessage={sendMessage}
                />
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
