'use client'

import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Divider from '@/components/Divider'
import { searchValueState } from '@/states/searchAtom'
import EventCards from './EventCards'
import RecentSearch from './RecentSearch'

export default function NonSearch() {
  const searchValue = useRecoilValue(searchValueState)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!searchValue)
    return (
      mounted && (
        <main className="ml-4">
          <RecentSearch />
          <Divider height={5} color="var(--m-colors-current)" />
          <EventCards />
        </main>
      )
    )

  // 검색어 자동완성
  // return <AutoSearchData />
}
