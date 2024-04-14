import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import { favoriteDelState, productListState } from '@/states/likeAtom'
import MyLikeItemEdit from './MyLikeItemEdit'
import MyLikeItemInfo from './MyLikeItemInfo'
import Pagination from './Pagination'
import ProductCard from './ProductCard'
import style from './mylike.module.css'

interface Props {
  cnt: number
}

export default function ProductList({ cnt }: Props) {
  const [btnDefault, setBtnDefault] = useState(false)
  const [deleteCheck, setDeleteCheck] = useState(false)

  const [alert, setAlert] = useRecoilState(AlertState)

  const productList = useRecoilValue(productListState)
  const favoriteDelList = useRecoilValue(favoriteDelState)
  const { data: session } = useSession()

  const [page, setPage] = useState<number>(Math.floor(cnt / 15))

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  useEffect(() => {
    const deleteData = async () => {
      if (deleteCheck) {
        await fetch(`${process.env.NEXT_PUBLIC_API}/members/favorite/selects`, {
          method: 'DELETE',
          headers: { Authorization: session?.user.accessToken },
          body: JSON.stringify(favoriteDelList),
        })
      }
    }

    deleteData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteCheck])

  return (
    <>
      {cnt ? (
        <>
          <div className={style.mylike_cmitem_modify}>
            {!btnDefault ? (
              <MyLikeItemInfo setBtnDefault={setBtnDefault} />
            ) : (
              <MyLikeItemEdit setBtnDefault={setBtnDefault} cnt={cnt} />
            )}
          </div>

          <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px] px-4">
            {productList.map((item) => (
              <ProductCard
                type={
                  item.division === 'SINGLE_PRODUCT' ? 'products' : 'bundles'
                }
                itemCode={item.identifier}
                btnDefault={btnDefault}
                key={item.favoriteId}
              />
            ))}
          </div>

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
      ) : (
        <div className={style.mylike_cmitem_none}>
          아직 좋아요한 상품이 없습니다.
        </div>
      )}
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
