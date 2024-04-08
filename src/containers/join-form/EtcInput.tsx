'use client'

import { useSearchParams } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import style from '@/components/Join/join.module.css'
import { memberInfoState } from '@/components/Join/state'

export default function EtcInput() {
  const phone = useSearchParams().get('phone')
  const setMemberInfo = useSetRecoilState(memberInfoState)

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
                <label htmlFor="mem_hpno">
                  <span className={style.blind}>필수입력</span>휴대폰번호
                </label>
              </span>
            </dt>
            <dd>
              <span className={style.inp_value}>{phone}</span>
            </dd>
          </dl>
        </div>
      </div>
      <div className={style.cmem_row}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
              <label htmlFor="email">
                <span className={style.blind}>필수입력</span>이메일주소
              </label>
            </span>
          </dt>
          <dd>
            <span className={style.cmem_inp_txt}>
              <input
                type="email"
                id="email"
                name="mbrDto.email"
                placeholder="이메일주소"
                maxLength={50}
                autoComplete="false"
                onChange={(e) => {
                  setMemberInfo((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }}
              />
            </span>
          </dd>
        </dl>
      </div>
    </>
  )
}
