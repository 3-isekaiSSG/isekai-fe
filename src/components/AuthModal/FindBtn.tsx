'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/components/Join/join.module.css'
import { tabState } from '@/containers/find-idpw/state'
import { ModalState } from '@/states/authAtom'

interface PropsData {
  payload: {
    name: string
    gender_male: boolean
    gender_female: boolean
    birth: string
    nation: string
    phone: string
  }
  isValid: () => boolean | void
}

export default function FindBtn({ payload, isValid }: PropsData) {
  const router = useRouter()
  const [alert, setAlert] = useRecoilState(AlertState)
  const tab = useRecoilValue(tabState)
  const setModal = useSetRecoilState(ModalState)

  const [isMessage, setIsMessage] = useState<boolean>(false)
  const [cntMessage, setCntMessage] = useState<number>(0)

  // message 보낸 후, 시간 흐르는 로직
  const [messageMinutes, setMessageMinutes] = useState<number>(0)
  const [messageSeconds, setMessageSeconds] = useState<number>(0)

  // 5회 인증 시도 시 disabled
  const [disableTime, setDisableTime] = useState<number>(0)

  const [toJoin, setToJoin] = useState<boolean>(false)

  const [optNo, setOptNo] = useState<string>('')
  const [userId, setUserId] = useState<string>('')

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  const sendMessage = async () => {
    const flag = isValid()
    if (!flag) {
      return null
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/phone-verification/find`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: payload.phone,
          }),
        },
      )

      if (res.status === 200) {
        setIsMessage(true)
        setCntMessage(cntMessage + 1)
        setMessageMinutes(3)
        setMessageSeconds(0)
      }
      if (res.status === 404) {
        showAlert('가입 정보가 없습니다. 회원가입 페이지로 이동하시겠습니까?')
        return setToJoin(true)
      }
    } catch (err) {
      return err
    }

    return null
  }

  const onConfirm = async () => {
    if (!messageMinutes && !messageSeconds) {
      return showAlert(
        '인증번호 입력시간을 초과하였습니다. 인증번호 재전송 후 다시 입력해주세요.',
      )
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/info/id`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: payload.phone,
            verificationNumber: optNo,
          }),
        },
      )

      const data = await res.json()
      if (res.status === 200) {
        showAlert('인증에 성공했습니다.')
        if (!alert.isOpen) {
          return setUserId(data.accountId)
        }
      }
    } catch (err) {
      return err
    }

    return null
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

  useEffect(() => {
    if (toJoin && !alert.isOpen) {
      setModal(false)
      router.push('/join-intro')
    }
    if (userId && !alert.isOpen) {
      setModal(false)
      if (tab.id) {
        router.push(`/find-id-result?result=${userId}`)
      }
      if (tab.pw) {
        router.push(`/pw-reset?result=${userId}`)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toJoin, userId, alert.isOpen])

  return (
    <>
      {isMessage && (
        <div id="sectionOtp" className={`${style.row} ${style.display}`}>
          <div className={`${style.column} ${style.send_num}`}>
            <span className={style.inp_txt}>
              <label
                htmlFor="userAuth"
                className="overflow-hidden absolute w-px h-px text-[0px]"
              >
                인증번호
              </label>
              <input
                type="tel"
                id="userAuth"
                value={optNo}
                autoComplete="off"
                onChange={(e) => {
                  setOptNo(e.target.value)
                }}
                placeholder="인증번호"
                maxLength={6}
              />
            </span>
            <button
              type="button"
              className={style.btn_send}
              onClick={() => {
                setMessageMinutes(3)
                setMessageSeconds(0)
                sendMessage()
              }}
            >
              재전송
            </button>
            {messageMinutes || messageSeconds ? (
              <span className={style.time}>
                남은시간 0{messageMinutes}:
                {String(messageSeconds).padStart(2, '0')}
              </span>
            ) : (
              <span className={style.time}>
                인증번호 유효시간이 초과되었습니다.
              </span>
            )}
          </div>
        </div>
      )}
      {!isMessage ? (
        <button
          type="button"
          className={`${style.btn_base} ${style.btn_apply}`}
          id="btnReqOtp"
          onClick={sendMessage}
        >
          인증번호 요청
        </button>
      ) : (
        <button
          type="button"
          className={`${style.btn_base} ${style.btn_apply}`}
          id="btnConfirm"
          onClick={onConfirm}
        >
          확인
        </button>
      )}
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
