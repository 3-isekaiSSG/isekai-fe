/* eslint-disable jsx-a11y/label-has-associated-control */
import IdPwInput from '@/components/input/IdPwInput'
import style from '@/components/join.module.css'
import CheckCert from './CheckCert'

export default function MemberInfo() {
  return (
    <>
      <div className={style.cmem_card_tit}>
        <h3>회원정보</h3>
      </div>
      <div className={style.cmem_cont}>
        <IdPwInput />
        <div className={style.cmem_row}>
          <dl className={style.cmem_ip}>
            <dt>
              <span className={style.cmem_require}>
                <span className={style.star} aria-hidden="true">
                  *
                </span>
                <label>
                  <span className={style.blind}>필수입력</span>
                </label>
              </span>
              이름
            </dt>
            <dd>
              <div className={style.cmem_inp_txt}>
                <input type="text" />
              </div>
            </dd>
          </dl>
        </div>
        <div className={style.cmem_row}>
          <div className={style.cmem_user_phone}>
            <dl className={style.cmem_ip}>
              <dt>
                <span className={style.cmem_require}>
                  <span className={style.star} aria-hidden="true">
                    *
                  </span>
                  <label>
                    <span className={style.blind}>필수입력</span>
                  </label>
                </span>
                휴대폰 번호
              </dt>
              <dd>
                <div className={style.phone_num}>
                  <div className={style.cmem_inp_grp}>
                    <span className={`${style.cmem_inp_sel} ${style.v2}`}>
                      <select
                        id="mbrCntsano"
                        name="mbrCntsMobileDto.mbrCntsano"
                        title="휴대폰 번호 앞자리"
                      >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      <span className={style.sel_arr} />
                    </span>
                    <span className={style.space} />
                    <span className={style.cmem_inp_txt}>
                      <input
                        type="tel"
                        id="mobileNoStr"
                        title="휴대폰 번호 뒷자리"
                        placeholder="휴대폰 뒷자리"
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    id="btnReqOtp"
                    type="button"
                    className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                  >
                    {/* 인증번호 로직 */}
                    인증번호 발송
                  </button>
                </div>
                {/* 인증번호 발송 버튼 눌러야 나오도록 구현 */}
                <CheckCert />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
