import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useUpdateQueryString() {
  const searchParams = useSearchParams()
  const updateQueryString = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString())
      // 값이 있으면 쿼리에 추가 또는 수정
      if (value && params.get(key) === value) {
        params.delete(key)
      } else if (value) {
        params.set(key, value)
      } else {
        // 값이 없으면 해당 쿼리 삭제
        params.delete(key)
      }

      return params.toString()
    },
    [searchParams],
  )
  return updateQueryString
}
