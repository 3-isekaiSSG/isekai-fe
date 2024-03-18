'use client'

import SpecialSSG from './SpecialSSG'
import SpecialToday from './SpecialToday'
import SpecialAll from './SpecialAll'
import useQuery from '../../hooks/useQuery'

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
