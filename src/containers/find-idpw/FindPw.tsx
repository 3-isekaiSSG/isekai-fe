import CertficateBtn from '@/components/CertificateBtn'
import SimplePwdInput from '@/containers/find-idpw/SimplePwdInput'

export default function FindPwd() {
  // const onClass = "text-[#d9d9d9] bg-[#666]"

  return (
    <div>
      <div className="mb-[25px]">
        <ul className="table w-full table-fixed border-collapse">
          <li className="table-cell text-center">
            <a
              href="/"
              data-mbr-type="1"
              className="block h-[53px] border text-xs font-[bold] -ml-px border-solid border-[#d7d7d7]"
            >
              <span className="inline-block align-top mt-4">
                신세계포인트 통합회원
              </span>
            </a>
          </li>
          {/* [D] 선택 시 on 클래스 추가 */}
          <li className="table-cell text-center">
            <a
              href="/"
              data-mbr-type="2"
              className="block h-[53px] border text-xs font-[bold] -ml-px border-solid border-[#d7d7d7]"
            >
              <span className="inline-block align-top mt-[7px]">
                간편회원
                <br />
                (이메일/SNS)
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <CertficateBtn />
      </div>
      <SimplePwdInput />
    </div>
  )
}
