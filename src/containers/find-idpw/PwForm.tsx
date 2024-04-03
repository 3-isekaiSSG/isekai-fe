'use client'

import { useState } from 'react'
import CertificateBtn from '@/components/CertificateBtn'
import SimplePwInput from '@/containers/find-idpw/SimplePwInput'

export default function FindPw() {
  const [flag, setFlag] = useState(false)
  const onClass = 'bg-[#666] text-[#d9d9d9]'
  const offClass = 'text-[#555]'

  return (
    <div>
      <div className="mb-[25px]">
        <ul className="table w-full table-fixed border-collapse">
          <li className={`table-cell text-center ${flag ? onClass : offClass}`}>
            <button
              type="button"
              className={`block w-full h-[53px] border text-xs font-bold ${!flag ? '' : 'border-solid border-[#d7d7d7]'}`}
              onClick={() => {
                setFlag(true)
              }}
            >
              <span className="inline-block align-top mt-4">
                신세계포인트 통합회원
              </span>
            </button>
          </li>
          <li
            className={`table-cell text-center ${!flag ? onClass : offClass}`}
          >
            <button
              type="button"
              className={`block w-full h-[53px] border text-xs font-bold ${flag ? '' : 'border-solid border-[#d7d7d7]'}`}
              onClick={() => {
                setFlag(false)
              }}
            >
              <span className="inline-block align-top mt-0">
                간편회원
                <br />
                (이메일/SNS)
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div />
      {flag ? <CertificateBtn /> : <SimplePwInput />}
    </div>
  )
}
