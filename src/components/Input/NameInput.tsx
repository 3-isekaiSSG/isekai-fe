'use client'

import { useSetRecoilState } from 'recoil'
import style from '@/containers/join-auth/join.module.css'
import { memberInfoState } from '@/containers/join-email/state'

export default function NameInput() {
  const setMemberInfo = useSetRecoilState(memberInfoState)

  return (
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
              autoComplete="false"
              onChange={(e) => {
                setMemberInfo((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }}
            />
          </div>
        </dd>
      </dl>
    </div>
  )
}
