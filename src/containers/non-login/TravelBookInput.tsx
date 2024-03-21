/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/containers/login/login.module.css'
import NonBtn from '@/containers/non-login/NonBtn'

export default function TravelBookInput() {
  return (
    <div className={style.cmem_login_form}>
      <fieldset>
        <div className={style.cmem_inp_area}>
          <span className={style.cmem_inp_txt3}>
            <label htmlFor="mbrNm">
              <span className={style.blind}>예약자명</span>
            </label>
            <input
              type="text"
              id="mbrNm"
              name="mbrNm"
              placeholder="예약자명"
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
            <label htmlFor="orderNo">
              <span className={style.blind}>예약번호(숫자만 입력)</span>
            </label>
            <input
              type="text"
              id="orderNo"
              name="orderNo"
              placeholder="예약번호"
              maxLength={30}
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
        </div>
        <NonBtn />
        <div className={style.cmem_info_list}>
          <ul>
            <li
              value="trip"
              // style="display: none;"
            >
              여행 예약 시 입력한 예약자 정보로 조회가 가능합니다.
            </li>
            <li
              value="trip"
              // style="display: none;"
            >
              패키지/액티비티 상품은 [주문/배송 조회]에서 확인하실 수 있습니다.
            </li>
            <li
              value="trip"
              // style="display: none;"
            >
              예약번호를 모르시는 경우 고객센터(1577-3419)로 문의해주세요.
            </li>
          </ul>
        </div>
      </fieldset>
    </div>
  )
}
