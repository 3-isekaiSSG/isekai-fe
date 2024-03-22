'use client'

import NonSearch from '@/containers/search/NonSearch'
import SearchInputBar from '@/containers/search/SearchInputBar'
import { searchValueState } from '@/states/searchAtom'
import { useRecoilValue } from 'recoil'

export default function SearchPage() {
  const searchValue = useRecoilValue(searchValueState)

  return (
    <>
      <SearchInputBar />
      {!searchValue ? <NonSearch /> : <div>{searchValue}</div>}
    </>
  )
}
