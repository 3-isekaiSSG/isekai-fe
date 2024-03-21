/* eslint-disable no-lone-blocks */

'use client'

// e 프로필
// 혜택안내
// 혜택안내(멤버십 미가입자)
import Link from 'next/link'
// import { useState, useRef, useEffect } from 'react'
// import { BenefitList, BenefitType } from './states'
import style from './myssg.module.css'

// export default function BenefitCarousel({
//   onBenefitChange,
// }: {
//   onBenefitChange: (newContent: number) => void
// }) {
//   const benefits = BenefitList
//   const [currentIdx, setCurrentIdx] = useState(0)
//   const isPlaying = useState(true)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)

//   useEffect(() => {
//     onBenefitChange(currentIdx)
//   }, [currentIdx, onBenefitChange])

//   // 드래그 시작 위치, 드래그 중의 위치
//   const [startY, setStartY] = useState(0)
//   const [moveY, setMoveY] = useState(0)

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(() => {
//         setCurrentIdx((prevIdx) => (prevIdx + 1) % benefits.length)
//       }, 3500)
//     }
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current)
//     }
//   }, [isPlaying, currentIdx, moveY])

//   const handleNext = () => {
//     setCurrentIdx((prevIdx) => (prevIdx + 1) % benefits.length)
//   }

//   const handlePrev = () => {
//     setCurrentIdx((prevIdx) => (prevIdx - 1) % benefits.length)
//   }

//   const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
//     setStartY(e.nativeEvent.touches[0].clientY)
//   }

//   const handleTouchEnd = () => {
//     if (moveY > 50) {
//       handlePrev()
//     } else if (moveY < -50) {
//       handleNext()
//     }

//     setMoveY(0)
//   }

//   const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
//     const currentTouchY = e.nativeEvent.touches[0].clientY

//     setMoveY(currentTouchY - startY)
//   }

//   return (
//     <div className={style.myssg_swiper_container}>
//       <ul
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//         style={{
//           transform: '',
//         }}
//       >
//         {benefits.map((benefit: BenefitType) => (
//           <li
//             key={benefit.id}
//             className={`${style.myssg_premium_reivew} ${style.no_prepend_icon}`}
//             // data-react-unit-type="banr"
//             // data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
//             // data-swiper-slide-index="0"
//           >
//             <Link
//               href={benefit.url}
//               className={`${style.myssg_review_promotion} ${style.clickable}`}
//               // data-react-tarea-dtl-cd="t00060"
//               // data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
//             >
//               <span className={style.myssg_reivew_text}>
//                 {benefit.contents[0]}
//                 <span className={style.myssg_primary_text}>
//                   {benefit.contents[1]}
//                 </span>
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default function BenefitCarousel() {
  return (
    <div>
      <ul>
        <li
          className={`${style.myssg_premium_reivew} ${style.no_prepend_icon}`}
          // data-react-unit-type="banr"
          // data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
          // data-swiper-slide-index="0"
        >
          <Link
            href="https://m.ssg.com/membership/gate.ssg"
            className={`${style.myssg_review_promotion} ${style.clickable}`}
            // data-react-tarea-dtl-cd="t00060"
            // data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
          >
            <span className={style.myssg_reivew_text}>
              {' '}
              <span className={style.myssg_primary_text}>
                최대7%쿠폰 5장+스타벅스 별 더블적립 받기
              </span>{' '}
            </span>
          </Link>
        </li>
        <li
          className={`${style.myssg_premium_reivew} ${style.no_prepend_icon}`}
          // data-react-unit-type="banr"
          // data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
          // data-swiper-slide-index="1"
        >
          <Link
            href="https://m.ssg.com/membership/gate.ssg"
            className={`${style.myssg_review_promotion} ${style.clickable}`}
            // data-react-tarea-dtl-cd="t00060"
            // data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
          >
            <span className={style.myssg_reivew_text}>
              유니버스클럽 가입하고
              <span className={style.myssg_primary_text}>
                {' '}
                최대 8만원 혜택받기
              </span>{' '}
            </span>
          </Link>
        </li>
        <li
          className={`${style.myssg_premium_reivew} ${style.no_prepend_icon}`}
          // data-react-unit-type="banr"
          // data-react-unit-text='[{"type":"tarea_addt_val","value":"공지사항"}]'
          // data-swiper-slide-index="2"
        >
          <Link
            href="https://m.ssg.com/myssg/activityMng/custFitInfoReg.ssg?custFitInfoId=2"
            className={`${style.myssg_review_promotion} ${style.clickable}`}
            // data-react-tarea-dtl-cd="t00060"
            // data-react-tarea="MYSSG_메인|스마일클럽_미가입자|공지사항_클릭"
          >
            <span className={style.myssg_reivew_text}>
              맞춤정보 등록하고 상품 &amp; 리뷰 추천 받기
              <span className={style.myssg_primary_text}> </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
