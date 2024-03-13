/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

export default function Header() {
  return (
    <div className="mcom_tit_renew">
      <h2 className="mcom_tit_txt">
        <Link href="/">로그인</Link>
      </h2>
      <div className="mcom_tit_lft">
        <Link href="javascript:history.back();" />
      </div>
    </div>
  )
}
