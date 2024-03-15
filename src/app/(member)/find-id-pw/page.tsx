/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link'
import CertficateBtn from '@/components/CertificateBtn'

export default function Page() {
  return (
    <div className="m_tabbx">
      <ul className="m_tab">
        <li className="">
          <Link href="/">아이디 찾기</Link>
        </li>
        {/* [D] 활성화 상태 */}
        <li className="on">
          <a href="/" id="findPwTab">
            비밀번호 찾기
          </a>
        </li>
      </ul>
      <div className="m_conbx find_idpw">
        <div
          className="m_con_panel"
          // style="display: none;"
        >
          <h4 className="blind">아이디 찾기</h4>
          <div className="find_opt">
            <ul className="find_mem_type">
              <li className="on">
                <a href="/" data-mbr-type="1">
                  <span className="mem_tit">신세계포인트 통합회원</span>\
                </a>
              </li>
              {/* [D] 활성화 상태 */}
              <li className="">
                <a href="/" data-mbr-type="2">
                  <span className="mem_tit2">
                    간편회원
                    <br />
                    (이메일/SNS)
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="f_mem_info"
            // style="display: block;"
          >
            <CertficateBtn />
          </div>
          <div
            className="f_mem_info"
            // style="display: none;"
          >
            <div className="m_chctab_v">
              <p className="ico_btn">
                <span className="sp_login2 ico_hp_v">&nbsp;</span>
                휴대폰
              </p>
            </div>
            <ul className="schinp_list">
              <li>
                <label htmlFor="inp_sch3" className="blind">
                  이름
                </label>
                <span className="inpbx">
                  <input
                    type="text"
                    name="mbrNm"
                    id="inp_sch3"
                    placeholder="이름"
                  />
                </span>
              </li>
              <li>
                <div className="code_bx">
                  <div className="cash_codes">
                    <span className="itmbx">
                      <span className="des_select">
                        <span className="cc_ellip_in selected">010</span>
                        <span className="sp_com sel_arrow">&nbsp;</span>
                        <span className="hide_select">
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
                    <span className="itmbx">
                      <span className="inpbx">
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
                    <span className="itmbx">
                      <span className="inpbx">
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
            <div className="bnbox">
              <Link href="/" data-type="id" className="bn_pnk">
                확인
              </Link>
            </div>
            <div className="m_tip">
              <ul className="tip_list">
                <li>
                  <span className="bul">&nbsp;</span>이메일/SNS 간편가입회원은
                  휴대폰번호를 통해 아이디를 찾을 수 있습니다.
                </li>
                <li>
                  <span className="bul">&nbsp;</span>SSG에서 제공드리는 방법으로
                  아이디/비밀번호를 찾으실 수 없는 고객님께서는 SSG
                  고객센터(1577-3419)로 연락주시기 바랍니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="m_con_panel"
          // style="display: block;"
        >
          <h4 className="blind">비밀번호 찾기</h4>
          <div className="find_opt">
            <ul className="find_mem_type">
              <li className="on">
                <a href="/" data-mbr-type="1">
                  <span className="mem_tit">신세계포인트 통합회원</span>
                </a>
              </li>
              {/* [D] 선택 시 on 클래스 추가 */}
              <li className="">
                <a href="/" data-mbr-type="2" id="simple">
                  <span className="mem_tit2">
                    간편회원
                    <br />
                    (이메일/SNS)
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="f_mem_info"
            // style="display: block;"
          >
            <div
              className="f_mem_info"
              // style="display: none;"
            >
              <div className="m_chctab_v">
                <p className="ico_btn">
                  <span className="sp_login ico_email">&nbsp;</span>
                  이메일
                </p>
              </div>
              <ul className="schinp_list">
                <li>
                  <label htmlFor="inp_sch3_1" className="blind">
                    이메일
                  </label>
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
                  <label htmlFor="inp_sch3_2" className="blind">
                    이름
                  </label>
                  <span className="inpbx">
                    <input
                      type="text"
                      name="mbrNm"
                      id="inp_sch3_2"
                      placeholder="이름"
                    />
                  </span>
                </li>
              </ul>
              <div className="bnbox">
                <a href="/" data-type="pwd" className="bn_pnk">
                  확인
                </a>
              </div>
              <div className="m_tip">
                <ul className="tip_list">
                  <li>
                    <span className="bul">&nbsp;</span>
                    이메일/SNS 간편가입회원은 이메일계정을 통해 비밀번호를 찾을
                    수 있습니다.
                  </li>
                  <li>
                    <span className="bul">&nbsp;</span>
                    SSG에서 제공드리는 방법으로 아이디/비밀번호를 찾으실 수 없는
                    고객님께서는 SSG 고객센터(1577-3419)로 연락주시기 바랍니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
