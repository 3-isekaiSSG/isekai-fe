import style from '@/components/login.module.css'
import NonLoginForm from '@/components/forms/NonLoginForm'
import NonBottom from '@/components/NonBottom'

export default function Page() {
  return (
    <div id="m_content" className={style.cmem_ct_nomem}>
      <NonLoginForm />
      <NonBottom />
    </div>
  )
}
