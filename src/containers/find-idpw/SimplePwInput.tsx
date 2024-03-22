/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/components/FindIdPwd/findidpwd.module.css'

export default function SimplePwInput() {
  return (
    <div
      className={style.f_mem_info}
      // style="display: none;"
    >
      <div className="w-6/12 mt-0 mb-[25px] mx-auto">
        <p className="relative h-[26px] text-center text-xs text-[#666] mx-0.5 my-0 pt-[54px]">
          <span className={`${style.sp_login} ${style.ico_email}`}>&nbsp;</span>
          이메일
        </p>
      </div>
      <ul className={style.schinp_list}>
        <li>
          {/* <label htmlFor="inp_sch3_1" className={style.blind}>
            이메일
          </label> */}
          <span className="inpbx">
            <input
              type="text"
              name="email"
              id="inp_sch3_1"
              placeholder="이메일"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </span>
        </li>
        <li>
          {/* <label htmlFor="inp_sch3_2" className="blind">
            이름
          </label> */}
          <span className={style.inpbx}>
            <input
              type="text"
              name="mbrNm"
              id="inp_sch3_2"
              placeholder="이름"
            />
          </span>
        </li>
      </ul>
      <div className={style.bnbox}>
        <a href="/" data-type="pwd" className={style.bn_pnk}>
          확인
        </a>
      </div>
      <div className={style.m_tip}>
        <ul className={style.tip_list}>
          <li>
            <span className={style.bul}>&nbsp;</span>
            이메일/SNS 간편가입회원은 이메일계정을 통해 비밀번호를 찾을 수
            있습니다.
          </li>
          <li>
            <span className={style.bul}>&nbsp;</span>
            SSG에서 제공드리는 방법으로 아이디/비밀번호를 찾으실 수 없는
            고객님께서는 SSG 고객센터(1577-3419)로 연락주시기 바랍니다.
          </li>
        </ul>
      </div>
    </div>
  )
}
