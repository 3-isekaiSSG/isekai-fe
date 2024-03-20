/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/components/join.module.css'

export default function IdPwInput() {
  const EmailId = 'Hi'

  return (
    <>
      <div className={`${style.cmem_row} ${style.info}`}>
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
            아이디
          </dt>
          <dd>
            <div className={style.cmem_inpbtn_set}>
              <span className={style.cmem_inp_txt}>
                <input
                  type="text"
                  maxLength={50}
                  placeholder="이메일주소 입력"
                />
              </span>
              <button
                type="button"
                className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
              >
                중복확인
              </button>
              <input type="hidden" value={EmailId} />
            </div>
          </dd>
        </dl>
      </div>
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
            비밀번호
          </dt>
          <dd>
            {/* 입력 중일 때, .cmem_inp_txt에 writing 클래스 추가, 그 외에는 해당 클래스 제거 */}
            {/* 입력완료 시 .cmem_inp_txt에 .ok 클래스 추가, 그 외에는 해당 클래스 제거 */}
            <div className={style.cmem_inp_txt}>
              <input type="text" placeholder="영문, 숫자 조합 8~20자리" />
              {/* <button type="button" className={style.inp_clear}>
                <span className={style.cmem_ico_clear}>
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
              </button>
              <span className={style.cmem_ico_ok} /> */}
            </div>
            <div className={style.cmem_inp_txt}>
              <input type="text" placeholder="비밀번호 재확인" />
              {/* <button type="button" className={style.inp_clear}>
                <span className={style.cmem_ico_clear}>
                  <span className={style.blind}>입력내용 삭제</span>
                </span>
              </button>
              <span className={style.cmem_ico_ok} /> */}
            </div>
          </dd>
        </dl>
      </div>
    </>
  )
}
