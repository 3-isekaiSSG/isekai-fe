'use client'

import { usePathname } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import style from '@/containers/join-auth/join.module.css'
import { JoinState } from '@/states/joinAtom'

// interface ButtonType {
//   onToggle: (arg0: boolean) => void
// }

export default function CertificateBtn() {
  const pathname = usePathname()
  const openModal = useSetRecoilState(JoinState)

  const handleOpenModal = () => {
    openModal(true)
  }

  return (
    <div
      className={`mx-0 my-[30px] py-0 ${pathname === '/find-idpw' ? '' : 'px-5'}`}
    >
      {pathname === '/find-idpw' ? null : (
        <p className={style.cmem_certi_tit}>
          자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.
        </p>
      )}
      <div className="table table-fixed w-full mt-2.5">
        <span className="table-cell align-top border-l-0 border-l-transparent border-solid">
          <button
            type="button"
            className="block w-full h-[110px] border box-border text-[15px] text-[#222] text-center pt-[18px] border-solid border-[#e0e0e0] bg-[#fff]"
            onClick={handleOpenModal}
          >
            <span
              className="block h-11 w-[35px] bg-[length:83px_44px] bg-[0_0] bg-[url('../../public/images/member/sp_cmem_certi.png')] content-['*'] mt-0 mb-2.5 mx-auto"
              aria-hidden="true"
            />
            휴대폰 인증
          </button>
        </span>
        <span className="table-cell align-top border-l-[7px] border-l-transparent border-solid">
          <button
            type="button"
            className="block w-full h-[110px] border box-border text-[15px] text-[#222] text-center pt-[18px] border-solid border-[#e0e0e0] bg-[#fff]"
          >
            <span
              className="block h-11 w-[46px] bg-[length:83px_44px] bg-[-37px_0] bg-[url('../../public/images/member/sp_cmem_certi.png')] content-[''] mt-0 mb-2.5 mx-auto"
              aria-hidden="true"
            />
            신용/체크카드 인증
          </button>
        </span>
      </div>
      <ul className="mt-5">
        <li className="before:absolute before:w-0.5 before:h-0.5 before:left-0 before:top-2 before:bg-[#666] before:content-[''] relative text-xs leading-[18px] text-[#777] text-left pl-[7px]">
          법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수
          있습니다.
        </li>
        <li className="before:absolute before:w-0.5 before:h-0.5 before:left-0 before:top-2 before:bg-[#666] before:content-[''] relative text-xs leading-[18px] text-[#777] text-left pl-[7px]">
          본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.
          <br />
          <em className="not-italic font-bold">
            NICE평가정보(주) 고객센터 : 1600-1522
            <br />
            코리아크레딧뷰로(주) 고객센터 : 02-708-1000
          </em>
        </li>
      </ul>
    </div>
  )
}
