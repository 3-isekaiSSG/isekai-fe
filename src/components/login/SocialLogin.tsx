import Link from 'next/link'

export default function Social() {
  return (
    <ul className="cmem_sns_login">
      <li>
        <Link href="/">
          <span className="ico_area">
            <span className="sp_cmem_sns" />
          </span>
          <span className="cmem_sns_name">네이버</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="ico_area">
            <span className="sp_cmem_sns" />
          </span>
          <span className="cmem_sns_name">카카오</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="ico_area">
            <span className="sp_cmem_sns" />
          </span>
          <span className="cmem_sns_name">애플</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="ico_area">
            <span className="sp_cmem_sns" />
          </span>
          <span className="cmem_sns_name">토스</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="ico_area">
            <span className="sp_cmem_sns" />
          </span>
          <span className="cmem_sns_name">휴대폰</span>
        </Link>
      </li>
    </ul>
  )
}
