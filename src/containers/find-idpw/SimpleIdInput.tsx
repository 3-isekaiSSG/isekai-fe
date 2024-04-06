'use client'

import { useState } from 'react'

export default function SimpleIdInput() {
  const [selected, setSelected] = useState<string>('010')

  return (
    <div>
      <div>
        <p className="relative h-[80px] pt-[54px] text-center text-xs text-[#666] mx-0.5 my-0">
          <span className="inline-block overflow-hidden align-top bg-[length:150px_150px] bg-[0_0] bg-[url('../../public/images/member/sp_login2.png')] text-transparent whitespace-nowrap text-ellipsis absolute w-7 h-[35px] -ml-3.5 left-2/4 top-[15px]">
            &nbsp;
          </span>
          휴대폰
        </p>
      </div>
      <ul className="p-0 h-[80px]">
        <li className="mt-0">
          <span className="block overflow-hidden w-auto pt-2 pb-[7px] px-2 leading-[18px] border tracking-[-1px] shadow-[inset_0_1px_0_rgba(0,0,0,0.07)] rounded-sm border-solid border-[#ccc]">
            <label
              htmlFor="inp_sch3"
              className="overflow-hidden absolute w-px h-px text-[0px]"
            >
              이메일
            </label>
            <input
              type="text"
              id="inp_sch3"
              autoComplete="off"
              placeholder="이름"
              className="w-full text-xs leading-[18px] text-[#767676] align-top border-0 border-none"
            />
          </span>
        </li>
        <li className="mt-2.5">
          <div className="mt-2">
            <div className="table w-full table-fixed">
              <span className="table-cell">
                <span className="h-[34.5px] leading-[36px] block relative w-auto border text-[13px] text-[#666] align-top pl-2 pr-[23px] py-0 rounded-sm border-solid border-[#ccc] bg-[#fff]">
                  <span className="inline-block overflow-hidden max-w-full align-top text-ellipsis whitespace-nowrap font-bold -mr-0.5 pr-0.5 text-[#666]">
                    {selected}
                  </span>
                  <span className="inline-block overflow-hidden text-transparent whitespace-nowrap text-ellipsis align-top bg-[length:250px_1300px] absolute w-2 h-1.5 mt-[-3px] bg-[-35px_-30px] right-2 top-2/4 bg-[url('../../public/images/member/sp_com_rtn2.png')]">
                    &nbsp;
                  </span>
                  <span className="block overflow-hidden absolute opacity-[0.01] inset-0">
                    <select
                      id="hp_num"
                      title="휴대폰번호"
                      className="absolute w-full h-auto inset-0"
                      onChange={(e) => {
                        setSelected(e.target.value)
                      }}
                    >
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                  </span>
                </span>
              </span>
              <span className="table-cell">
                <span className="block overflow-hidden w-auto leading-[18px] border tracking-[-1px] shadow-[inset_0_1px_0_rgba(0,0,0,0.07)] pt-2 pb-[7px] px-2 rounded-sm border-solid border-[#ccc] mx-0.5 my-0">
                  <label
                    htmlFor="hp_middle"
                    className="overflow-hidden absolute w-px h-px text-[0px]"
                  >
                    핸드폰 중간 3~4자리
                  </label>
                  <input
                    type="tel"
                    id="hp_middle"
                    autoComplete="off"
                    maxLength={4}
                    className="w-full text-xs leading-[18px] text-[#767676] align-top border-0 border-none"
                    // numberonly="true"
                  />
                </span>
              </span>
              <span className="table-cell">
                <span className="block overflow-hidden w-auto leading-[18px] border tracking-[-1px] shadow-[inset_0_1px_0_rgba(0,0,0,0.07)] pt-2 pb-[7px] px-2 rounded-sm border-solid border-[#ccc] ml-0.5 mr-0 my-0">
                  <label
                    htmlFor="hp_end"
                    className="overflow-hidden absolute w-px h-px text-[0px]"
                  >
                    핸드폰 끝 4자리
                  </label>
                  <input
                    type="tel"
                    id="hp_end"
                    autoComplete="off"
                    maxLength={4}
                    className="w-full text-xs leading-[18px] text-[#767676] align-top border-0 border-none"
                  />
                </span>
              </span>
            </div>
          </div>
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
