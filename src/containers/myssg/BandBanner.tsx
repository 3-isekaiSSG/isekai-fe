import Image from 'next/image'
import Link from 'next/link'
import style from './myssg.module.css'

export default function BandBanner() {
  return (
    <div className={`${style.myssg_banner} ${style.ty_img}`}>
      <Link
        href="https://member.ssg.com/m/myssg/myinfoMng/infoUtlAgree.ssg?menu=infoUtlAgree"
        className={style.myssg_banner_link}
      >
        <Image
          src="https://sui.ssgcdn.com/ui/m_ssg/img/common/banner_omni_agree.jpg"
          alt="자주구매 / FOR YOU / 맘키즈 / VIP 혜택을 받는 가장 빠른 방법 옴니서비스 동의하러가기"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', verticalAlign: 'top' }}
        />
      </Link>
    </div>
  )
}
