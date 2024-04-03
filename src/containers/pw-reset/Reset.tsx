import { FaLock } from 'react-icons/fa'
import style from '@/containers/pw-reset/reset.module.css'

export default function Reset() {
  return (
    <div className={style.cmem_ct_password}>
      <div className={style.cmem_cont}>
        <div className={style.cmem_change_set}>
          <form id="changePwdForm">
            <dl className={style.cmem_dl} role="presentation">
              <dt className={style.cmem_dt}>
                <span className={style.cmem_dt_tit}>
                  <label htmlFor="password">비밀번호</label>
                </span>
              </dt>
              <dd className={style.cmem_dd}>
                <span className={style.cmem_inp_txt2}>
                  <input
                    type="password"
                    name="newPwd"
                    id="password"
                    title="새로 설정할 비밀번호를 입력해주세요."
                    placeholder="숫자, 영어 조합으로 8~20자리 입력해주세요."
                  />
                </span>
              </dd>
            </dl>
            <dl className={style.cmem_dl} role="presentation">
              <dt className={style.cmem_dt}>
                <span className={style.cmem_dt_tit}>
                  <label htmlFor="password_confirm">비밀번호 확인</label>
                </span>
              </dt>
              <dd className={style.cmem_dd}>
                <span className={style.cmem_inp_txt2}>
                  <input
                    type="password"
                    name="prePwd"
                    id="password_confirm"
                    title="새로 설정할 비밀번호를 재입력해주세요."
                    placeholder="비밀번호를 한 번 더 입력해주세요."
                  />
                </span>
              </dd>
            </dl>
            <div className={style.cmem_btn_area}>
              <button
                type="button"
                id="btn_change"
                className={`${style.cmem_btn} ${style.cmem_btn_orange2}`}
              >
                확인
              </button>
            </div>
          </form>
          <div className={style.cmem_password_infobox}>
            <h4 className={`${style.cmem_password_infotitle} font-bold`}>
              <FaLock className="content-[''] absolute w-[75px] h-[37px] right-0 top-0" />
              소중한 개인정보,
              <br />
              안전하게 관리하세요!
            </h4>
            <ul className={style.cmem_password_infolist}>
              <li>- 영어, 숫자, 특수문자 3가지 조합으로 비밀번호 사용하기</li>
              <li>- 사이트마다 다른 비밀번호 사용하기</li>
              <li>- 개인정보가 포함된 비밀번호 사용하지 않기</li>
              <li>- 동일한 문자 또는 연속된 숫자로 비밀번호 사용하지 않기</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
