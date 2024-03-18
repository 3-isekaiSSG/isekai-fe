'use client'

import useQuery from '@/hooks/useQuery'
import SpecialSSG from './SpecialSSG'
import SpecialToday from './SpecialToday'
import SpecialAll from './SpecialAll'

// TODO: 특가 상품 전체보기 API 요청

export default function Index() {
  const query = useQuery('special')

  if (query === 'happybuy') {
    return <SpecialSSG />
  }
  if (query === 'obanjang') {
    return <SpecialToday />
  }
  return <SpecialAll />
}
