'use client'

import Lottie from 'react-lottie-player'
import lottieJson from '@/../public/lotties/ranking.json'

export default function NoRanking() {
  return (
    <div className="h-[80vh]">
      <div className="h-[350px] text-sm tracking-[-0.021em] text-[color:var(--m-colors-gray600)] text-center flex items-center justify-center flex-col">
        <Lottie loop animationData={lottieJson} play style={{ width: '80%' }} />
        <p className="text-2xl font-bold tracking-[-0.02em] text-[color:var(--m-colors-gray900)] -mt-5">
          상품 준비중
        </p>
      </div>
    </div>
  )
}
