import Link from 'next/link'

export default function FindHeader() {
  // 얘는 링크에 달아준다.
  // const onClass =
  //   'z-10 text-[#222] -mb-px pb-px border-b-0 border-none bg[#fff]'

  return (
    <ul className="table relative z-10 w-full table-fixed -mb-px border-collapse bg-[#f7f7f7]">
      <li className="table-cell align-top">
        {/* 버튼이다. 왔다갔다만 하도록 하는 boolean 변수로 처리할 예정 */}
        <Link
          href="/"
          id="findPwTab"
          className="relative ml-0 block relative h-[49px] border font-[bold] text-xs leading-[49px] text-[#717171] text-center -ml-px border-solid border-[#dbdbdb] before:"
        >
          <span
            className="block absolute w-1.5 h-auto bg-[0_-20px] left-full inset-y-0"
            aria-hidden="true"
          />
          아이디 찾기
        </Link>
      </li>
      {/* [D] 활성화 상태 */}
      <li className="table-cell align-top">
        {/* 버튼이고, 클릭해서 해당 탭 class에 on이 추가되면 CSS가 변하도록 */}
        <Link
          href="/"
          id="findPwTab"
          className="block relative h-[49px] border font-[bold] text-xs leading-[49px] text-[#717171] text-center -ml-px border-solid border-[#dbdbdb]"
        >
          <span
            className="block absolute w-1.5 h-auto bg-[0_-20px] left-full inset-y-0"
            aria-hidden="true"
          />
          비밀번호 찾기
        </Link>
      </li>
    </ul>
  )
}
