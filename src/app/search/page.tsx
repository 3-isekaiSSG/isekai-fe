'use client'

import { useEffect, useState } from 'react'
import NonSearch from '@/containers/search/NonSearch'
// import OnSearchList from '@/containers/search/OnSearchList'
import SearchInputBar from '@/containers/search/SearchInputBar'
// import { searchValueState } from '@/states/searchAtom'
// import { useRecoilValue } from 'recoil'

export default function SearchPage() {
  // const searchValue = useRecoilValue(searchValueState)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <SearchInputBar />
        <NonSearch />
        {/* {!searchValue ? <NonSearch /> : <OnSearchList />} */}
      </>
    )
  )
}
