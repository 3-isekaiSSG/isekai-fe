import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import style from './mylike.module.css'
import { favoriteCntState, filterState } from './state'

export default function MyLikeFilter() {
  const { data: session, status } = useSession()
  const [filter, setFilter] = useRecoilState(filterState)
  const [favoriteCnt, setFavoriteCnt] = useRecoilState(favoriteCntState)

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated') {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/members/favorite/number`,
          {
            method: 'GET',
            headers: {
              Authorization: await session?.user.accessToken,
            },
          },
        )

        const data = await res.json()
        if (res.ok) {
          setFavoriteCnt({
            product: data.favoriteCountList[0].data,
            seller: data.favoriteCountList[1].data,
            category: data.favoriteCountList[2].data,
          })
        }
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <div className={style.mylike_filter}>
      <div className={style.mylike_filter_hscroll}>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.product ? style.on : ''}`}
          onClick={() => {
            setFilter(() => ({
              product: true,
              seller: false,
              category: false,
            }))
          }}
        >
          상품 ({favoriteCnt.product})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.seller ? style.on : ''}`}
          onClick={() => {
            setFilter(() => ({
              product: false,
              seller: true,
              category: false,
            }))
          }}
        >
          브랜드 ({favoriteCnt.seller})
        </button>
        <button
          type="button"
          className={`${style.mylike_filter_btn} ${filter.category ? style.on : ''}`}
          onClick={() => {
            setFilter(() => ({
              product: false,
              seller: false,
              category: true,
            }))
          }}
        >
          카테고리 ({favoriteCnt.category})
        </button>
      </div>
    </div>
  )
}
