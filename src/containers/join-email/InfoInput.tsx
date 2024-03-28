import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/AlertState'
import style from '@/containers/join-auth/join.module.css'
import { memberInfoState } from './state'

export default function InfoInput() {
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState)
  const [alert, setAlert] = useRecoilState(AlertState)

  const [pwdInput, setPwdInput] = useState(false)
  const [pwd2Input, setPwd2Input] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberInfo((prevState) => ({
      ...prevState,
      password: e.target.value,
    }))

    setPwdInput(e.target.value !== '')
  }

  const handlePwd2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberInfo((prevState) => ({
      ...prevState,
      pwd2: e.target.value,
    }))

    setPwd2Input(e.target.value !== '')
  }

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }
  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  /** 인증번호 발송 로직, 휴대폰 인증과 연결 필요함 */
  async function getDupCheck(arg: string) {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!memberInfo.emailId) {
      return showAlert('아이디를 입력해주세요.')
    }
    if (!regex.test(memberInfo.emailId)) {
      return showAlert(
        '이메일 주소가 올바르지 않습니다. 이메일 주소를 정확하게 입력해주세요.',
      )
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/duplication-id/{input_id}`,
      )

      if (!res.ok) {
        return showAlert(`${res.status}`)
      }

      setIsChecked(true)
      showAlert('사용 가능한 아이디입니다.')
    } catch (err) {
      return err
    }

    if (isChecked) {
      setMemberInfo(() => ({
        ...memberInfo,
        emailId: arg,
      }))
    }

    return setIsChecked(false)
  }

  return (
    <>
      <div className={`${style.cmem_row} ${style.info}`}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
            </span>
            아이디
          </dt>
          <dd>
            <div className={style.cmem_inpbtn_set}>
              <span className={style.cmem_inp_txt}>
                <label htmlFor="email" className={style.blind}>
                  이메일 아이디
                </label>
                <input
                  type="text"
                  maxLength={50}
                  placeholder="이메일주소 입력"
                  onChange={(e) => {
                    setMemberInfo(() => ({
                      ...memberInfo,
                      emailId: e.target.value,
                    }))
                  }}
                />
              </span>
              <button
                type="button"
                className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                aria-label="중복확인"
                onClick={() => getDupCheck(memberInfo.emailId)}
              >
                중복확인
              </button>
            </div>
          </dd>
        </dl>
      </div>
      <div className={style.cmem_row}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
            </span>
            비밀번호
          </dt>
          <dd>
            <div
              className={`${style.cmem_inp_txt} ${pwdInput ? style.writing : ''}`}
            >
              <label htmlFor="pwd" className={style.blind}>
                비밀번호
              </label>
              <input
                type="password"
                maxLength={20}
                placeholder="영문, 숫자 조합 8~20자리"
                value={memberInfo.password}
                onChange={handlePwd}
              />
              <button
                type="button"
                className={style.inp_clear}
                aria-label="입력내용 삭제"
                onClick={() => {
                  setMemberInfo(() => ({
                    ...memberInfo,
                    password: '',
                  }))
                  setPwdInput(false)
                }}
              >
                <span className={style.cmem_ico_clear} />
              </button>
            </div>
            <div
              className={`${style.cmem_inp_txt} ${pwd2Input ? style.writing : ''}`}
            >
              <label htmlFor="pwd2" className={style.blind}>
                비밀번호 재확인
              </label>
              <input
                type="password"
                placeholder="비밀번호 재확인"
                value={memberInfo.pwd2}
                onChange={handlePwd2}
              />
              <button
                type="button"
                className={style.inp_clear}
                aria-label="입력내용 삭제"
                onClick={() => {
                  setMemberInfo(() => ({
                    ...memberInfo,
                    pwd2: '',
                  }))
                  setPwd2Input(false)
                }}
              >
                <span className={style.cmem_ico_clear} />
              </button>
            </div>
          </dd>
        </dl>
      </div>
      <div className={style.cmem_row}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
            </span>
            이름
          </dt>
          <dd>
            <div className={style.cmem_inp_txt}>
              <label htmlFor="name" className={style.blind}>
                이름
              </label>
              <input
                id="name"
                type="text"
                onChange={(e) => {
                  setMemberInfo(() => ({
                    ...memberInfo,
                    emailId: e.target.value,
                  }))
                }}
              />
            </div>
          </dd>
        </dl>
      </div>
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
