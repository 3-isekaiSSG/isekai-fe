'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import IdForm from './IdForm'
import PwForm from './PwForm'
import { tabState } from './state'

export default function FindIdPwd() {
  const params = useSearchParams().get('tab')
  const [tab, setTab] = useRecoilState(tabState)

  useEffect(() => {
    if (params === 'pw') {
      setTab((prevState) => ({
        ...prevState,
        id: false,
        pw: true,
      }))
    }
  }, [params, setTab])

  return (
    <div className="border px-5 py-[26px] border-b-0 border-solid border-[#ddd] bg-white px-[13px]">
      {tab.id && <IdForm />}
      {tab.pw && <PwForm />}
    </div>
  )
}
