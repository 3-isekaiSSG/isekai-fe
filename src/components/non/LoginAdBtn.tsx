import style from '@/components/login.module.css'

export default function LoginAdBtn() {
  return (
    <div
      className={`${style.cmem_btn_area} ${style.ty2}`}
      // data-reactingv2-key="00201_000000801|t00000|1"
    >
      <span className={style.cmem_btn_ad}>AD</span>
      <button
        type="submit"
        className={`${style.cmem_btn} ${style.cmem_btn_phone}`}
        // onclick="location.href='https://sepay.org/spm/join?regSiteCode=FA&amp;ctgCode=2'"
        // data-reactingv2-key="00201_000000801|t00060|1"
      >
        휴대폰 간편 로그인
        <span className={style.adver}>광고</span>
      </button>
    </div>
  )
}
