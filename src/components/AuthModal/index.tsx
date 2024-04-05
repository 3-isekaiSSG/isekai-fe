'use client'

import style from '@/containers/join-auth/join.module.css'
import AuthConsent from './AuthConsent'
import AuthInput from './AuthInput'

interface NotiType {
  id: number
  contents: string
}

export default function AuthModal() {
  const NotiList: NotiType[] = [
    {
      id: 1,
      contents: '본인 명의의 휴대폰 정보를 정확히 입력하여 주시기 바랍니다.',
    },
    {
      id: 2,
      contents:
        '타인의 명의를 도용하여 부정인증을 시도한 경우 관련 법령에 따라 처벌(3년 이하의 징역형 또는 1천만원 이하의 벌금형) 받을수 있습니다.',
    },
    {
      id: 3,
      contents: '인증문의 : (주)KCB고객센터(02-708-1000)',
    },
  ]

  return (
    <div className={`${style.m_member_wrap} block`}>
      <div className={style.m_auth_section}>
        <AuthConsent />
        <AuthInput />
      </div>
      <div className={style.m_auth_section}>
        <ul className={style.noti_list}>
          {NotiList.map((item) => {
            return (
              <li key={item.id}>
                <span className={`${style.sp_member} ${style.bul}`}>
                  &nbsp;
                </span>
                {item.contents}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
