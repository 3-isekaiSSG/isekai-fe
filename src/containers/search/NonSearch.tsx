import Divider from '@/components/Divider'
import EventCards from './EventCards'
import RecentSearch from './RecentSearch'

export default function NonSearch() {
  return (
    <main className="ml-4">
      <RecentSearch />
      <Divider height={20} unit="px" color="var(--m-colors-current)" />
      <EventCards />
    </main>
  )
}
