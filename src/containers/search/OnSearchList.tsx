import { searchValueState } from '@/states/searchAtom'
import { useRecoilValue } from 'recoil'
import Link from 'next/link'

export default function OnSearchList() {
  const searchValue = useRecoilValue(searchValueState)

  return (
    <div className="overflow-hidden pb-4 px-4">
      <ul>
        {/* 검색 결과 리스트 */}
        <li className="h-10 relative after:content-[''] after:block after:h-[0.5px] after:bg-[color:var(--m-colors-gray200)]">
          <Link href={`/search/${searchValue}`}>
            <div className="flex items-center w-full h-full text-sm">
              <div className="flex-1">{searchValue}</div>
              <svg
                className=" w-4 h-4 inline-block leading-[1em] text-[color:var(--m-colors-gray400)] align-middle -rotate-45"
                viewBox="0 0 24 24"
                focusable="false"
                name="ArrowUpIcon"
              >
                <path
                  d="M20.28 10.32L12 2.16003L3.71997 10.32L4.67997 11.28L11.4 4.44003V21.6H12.6V4.44003L19.32 11.28L20.28 10.32Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
