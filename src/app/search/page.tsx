'use client'

import SearchInputBar from '@/containers/search/SearchInputBar'
import { useState } from 'react'

export default function SearchPage() {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (value: string) => {
    setInputValue(value)
    // console.log(value)
  }

  return (
    <>
      <SearchInputBar value={inputValue} onInputChange={handleInputChange} />
      {/* 검색 데이터에 따라 바뀌는 내용
      검색어를 받아오려면???????????????????? */}
      {/* 1. 검색어가 없을 때 */}
      <main>{!inputValue ? <div>없슴</div> : <div>{inputValue}</div>}</main>
    </>
  )
}
