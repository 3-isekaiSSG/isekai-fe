import IdForm from './IdForm'
// import PwForm from './PwForm'

export default function FindIdPwd() {
  return (
    <div className="border px-5 py-[26px] border-b-0 border-solid border-[#ddd] bg-[#fff] px-[13px]">
      {/* 아이디 찾기 */}
      <IdForm />
      {/* 비밀번호 찾기 */}
      {/* <PwForm /> */}
    </div>
  )
}
