'use client'

import Script from 'next/script'

export default function KakaoScript() {
  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      strategy="afterInteractive"
      async
      integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
      crossOrigin="anonymous"
    />
  )
}
