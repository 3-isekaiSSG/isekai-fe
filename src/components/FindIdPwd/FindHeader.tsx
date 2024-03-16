import Link from 'next/link'
import style from '@/components/FindIdPwd/findidpwd.module.css'

export default function FindHeader() {
  return (
    <ul className={style.m_tab}>
      <li className="">
        <Link href="/">아이디 찾기</Link>
      </li>
      {/* [D] 활성화 상태 */}
      <li className="on">
        <a href="/" id="findPwTab">
          비밀번호 찾기
        </a>
      </li>
    </ul>
  )
}
