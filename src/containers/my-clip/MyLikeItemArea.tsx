'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import MyLikeFilter from './MyLikeFilter'
import MyLikeItemEdit from './MyLikeItemEdit'
import MyLikeItemInfo from './MyLikeItemInfo'
import MyLikeItemList from './MyLikeItemList'
import Pagination from './Pagination'
import style from './mylike.module.css'
import {
  favoriteCntState,
  favoriteDelListState,
  favoriteListState,
  filterState,
} from './state'

export default function MyLikeItems() {
  const { data: session, status } = useSession()
  const [btnDefault, setBtnDefault] = useState<boolean>(false)
  const filter = useRecoilValue(filterState)
  const [selectedFilter, setSelectedFilter] = useState<
    'product' | 'seller' | 'category'
  >('product')
  const selectedFilterCnt = useRecoilValue(favoriteCntState)[selectedFilter]
  const setFavoriteList = useSetRecoilState(favoriteListState)
  const [page, setPage] = useState<number>(Math.floor(selectedFilterCnt / 15))

  const [deleteCheck, setDeleteCheck] = useState<boolean>(false)
  const favoriteDelList = useRecoilValue(favoriteDelListState)

  const [alert, setAlert] = useRecoilState(AlertState)

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated') {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/members/favorite/${selectedFilter}-list?page=${page}&pageSize=15`,
          {
            method: 'GET',
            headers: {
              Authorization: await session?.user.accessToken,
            },
          },
        )

        const data = await res.json()
        if (res.ok) {
          setFavoriteList(data.content)
        }
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, page])

  useEffect(() => {
    const key = Object.entries(filter).find(([, value]) => value)?.[0] as
      | 'product'
      | 'seller'
      | 'category'
    if (key) {
      setSelectedFilter(key)
    }
  }, [filter])

  useEffect(() => {
    if (deleteCheck) {
      fetch(`${process.env.NEXT_PUBLIC_API}/members/favorite/selects`, {
        method: 'DELETE',
        headers: {
          Authorization: session?.user.accessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favoriteDelList }),
      })

      showAlert('SUCCESS')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteCheck])

  return (
    <>
      <MyLikeFilter />
      <div className={style.mylike_cmitem_wrap}>
        {selectedFilterCnt === 0 ? (
          <div className={style.mylike_cmitem_none}>
            아직 좋아요한 상품이 없습니다.
          </div>
        ) : (
          <>
            <div className={style.mylike_cmitem_modify}>
              {!btnDefault ? (
                <MyLikeItemInfo setBtnDefault={setBtnDefault} />
              ) : (
                <MyLikeItemEdit setBtnDefault={setBtnDefault} />
              )}
            </div>
            <MyLikeItemList />
            <Pagination page={page} setPage={setPage} />
            {btnDefault && (
              <div className="fixed w-full z-[1000] bottom-0">
                <button
                  type="button"
                  className="bg-[var(--m-colors-secondary)] w-1/2 bottom-0 flex-1 h-12 text-white text-lg"
                >
                  폴더에 추가
                </button>
                <button
                  type="button"
                  className="bg-[var(--m-colors-primary)] w-1/2 bottom-0 flex-1 h-12 text-white text-lg"
                  onClick={() => {
                    if (favoriteDelList.length) {
                      showAlert('정말 삭제하시겠습니까?')
                      setDeleteCheck(true)
                    } else {
                      showAlert('삭제할 상품을 선택해주세요.')
                    }
                  }}
                >
                  삭제
                </button>
              </div>
            )}
          </>
        )}
        <Alert isOpen={alert.isOpen} close={closeAlert}>
          {alert.message}
        </Alert>
      </div>
    </>
  )
}
