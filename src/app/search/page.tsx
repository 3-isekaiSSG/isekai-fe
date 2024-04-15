import AppBar from '@/components/AppBar'
import GoToCart from '@/components/AppBar/GoToCart'
import FloatingBtn from '@/components/FloatingBtn'
import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar'
import NonSearch from '@/containers/search/NonSearch'
import SearchInputBar from '@/containers/search/SearchInputBar'
import NoSearchItem from '@/containers/search/[searchItem]/NoSearchItem'
import SearchResultItem from '@/containers/search/[searchItem]/SearchResultItem'
import { IdCodeType } from '@/types/productType'

async function getSearchResult(search: string): Promise<IdCodeType[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products/search/general?keyword=${search}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getSearchResult', err)
    return []
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const decodeParams = decodeURI(searchParams.search)
  const data = await getSearchResult(searchParams.search)

  if (searchParams.search)
    return (
      <>
        <AppBar after={false} value={decodeParams} />
        {data.length ? (
          <SearchResultItem data={data} />
        ) : (
          <NoSearchItem data={decodeParams} />
        )}

        <Footer />
        <TabBar />
        <FloatingBtn />
      </>
    )

  return (
    <>
      <SearchInputBar>
        <GoToCart />
      </SearchInputBar>
      <NonSearch />
    </>
  )
}
