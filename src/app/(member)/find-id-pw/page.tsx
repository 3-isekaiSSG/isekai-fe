/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '@/components/FindIdPwd/findidpwd.module.css'
import FindHeader from '@/components/FindIdPwd/FindHeader'
import FindIdPwd from '@/components/FindIdPwd'

export default function Page() {
  return (
    <div className={style.m_tabbx}>
      <FindHeader />
      <FindIdPwd />
    </div>
  )
}
