import style from '@/components/FindIdPwd/findidpwd.module.css'
// import CertficateBtn from '@/components/CertificateBtn'
import SimpleIdInput from '@/components/input/SimpleIdInput'

export default function FindId() {
  return (
    <div
      className={style.m_con_panel}
      // style="display: none;"
    >
      <div className={style.find_opt}>
        <ul className={style.find_mem_type}>
          <li className="on">
            <a href="/" data-mbr-type="1">
              <span className={style.mem_tit}>신세계포인트 통합회원</span>
            </a>
          </li>
          {/* [D] 활성화 상태 */}
          <li className="">
            <a href="/" data-mbr-type="2">
              <span className={style.mem_tit2}>
                간편회원
                <br />
                (이메일/SNS)
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div
        className={style.f_mem_info}
        // style="display: block;"
      >
        {/* <CertficateBtn /> */}
      </div>
      <SimpleIdInput />
    </div>
  )
}
