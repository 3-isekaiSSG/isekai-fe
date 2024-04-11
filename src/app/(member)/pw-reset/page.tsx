import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { FaLock } from 'react-icons/fa'
import IdSection from '@/containers/pw-reset/IdSection'
import ResetForm from '@/containers/pw-reset/ResetForm'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return redirect('/')
  }

  return (
    <>
      <div className="px-5 py-[30px] bg-[#f8f8f8]">
        <div className="text-[#222] text-center break-keep">
          <p className="font-bold text-base leading-[1.38]">
            신세계포인트 통합회원 아이디
          </p>
        </div>
        <div className="border mt-[15px] pt-[23px] pb-[25px] px-0 border-[#e0e0e0] bg-[#fff]">
          <IdSection />
        </div>
      </div>
      <div className="px-2.5 py-[50px]">
        <div className="text-[#666] px-5 py-0">
          <ResetForm />
          <div>
            <h4 className="relative border-b-neutral-100 text-lg text-[#222] tracking-[-0.3px] leading-[21px] mb-[15px] pb-2 border-b border-[#f5f5f5] font-bold">
              <FaLock className="content-[''] absolute w-[75px] h-[37px] right-0 top-0" />
              소중한 개인정보,
              <br />
              안전하게 관리하세요!
            </h4>
            <ul className="text-[13px] text-[#222] tracking-[-0.7px] leading-[1.54]">
              <li>- 영어, 숫자, 특수문자 3가지 조합으로 비밀번호 사용하기</li>
              <li className="mt-[5px]">- 사이트마다 다른 비밀번호 사용하기</li>
              <li className="mt-[5px]">
                - 개인정보가 포함된 비밀번호 사용하지 않기
              </li>
              <li className="mt-[5px]">
                - 동일한 문자 또는 연속된 숫자로 비밀번호 사용하지 않기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
