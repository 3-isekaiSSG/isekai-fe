import Link from 'next/link'
import style from '@/containers/join-auth/join.module.css'

export default function SimpleJoin() {
  return (
    <div>
      <div className={style.cmem_card_tit}>
        <h3>간편회원</h3>
      </div>
      <div className={style.cmem_cont}>
        <ul className={style.cmem_sns_login}>
          <li>
            <Link href="/join-email">
              <span className={style.ico_area}>
                <span
                  className={`${style.sp_cmem_sns} ${style.cmem_ico_email}`}
                />
              </span>
              <span className={style.cmem_sns_name}>이메일</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className={style.ico_area}>
                <span
                  className={`${style.sp_cmem_sns} ${style.cmem_ico_naver}`}
                />
              </span>
              <span className={style.cmem_sns_name}>네이버</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className={style.ico_area}>
                <span
                  className={`${style.sp_cmem_sns} ${style.cmem_ico_kakao}`}
                />
              </span>
              <span className={style.cmem_sns_name}>카카오</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className={style.ico_area}>
                <span
                  className={`${style.sp_cmem_sns} ${style.cmem_ico_apple}`}
                />
              </span>
              <span className={style.cmem_sns_name}>애플</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
