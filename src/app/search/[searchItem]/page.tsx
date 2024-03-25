'use client'

import AppBar from '@/components/AppBar'

export default function Page({ params }: { params: { searchItem: string } }) {
  const decodeParams = decodeURI(params.searchItem)
  // setSearchValue(decodeParams)

  return (
    <>
      <AppBar after={false} value={decodeParams} />
      <div>{decodeParams}</div>
    </>
  )
}
