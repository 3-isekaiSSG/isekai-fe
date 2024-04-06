'use client'

import { useSearchParams } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import style from '@/components/Join/join.module.css'
import { memberInfoState } from '@/components/Join/state'

export default function NameInput() {
  const setMemberInfo = useSetRecoilState(memberInfoState)

  const searchParams = useSearchParams()
  const isParams = searchParams.has('name')
  const name = searchParams.get('name')

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
            {!isParams ? (
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
            ) : (
              <div>{name}</div>
            )}
          </div>
        </dd>
      </dl>
    </div>
  )
}
