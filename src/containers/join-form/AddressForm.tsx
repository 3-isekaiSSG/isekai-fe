'use client'

import { useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { useRecoilState } from 'recoil'
import style from '@/components/Join/join.module.css'
import { memberInfoState } from '@/components/Join/state'

export default function AddressForm() {
  const daumurl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  const openModal = useDaumPostcodePopup(daumurl)
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleComplete = (data: { zonecode: string; address: string }) => {
    setMemberInfo((prevState) => ({
      ...prevState,
      zipcode: data.zonecode,
      address: data.address,
    }))
  }

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberInfo((prevState) => ({
      ...prevState,
      detailAddress: e.target.value,
    }))
  }

  const handleModal = () => {
    openModal({ onComplete: handleComplete, onClose: () => setIsOpen(true) })
  }

  return (
    <div className={style.cmem_row}>
      <div className={style.cmem_user_addr}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
              <label htmlFor="zipcd">
                <span className={style.blind}>필수입력</span>주소
              </label>
            </span>
          </dt>
          <dd>
            <div className={style.cmem_inpbtn_set}>
              <span className={style.cmem_inp_txt}>
                <input
                  type="text"
                  id="zipcd"
                  name="zipcode"
                  placeholder={memberInfo.zipcode}
                  readOnly
                  onClick={handleModal}
                />
              </span>
              <button
                type="button"
                className={`${style.cmem_btn} ${style.cmem_btn_gray}`}
                id="btnPostNum"
                onClick={handleModal}
              >
                우편번호<span className={style.blind}>찾기</span>
              </button>
            </div>
            {isOpen && (
              <div className={`${style.addr_info} ${style.v2}`} id="addr_info">
                <strong className={style.info_tit}>도로명</strong>
                <span className={style.info_cont}>
                  {memberInfo.address} {memberInfo.detailAddress}
                </span>
                <span className="block relative bg-white">
                  <label htmlFor="상세주소" className={style.blind}>
                    상세주소
                  </label>
                  <input
                    type="text"
                    id="detailAddress"
                    onChange={handleAddress}
                    className="inline-block w-[20%] h-5 border text-black text-xs align-top box-border px-[11px] py-4 rounded-none border-[#c9c9c9] focus:border focus:border-black"
                  />
                </span>
              </div>
            )}
          </dd>
        </dl>
      </div>
    </div>
  )
}
