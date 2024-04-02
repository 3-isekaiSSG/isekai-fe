import Link from 'next/link'

export default function Page() {
  return (
    <div className="px-1.5 py-[15px] bg-[#f7f7f7]">
      <ul className="relative border rounded leading-6 text-[#666] px-1.5 py-0 border-solid border-[#ccc]">
        <li>
          <p className="text-xs mb-2.5">고객님께서 가입하신 아이디입니다.</p>
          <p className="res_bx">
            아이디
            <span className="inline-block text-[#222] align-top ml-2.5 font-['Times New Roman']">
              {}
            </span>
          </p>
        </li>
      </ul>
      <ul className="bnbox">
        <li>
          {/* TODO: 받아온 데이터 그대로 비밀번호 재설정으로 넘기기 */}
          <Link href="/pw-reset" className="ml-0 mt-0 mr-[2px] bg-[#808080]">
            비밀번호 재설정
          </Link>
        </li>
        <li>
          <Link href="/login" className="mr-0 mt-0 ml-[2px] bg-[#ff5b7e]">
            로그인
          </Link>
        </li>
      </ul>
    </div>
  )
}
