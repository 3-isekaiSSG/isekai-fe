/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/components/login.module.css'

export default function NonForm() {
  return (
    <div className={style.cmem_login_form}>
      <form
        id="noMbrForm"
        // method="POST"
        // onSubmit="loginNoMbr();return false;"
      >
        <fieldset>
          <div className={style.cmem_inp_area}>
            <span className={style.cmem_inp_txt3}>
              <label htmlFor="mbrNm">
                <span className={style.blind}>주문자명</span>
              </label>
              <input
                type="text"
                id="mbrNm"
                name="mbrNm"
                placeholder="주문자명"
                maxLength={20}
              />
              <button type="button" className={style.inp_clear}>
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                >
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
              </button>
              <span className={`${style.sp_cmem_login} ${style.cmem_ico_ok}`} />
            </span>
            <span className={style.cmem_inp_txt3}>
              <label htmlFor="mbrCntsno">
                <span className={style.blind}>
                  휴대폰번호 (&quot;-&quot; 없이 입력)
                </span>
              </label>
              <input
                type="tel"
                id="mbrCntsno"
                name="mbrCntsno"
                placeholder='휴대폰 번호 ("-" 없이 입력)'
                maxLength={11}
              />
              <button type="button" className={style.inp_clear}>
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                >
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
              </button>
              <span className={`${style.sp_cmem_login} ${style.cmem_ico_ok}`} />
            </span>
            <span className={style.cmem_inp_txt3}>
              <label htmlFor="emailId">
                <span className={style.blind}>이메일 주소</span>
              </label>
              <input
                type="text"
                id="emailId"
                name="emailId"
                placeholder="이메일 주소"
              />
              <button type="button" className={style.inp_clear}>
                <span
                  className={`${style.sp_cmem_login} ${style.cmem_ico_clear}`}
                >
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
              </button>
              <span className={`${style.sp_cmem_login} ${style.cmem_ico_ok}`} />
            </span>
            <div className={style.cmem_inpbtn_set}>
              <span className={style.cmem_inp_txt3}>
                <input
                  type="text"
                  id="zipcd"
                  name="zipcd"
                  placeholder="배송 주소"
                  // readOnly=""
                  // onclick="searchZipcd();"
                />
              </span>
              {/* 우편번호 외부 API */}
              <button
                type="button"
                className={`${style.cmem_btn} ${style.cmem_btn_gray5}`}
                // onclick="searchZipcd();"
              >
                우편번호찾기
              </button>
            </div>
            <div className={style.cmem_user_addr} id="addr_info" />
            <div className={style.cmem_agreement}>
              <span className={style.cmem_inp_chk}>
                <input type="checkbox" id="chg_mem" name="chg_mem" />
                <label htmlFor="chg_mem">[필수]만 14세 이상 고객입니다</label>
              </span>
            </div>
            <div className={style.cmem_btn_area}>
              <ul>
                <li>
                  <button
                    type="button"
                    className={`${style.cmem_btn} ${style.cmem_btn_blkline3}`}
                    // onclick="goCancel();"
                  >
                    취소
                  </button>
                </li>
                <li>
                  <button
                    type="submit"
                    className={`${style.cmem_btn} ${style.cmem_btn_black2}`}
                  >
                    주문하기
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
