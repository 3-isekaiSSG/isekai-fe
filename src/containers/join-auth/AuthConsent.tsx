import React, { useState } from 'react'
import style from './join-auth.module.css'

interface CheckState {
  personal_privacy: boolean
  mobile_terms: boolean
  identification_privacy: boolean
  service_terms: boolean
}

interface ListType {
  id: number
  checked: boolean
  content: string
}

const idKeyMap: { [id: number]: keyof CheckState } = {
  1: 'personal_privacy',
  2: 'mobile_terms',
  3: 'identification_privacy',
  4: 'service_terms',
}

export default function AuthConsent() {
  const [checks, setChecks] = useState<CheckState>({
    personal_privacy: false,
    mobile_terms: false,
    identification_privacy: false,
    service_terms: false,
  })

  const handleCheck = (id: number) => {
    const key = idKeyMap[id]
    setChecks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target

    setChecks({
      personal_privacy: checked,
      mobile_terms: checked,
      identification_privacy: checked,
      service_terms: checked,
    })
  }

  const ListItems: ListType[] = [
    {
      id: 1,
      checked: checks.personal_privacy,
      content: '개인정보 이용 및 제공 동의',
    },
    {
      id: 2,
      checked: checks.mobile_terms,
      content: '통신사 이용약관 동의',
    },
    {
      id: 3,
      checked: checks.identification_privacy,
      content: '고유식별정보 처리 동의',
    },
    {
      id: 4,
      checked: checks.service_terms,
      content: '서비스 이용약관 동의',
    },
  ]

  return (
    <div className={style.m_auth_section}>
      <ul className={style.terms_list}>
        {ListItems.map((item: ListType) => {
          return (
            <li key={item.id} className={style.terms_bx}>
              <span className={style.custom_chk}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <span className="text-[#5d6065]">{item.content}</span>
              </span>
              <button type="button" className={style.btn_terms_more}>
                <span className={style.sp_member}>내용보기</span>
              </button>
            </li>
          )
        })}
        <li className={style.terms_bx}>
          <span className={style.custom_chk}>
            <input type="checkbox" id="chkAll" onChange={handleAllCheck} />
            <span className={style.txt_point}>전체 동의</span>
          </span>
        </li>
      </ul>
    </div>
  )
}
