import style from '@/components/join.module.css'

export default function CheckCert() {
  return (
    <>
      <div className={`${style.cmem_inpbtn_set} ${style.otpNoWrap}`}>
        <span className={style.cmem_inp_txt}>
          <input
            id="optNo"
            name="optNo"
            type="text"
            title="인증번호"
            placeholder="인증번호 입력"
          />
        </span>
        <button
          type="button"
          id="resend"
          className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
          // onClick="reqOtp(); return false;"
          // href="javascript:void(0);"
        >
          재발송
        </button>
      </div>
      <span
        className={`${style.cmem_noti} ${style.otpNoWrap}`}
        // style="display: none"
      >
        <em id="remainTime" className={style.auth_code_noti}>
          남은시간<span>3</span>분<span>00</span>초
        </em>
      </span>
      <div
        className={`${style.cmem_btn_area} ${style.otpNoWrap}`}
        // style="display: none"
      >
        <ul>
          <li>
            <button
              type="button"
              className={`${style.cmem_btn} ${style.cmem_btn_blkline}`}
              // onclick="initOtp(); return false;"
              // href="javascript:void(0);"
            >
              <span className={style.notranslate}>취소</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${style.cmem_btn} ${style.cmem_btn_gray}`}
              // onclick="otpCert.chkOtp(); return false;"
              // href="javascript:void(0);"
            >
              <span className={style.notranslate}>확인</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
