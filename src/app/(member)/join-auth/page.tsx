import style from '@/components/join.module.css'
import CertificateBtn from '@/components/join/CertificateBtn'

export default function Page() {
  return (
    <div className={`${style.m_content} ${style.cmem_ct_join}`}>
      <div className={`${style.cmem_card_tit}`}>
        <h3>본인인증</h3>
      </div>
      <CertificateBtn />
    </div>
  )
}
