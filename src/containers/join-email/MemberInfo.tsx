'use client'

import { ChangeEvent, useState } from 'react'
import style from '@/containers/join-auth/join.module.css'
import IdPwInput from '@/containers/join-email/IdPwInput'
import CheckCert from './CheckCert'

export default function MemberInfo() {
  const [name, setName] = useState('')

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const sendMessage = async () => {
    const res = await fetch('duplicate')
    if (res.ok) {
      return res.json()
    }
    return null
  }

  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>회원정보</h3>
      </div>
      <div className={style.cmem_cont}>
        <IdPwInput />
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
                <label htmlFor="name">name</label>
                <input
                  id="name"
                  type="text"
                  onChange={handleName}
                  value={name}
                />
              </div>
            </dd>
          </dl>
        </div>
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
                      <select title="휴대폰 번호 앞자리">
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
                      <input
                        type="tel"
                        title="휴대폰 번호 뒷자리"
                        placeholder="휴대폰 뒷자리"
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
                    {/* 인증번호 로직 */}
                    인증번호 발송
                  </button>
                </div>
                {/* 인증번호 발송 버튼 눌러야 나오도록 구현 */}
                <CheckCert />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
