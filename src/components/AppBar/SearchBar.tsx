import Link from 'next/link'
import SearchSvg from './SearchSvg'

export default function SearchBar() {
  return (
    <Link
      href="/search"
      className="flex-1 bg-[color:var(--m-colors-gray150)] h-10 flex justify-end items-center relative ml-5 mr-2.5 rounded-[22px]  "
    >
      <span className="relative -left-2.5">
        <SearchSvg />
      </span>
    </Link>
  )
}
