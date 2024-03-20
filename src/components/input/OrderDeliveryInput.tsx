/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/components/login.module.css'
import NonLoginBtn from '@/components/non/NonLoginBtn'

export default function OrderDeliveryInput() {
  return (
    <div className={style.cmem_login_form}>
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
            <label htmlFor="orderNo">
              <span className={style.blind}>주문번호(숫자만 입력)</span>
            </label>
            <input
              type="text"
              id="orderNo"
              name="orderNo"
              placeholder='주문번호("-" 없이 입력)'
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
        <NonLoginBtn />
        <div className={style.cmem_info_list}>
          <ul id="notiUl">
            <li
              value="order"
              // style="display: list-item;"
            >
              상품 주문 시 입력한 주문자 정보로 조회가 가능합니다.
            </li>
            <li
              value="order"
              // style="display: list-item;"
            >
              여행 상품은 [여행 예약 조회]에서 확인하실 수 있습니다.
            </li>
            <li
              value="order"
              // style="display: list-item;"
            >
              주문번호를 모르시는 경우 고객센터(1577-3419)로 문의해주세요.
            </li>
          </ul>
        </div>
      </fieldset>
    </div>
  )
}
