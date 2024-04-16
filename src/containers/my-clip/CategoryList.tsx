import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import LikeBtn from '@/components/Buttons/LikeBtn'
import { categoryListState, favoriteDelState } from '@/states/likeAtom'
import MyLikeItemEdit from './MyLikeItemEdit'
import MyLikeItemInfo from './MyLikeItemInfo'
import Pagination from './Pagination'
import style from './mylike.module.css'

interface Props {
  cnt: number
}

export default function ProductList({ cnt }: Props) {
  const { data: session } = useSession()

  const [btnDefault, setBtnDefault] = useState(false)
  const [deleteCheck, setDeleteCheck] = useState(false)
  const [page, setPage] = useState<number>(Math.floor(cnt / 15))

  const [alert, setAlert] = useRecoilState(AlertState)
  const favoriteDelList = useRecoilValue(favoriteDelState)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryLike, setCategoryLike] = useRecoilState(categoryListState)
  console.log(categoryLike)

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
              <MyLikeItemInfo setBtnDefault={setBtnDefault} edit={false} />
            ) : (
              <MyLikeItemEdit setBtnDefault={setBtnDefault} cnt={cnt} />
            )}
          </div>

          <ul className="px-4">
            {categoryLike.map((item) => (
              <li
                key={item.favoriteId}
                className="flex relative w-full box-border py-[22px] justify-between"
              >
                <div>
                  <span className="font-bold tracking-[-0.3px] text-[#222] mr-1">
                    {item.categoryLName.replaceAll('-', '/')}
                  </span>
                  <i className="relative inline-block w-1.5 h-2.5 ml-[3px] before:content-[''] before:absolute before:w-[5px] before:h-[5px] before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:-ml-0.5 before:border-r-[#222] before:border-t-[#222] before:border-t before:border-solid before:border-r before:scale-x-[1.2] before:scale-y-100 before:left-2/4 before:top-2/4" />
                  <span className="font-bold tracking-[-0.3px] text-[#222] mr-1 ml-1">
                    {item.categoryMName.replaceAll('-', '/')}
                  </span>
                </div>
                <LikeBtn
                  itemId={item?.categoryMName.replaceAll('-', '/')}
                  isLiked
                  likeDivision={item.division}
                />
              </li>
            ))}
          </ul>

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
          폴더에 원하는 항목을 추가해보세요!
        </div>
      )}
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
