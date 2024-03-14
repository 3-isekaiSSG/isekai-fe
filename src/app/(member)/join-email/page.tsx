import style from '@/components/join.module.css'
import JoinEmail from '@/components/JoinEmail'

export default function Page() {
  return (
    <div className={`${style.m_content} ${style.cmem_ct_join}`}>
      <JoinEmail />
    </div>
  )
}
