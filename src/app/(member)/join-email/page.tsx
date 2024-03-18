import style from '@/components/join.module.css'
import JoinForm from '@/components/forms/JoinForm'

export default function Page() {
  return (
    <div className={`${style.m_content} ${style.cmem_ct_join}`}>
      <JoinForm />
    </div>
  )
}
