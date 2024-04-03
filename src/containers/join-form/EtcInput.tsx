'use client'

import style from '@/containers/join-auth/join.module.css'

export default function EtcInput() {
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
              <span className={style.inp_value}>{}</span>
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
              />
            </span>
          </dd>
        </dl>
      </div>
    </>
  )
}
