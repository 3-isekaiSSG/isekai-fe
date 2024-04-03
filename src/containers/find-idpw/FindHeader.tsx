'use client'

import { useState } from 'react'

export default function FindHeader() {
  const [idTab, setIdTab] = useState(true)
  const [pwTab, setPwTab] = useState(false)
  const onClass =
    'z-10 text-[#222] -mb-px pb-px border-b-0 border-none bg[#fff]'

  return (
    <ul className="table relative z-10 w-full table-fixed -mb-px border-collapse bg-[#f7f7f7]">
      <li className={`table-cell align-top ${idTab ? onClass : ''}`}>
        {/* 버튼이다. 왔다갔다만 하도록 하는 boolean 변수로 처리할 예정 */}
        <button
          type="button"
          id="findIdTab"
          className="relative ml-0 block w-full relative h-[49px] border font-bold text-xs leading-[49px] text-[#717171] text-center -ml-px border-solid border-[#dbdbdb]"
          onClick={() => {
            setIdTab(true)
            setPwTab(false)
          }}
        >
          <span
            className="block absolute w-1.5 h-auto bg-[0_-20px] left-full inset-y-0"
            aria-hidden="true"
          />
          아이디 찾기
        </button>
      </li>
      <li className={`table-cell align-top ${pwTab ? onClass : ''}`}>
        {/* 버튼이고, 클릭해서 해당 탭 class에 on이 추가되면 CSS가 변하도록 */}
        <button
          type="button"
          id="findPwTab"
          className="block relative w-full h-[49px] border font-bold text-xs leading-[49px] text-[#717171] text-center -ml-px border-solid border-[#dbdbdb]"
          onClick={() => {
            setIdTab(false)
            setPwTab(true)
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
