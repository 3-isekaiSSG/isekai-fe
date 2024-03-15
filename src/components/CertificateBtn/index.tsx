'use client'

import Link from 'next/link'
import style from '@/components/join.module.css'

export default function CertficateBtn() {
  return (
    <div className={style.cmem_certi_area}>
      <p className={style.cmem_certi_tit}>
        자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.
      </p>
      <div className={style.cmem_certi}>
        <span className={style.cmem_certi_item}>
          <Link href="/" className={style.cmem_certi_phone}>
            휴대폰 인증
          </Link>
        </span>
        <span className={style.cmem_certi_item}>
          <Link href="/" className={style.cmem_certi_card}>
            신용/체크카드 인증
          </Link>
        </span>
      </div>
      <ul className={style.cmem_certi_notice}>
        <li>
          법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수
          있습니다.
        </li>
        <li>
          본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.
          <br />
          <em>
            NICE평가정보(주) 고객센터 : 1600-1522
            <br />
            코리아크레딧뷰로(주) 고객센터 : 02-708-1000
          </em>
        </li>
      </ul>
    </div>
  )
}
