import style from '@/components/login.module.css'
import NonOrderForm from '@/components/forms/NonOrderForm'
import NonBottom from '@/components/NonBottom'

export default function Page() {
  return (
    <div id="m_content" className={style.cmem_ct_nomem}>
      <NonOrderForm />
      <NonBottom />
    </div>
  )
}
