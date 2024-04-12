import GoToCart from '@/components/AppBar/GoToCart'
import NonSearch from '@/containers/search/NonSearch'
import SearchInputBar from '@/containers/search/SearchInputBar'

export default function SearchPage() {
  return (
    <>
      <SearchInputBar>
        <GoToCart />
      </SearchInputBar>
      <NonSearch />
    </>
  )
}
