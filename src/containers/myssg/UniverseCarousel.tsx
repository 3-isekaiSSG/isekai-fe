import Image from 'next/image'
import Link from 'next/link'
import style from './myssg.module.css'

export default function UniverseCarousel() {
  return (
    <div
      className={`${style.swiper_container_banner} ${style.swiper_container_horizontal} ${style.swiper_container_ios}`}
    >
      <ul
        className={style.swiper_wrapper}
        // style="transform: translate3d(-826px, 0px, 0px); transition-duration: 0ms;"
      >
        <li
          className={`${style.swiper_slide} ${style.swiper_slide_prev} ${style.swiper_slide_duplicate_next}`}
          data-swiper-slide-index="0"
          // style="width: 398px; margin-right: 15px;"
        >
          <div
            className={style.myssg_banner}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"text","value": "미가입자 (1) - 문구컨펌안"}]'
          >
            <Link
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_banner_content} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00001"
              data-react-tarea="MYSSG_메인|배너|배너_클릭"
            >
              <div className={style.myssg_banner_img}>
                <Image
                  src="https://sui.ssgcdn.com/cmpt/banner/202307/2023073120483794302955914295_220.png"
                  alt=""
                  fill
                />
              </div>
            </Link>
          </div>
        </li>
        <li
          className={`${style.swiper_slide} ${style.swiper_slide_active}`}
          data-swiper-slide-index="1"
          // style="width: 398px; margin-right: 15px;"
        >
          <div
            className={style.myssg_banner}
            data-react-unit-type="banr"
            data-react-unit-text='[{"type":"text","value": "미가입자 (2) - 문구컨펌안"}]'
          >
            <Link
              href="https://m.ssg.com/membership/gate.ssg"
              className={`${style.myssg_banner_content} ${style.clickable}`}
              data-react-tarea-dtl-cd="t00001"
              data-react-tarea="MYSSG_메인|배너|배너_클릭"
            >
              <div className={style.myssg_banner_img}>
                <Image
                  src="https://sui.ssgcdn.com/cmpt/banner/202307/2023073120492185002872124287_711.png"
                  alt=""
                  fill
                />
              </div>
            </Link>
          </div>
        </li>
      </ul>
      <div className="swiper-pagination swiper-pagination-fraction">
        <span className="swiper-pagination-current">2</span> /{' '}
        <span className="swiper-pagination-total">2</span>
      </div>
    </div>
  )
}
