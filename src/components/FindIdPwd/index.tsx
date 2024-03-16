import style from '@/components/FindIdPwd/findidpwd.module.css'
import FindId from './FindId'
// import FindPwd from './FindPwd'

export default function FindIdPwd() {
  return (
    <div className={`${style.m_conbx} ${style.find_idpw}`}>
      {/* 아이디 찾기 */}
      <FindId />
      {/* 비밀번호 찾기 */}
      {/* <FindPwd /> */}
    </div>
  )
}
