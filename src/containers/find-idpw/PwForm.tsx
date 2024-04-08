'use client'

import { useRecoilState } from 'recoil'
import CertificateBtn from '@/components/CertificateBtn'
import SimplePwInput from '@/containers/find-idpw/SimplePwInput'
import { tabState } from './state'

export default function FindPw() {
  const [tab, setTab] = useRecoilState(tabState)
  const onClass = 'bg-[#666] text-[#d9d9d9]'
  const offClass = 'text-[#555]'

  return (
    <div>
      <div className="mb-[25px]">
        <ul className="table w-full table-fixed border-collapse">
          <li
            className={`table-cell text-center ${!tab.flag ? onClass : offClass}`}
          >
            <button
              type="button"
              className={`block w-full h-[53px] border text-xs font-bold ${tab.flag ? '' : 'border-solid border-[#d7d7d7]'}`}
              onClick={() => {
                setTab((prevState) => ({
                  ...prevState,
                  flag: false,
                }))
              }}
            >
              <span className="inline-block align-top mt-4">
                신세계포인트 통합회원
              </span>
            </button>
          </li>
          <li
            className={`table-cell text-center ${tab.flag ? onClass : offClass}`}
          >
            <button
              type="button"
              className={`block w-full h-[53px] border text-xs font-bold ${tab.flag ? '' : 'border-solid border-[#d7d7d7]'}`}
              onClick={() => {
                setTab((prevState) => ({
                  ...prevState,
                  flag: true,
                }))
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
      {!tab.flag ? <CertificateBtn /> : <SimplePwInput />}
    </div>
  )
}
