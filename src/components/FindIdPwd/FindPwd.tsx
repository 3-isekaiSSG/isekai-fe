import style from '@/components/FindIdPwd/findidpwd.module.css'
import CertficateBtn from '@/components/CertificateBtn'
import SimplePwdInput from '@/components/input/SimplePwdInput'

export default function FindPwd() {
  return (
    <div
      className={style.m_con_panel}
      // style="display: block;"
    >
      <div className={style.find_opt}>
        <ul className={style.find_mem_type}>
          <li className="on">
            <a href="/" data-mbr-type="1">
              <span className={style.mem_tit}>신세계포인트 통합회원</span>
            </a>
          </li>
          {/* [D] 선택 시 on 클래스 추가 */}
          <li className="">
            <a href="/" data-mbr-type="2" id="simple">
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
        <CertficateBtn />
      </div>
      <SimplePwdInput />
    </div>
  )
}
