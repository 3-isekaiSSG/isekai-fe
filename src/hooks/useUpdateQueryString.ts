import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useUpdateQueryString() {
  const searchParams = useSearchParams()
  const updateQueryString = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      return params.toString()
    },
    [searchParams],
  )
  return updateQueryString
}
