'use client'

import NonSearch from '@/containers/search/NonSearch'
// import OnSearchList from '@/containers/search/OnSearchList'
import SearchInputBar from '@/containers/search/SearchInputBar'
// import { searchValueState } from '@/states/searchAtom'
// import { useRecoilValue } from 'recoil'

export default function SearchPage() {
  // const searchValue = useRecoilValue(searchValueState)

  return (
    <>
      <SearchInputBar />
      <NonSearch />
      {/* {!searchValue ? <NonSearch /> : <OnSearchList />} */}
    </>
  )
}
