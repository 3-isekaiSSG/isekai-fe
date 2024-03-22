import Link from 'next/link'
import styles from '@/containers/search/search.module.css'
import SearchSvg from './SearchSvg'

export default function Search({
  readOnly,
  placeholder = '',
  autoFocus,
}: {
  readOnly: boolean
  placeholder: string
  autoFocus: boolean
}) {
  return (
    <Link
      href="/search"
      className="flex-1 bg-[color:var(--m-colors-gray150)] h-10 flex justify-end items-center relative rounded-[22px]  "
    >
      <label htmlFor="search-input" className="text-[0px]">
        검색
      </label>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        readOnly={readOnly}
        id="search-input"
        className={styles.searchInputNone}
        placeholder={placeholder}
        type="text"
      />
      <span className="relative -left-2.5">
        <SearchSvg />
      </span>
    </Link>
  )
}
