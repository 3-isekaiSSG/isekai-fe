'use client'

import { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/components/Join/join.module.css'
import { memberInfoState } from '@/components/Join/state'

interface PropsData {
  phoneNum: string
  setIsMessage: (value: boolean) => void
  sendMessage: () => void
}

export default function CheckCert({
  phoneNum,
  setIsMessage,
  sendMessage,
}: PropsData) {
  // message 보낸 후, 시간 흐르는 로직
  const [messageMinutes, setMessageMinutes] = useState<number>(3)
  const [messageSeconds, setMessageSeconds] = useState<number>(0)

  // 인증번호
  const [optNo, setOptNo] = useState<string>('')

  // 경고 모달
  const [alert, setAlert] = useRecoilState(AlertState)

  const setMemberInfo = useSetRecoilState(memberInfoState)

  /** 모달 open */
  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }
  /** 모달 close */
  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  /** 인증번호 핸들링 */
  const handleOptNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptNo(e.target.value)
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
            phone: phoneNum,
            verificationNumber: optNo,
          }),
        },
      )

      if (res.status === 200) {
        setMemberInfo((prevState) => ({
          ...prevState,
          phone: phoneNum,
          phoneCert: true,
        }))
        setIsMessage(false)
      }
      return showAlert('인증이 완료되었습니다.')
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

  return (
    <>
      <div className={`${style.cmem_inpbtn_set} ${style.otpNoWrap}`}>
        <span className={style.cmem_inp_txt}>
          <label htmlFor="optNo" className={style.blind}>
            인증번호
          </label>
          <input
            type="text"
            value={optNo}
            autoComplete="off"
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
      <span className={`${style.cmem_noti} ${style.otpNoWrap}`}>
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
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
