'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { tabState } from './state'

export default function FindHeader() {
  const params = useSearchParams().get('tab')
  const [tab, setTab] = useRecoilState(tabState)
  const onClass =
    'z-10 text-[#222] -mb-px pb-px border-b-0 border-none bg-white before:block'

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
    <ul className="table relative z-10 w-full table-fixed -mb-px border-collapse bg-[#f7f7f7]">
      <li className={`table-cell align-top ${tab.id ? onClass : ''}`}>
        <button
          type="button"
          id="findIdTab"
          className="relative ml-0 block w-full relative h-[49px] border font-bold text-xs leading-[49px] text-[#717171] text-center -ml-px border-solid border-[#dbdbdb]"
          onClick={() => {
            setTab((prevState) => ({
              ...prevState,
              id: true,
              pw: false,
            }))
          }}
        >
          <span
            className="block absolute w-1.5 h-auto bg-[0_-20px] left-full inset-y-0"
            aria-hidden="true"
          />
          아이디 찾기
        </button>
      </li>
      <li className={`table-cell align-top ${tab.pw ? onClass : ''}`}>
        {/* 버튼이고, 클릭해서 해당 탭 class에 on이 추가되면 CSS가 변하도록 */}
        <button
          type="button"
          id="findPwTab"
          className="block relative w-full h-[49px] border font-bold text-xs leading-[49px] text-[#717171] text-center -ml-px border-solid border-[#dbdbdb]"
          onClick={() => {
            setTab((prevState) => ({
              ...prevState,
              id: false,
              pw: true,
            }))
          }}
        >
          <span
            className="block absolute w-1.5 h-auto bg-[0_-20px] left-full inset-y-0"
            aria-hidden="true"
          />
          비밀번호 찾기
        </button>
      </li>
    </ul>
  )
}
