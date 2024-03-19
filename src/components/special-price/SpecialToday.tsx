import { IdListType } from '@/types/productType'
import DeliveryList from './DeliveryList'
import NoItem from './NoItem'
import ProductItem from '../ui/TwoItemList'
import SpecialCategoryList from './SpecialCategoryList'

/** TODO: 쿼리로 특가 데이터 받아오기 */
// const getBundleData = async () => {
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }

// TODO: 무한스크롤 어떻게?
export default function SpecialToday() {
  // const bundleItems = await getBundleData()
  // const bundleItems: IdListType[] | [] = []
  const bundleItems: IdListType[] = [
    {
      id: 0,
      bundleId: 0,
    },
    {
      id: 1,
      bundleId: 1,
    },
    {
      id: 2,
      bundleId: 2,
    },
  ]

  const CategoryList = [
    {
      id: 0,
      title: '오반장',
    },
    {
      id: 1,
      title: '전단행사',
    },
    {
      id: 2,
      title: '1+1',
    },
  ]
  const DeleveryList = [
    {
      id: 1,
      title: '쓱배송 보기',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/emart_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_emart.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
    {
      id: 2,
      title: '새벽배송 보기',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/earlymorning_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_earlymorning.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
    {
      id: 3,
      title: '트레이더스 쓱배송 보기',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/traders_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_traders.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
  ]

  return (
    <>
      <div className="sticky z-[100] top-[46px] ">
        <SpecialCategoryList data={CategoryList} isMore={false} />
      </div>
      <div className="flex items-center justify-between my-2.5 pr-4">
        <DeliveryList data={DeleveryList} />
      </div>
      <div>
        {bundleItems.length ? (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px]">
            {bundleItems.map((itemId) => (
              <ProductItem
                key={itemId.id}
                itemId={itemId.bundleId}
                tag="오반장"
              />
            ))}
          </div>
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
