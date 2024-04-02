export default function SimplePwInput() {
  return (
    <div>
      <div>
        <p className="relative h-[80px] pt-[54px] text-center text-xs text-[#666] mx-0.5 my-0">
          <span className="inline-block overflow-hidden align-top bg-[length:150px_150px] bg-[-87px_-27px] bg-[url('https://sui.ssgcdn.com/ui/m_ssg/img/sp_login_rtn.png')] text-transparent whitespace-nowrap text-ellipsis absolute w-[35px] h-[27px] -ml-3.5 left-2/4 top-[15px]">
            &nbsp;
          </span>
          이메일
        </p>
      </div>
      <ul className="p-0 h-[80px]">
        <li className="mt-0">
          <span className="block overflow-hidden w-auto pt-2 pb-[7px] px-2 leading-[18px] border tracking-[-1px] shadow-[inset_0_1px_0_rgba(0,0,0,0.07)] rounded-sm border-solid border-[#ccc]">
            <input
              type="text"
              name="mbrNm"
              id="inp_sch3"
              placeholder="이메일"
              className="w-full text-xs leading-[18px] text-[#767676] align-top border-0 border-none"
            />
          </span>
        </li>
        <li className="mt-2.5">
          <span className="block overflow-hidden w-auto pt-2 pb-[7px] px-2 leading-[18px] border tracking-[-1px] shadow-[inset_0_1px_0_rgba(0,0,0,0.07)] rounded-sm border-solid border-[#ccc]">
            <input
              type="text"
              name="mbrNm"
              id="inp_sch3"
              placeholder="이름"
              className="w-full text-xs leading-[18px] text-[#767676] align-top border-0 border-none"
            />
          </span>
        </li>
      </ul>
      <div className="w-full mt-[15px] mb-[25px]">
        <button
          type="button"
          data-type="id"
          className="flex w-full h-[46px] font-bold text-lg leading-none text-white tracking-[-1px] text-center shadow-[inset_0_-3px_0_rgba(255,255,255,0.15)] align-top justify-center items-center rounded-[3px] mt-0 bg-[#ff5b7e]"
        >
          확인
        </button>
      </div>
      <div className="bg-[length:2px_1px] text-[11px] relative leading-4 text-[#898989] text-left mt-0 pt-3 pb-0 px-0 bg-[url('../../public/images/member/line_xdot_d9d9d9.gif')] bg-repeat-x">
        <ul className="inline-block text-[11px] leading-4 tracking-[-1px] text-left align-top text-[#898989] mt-0 p-0">
          <li className="relative mt-0 pl-1">
            <span className="inline-block overflow-hidden absolute w-0.5 h-0.5 align-top rounded-sm left-0 top-1.5 bg-[#666]">
              &nbsp;
            </span>
            이메일/SNS 간편가입회원은 휴대폰번호를 통해 아이디를 찾을 수
            있습니다.
          </li>
          <li className="relative mt-1 pl-1">
            <span className="inline-block overflow-hidden absolute w-0.5 h-0.5 align-top rounded-sm left-0 top-1.5 bg-[#666]">
              &nbsp;
            </span>
            SSG에서 제공드리는 방법으로 아이디/비밀번호를 찾으실 수 없는
            고객님께서는 SSG 고객센터(1577-3419)로 연락주시기 바랍니다.
          </li>
        </ul>
      </div>
    </div>
  )
}
