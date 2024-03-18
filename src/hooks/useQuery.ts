'use client'

import { useSearchParams } from 'next/navigation'

export default function useQuery(name: string) {
  const searchParams = useSearchParams()
  const query = searchParams.get(name)
  const activeTab = query || null
  return activeTab
}
