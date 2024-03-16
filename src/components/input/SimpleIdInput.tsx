/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import style from '@/components/FindIdPwd/findidpwd.module.css'

export default function SimpleIdInput() {
  return (
    <div
      className={style.f_mem_info}
      // style="display: none;"
    >
      <div className={style.m_chctab_v}>
        <p className={style.ico_btn}>
          <span className={`${style.sp_login2} ${style.ico_hp_v}`}>&nbsp;</span>
          휴대폰
        </p>
      </div>
      <ul className={style.schinp_list}>
        <li>
          <label htmlFor="inp_sch3" className={style.blind}>
            이름
          </label>
          <span className={style.inpbx}>
            <input type="text" name="mbrNm" id="inp_sch3" placeholder="이름" />
          </span>
        </li>
        <li>
          <div className={style.code_bx}>
            <div className={style.cash_codes}>
              <span className={style.itmbx}>
                <span className={style.des_select}>
                  <span className={`${style.cc_ellip_in} ${style.selected}`}>
                    010
                  </span>
                  <span className={`${style.sp_com} ${style.sel_arrow}`}>
                    &nbsp;
                  </span>
                  <span className={style.hide_select}>
                    <select name="hp_num1" id="hp_num" title="휴대폰번호">
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
              <span className={style.itmbx}>
                <span className={style.inpbx}>
                  <input
                    type="tel"
                    name="hp_num2"
                    id="hp_middle"
                    maxLength={4}
                    placeholder=""
                    // numberonly="true"
                  />
                </span>
              </span>
              <span className={style.itmbx}>
                <span className={style.inpbx}>
                  <input
                    type="tel"
                    name="hp_num3"
                    id="hp_end"
                    maxLength={4}
                    placeholder=""
                  />
                </span>
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className={style.bnbox}>
        <Link href="/" data-type="id" className={style.bn_pnk}>
          확인
        </Link>
      </div>
      <div className={style.m_tip}>
        <ul className={style.tip_list}>
          <li>
            <span className={style.bul}>&nbsp;</span>이메일/SNS 간편가입회원은
            휴대폰번호를 통해 아이디를 찾을 수 있습니다.
          </li>
          <li>
            <span className={style.bul}>&nbsp;</span>SSG에서 제공드리는 방법으로
            아이디/비밀번호를 찾으실 수 없는 고객님께서는 SSG
            고객센터(1577-3419)로 연락주시기 바랍니다.
          </li>
        </ul>
      </div>
    </div>
  )
}
