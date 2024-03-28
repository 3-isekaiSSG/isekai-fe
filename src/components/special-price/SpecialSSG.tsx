/* eslint-disable @typescript-eslint/no-unused-vars */
import { IdListType } from '@/types/productType'
import CategoryTab from '../CategoryTab'
import ImageBanner from '../ImageBanner'
import ItemList from '../ui/OneItemBundleList'
import DeliveryList from './DeliveryList'
import NoItem from './NoItem'

/** TODO: 쿼리로 특가 데이터 받아오기 */
// const getBundleData = async () => {
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }

// TODO: 무한스크롤 어떻게?
export default async function SpecialSSG() {
  // const bundleItems = await getBundleData()
  const bundleItems: IdListType[] | [] = []

  const DeleveryList = [
    {
      id: 1,
      title: '백화점 상품',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/department_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_department.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
  ]
  return (
    <>
      <ImageBanner
        className=""
        alt="쓱특가 강력추천"
        src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0"
        priority
      />
      <div className="sticky z-[100] top-[46px] ">
        {/* <CategoryTab data={CategoryList} isMore /> */}
      </div>
      <div className="flex items-center justify-between my-2.5 pr-4">
        <DeliveryList data={DeleveryList} />
      </div>
      <div>
        {bundleItems.length ? (
          bundleItems.map((itemId) => (
            <ItemList key={itemId.id} itemId={itemId.bundleId} />
          ))
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
