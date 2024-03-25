'use client'

import AppBar from '@/components/AppBar'
import NoSearchItem from '@/containers/search/[searchItem]/NoSearchItem'

export default function Page({ params }: { params: { searchItem: string } }) {
  const decodeParams = decodeURI(params.searchItem)
  // setSearchValue(decodeParams)

  // TODO: 검색 결과 받아오기
  const data = []
  // const data = [
  //   {
  //     id: 1,
  //     pk: 0,
  //   },
  // ]

  return (
    <>
      <AppBar after={false} value={decodeParams} />
      {data.length ? <div>있음</div> : <NoSearchItem data={decodeParams} />}
    </>
  )
}
