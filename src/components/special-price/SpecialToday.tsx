/* eslint-disable @typescript-eslint/no-unused-vars */
import CategoryTab from '@/components/CategoryTab'
import DeliveryTab from '@/components/DeliveryTab'
import TwoItemBundleList from '@/components/ui/TwoItemBundleList'
import { CategoryType } from '@/types/categoryType'
import { IdListType } from '@/types/productType'
import NoItem from './NoItem'

export default function SpecialToday() {
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

  // FIXME: 일단 스태틱
  const categoryList: CategoryType[] = [
    {
      id: 0,
      categoryId: 0,
      name: '오반장',
    },
    {
      id: 1,
      categoryId: 1,
      name: '전단행사',
    },
    {
      id: 2,
      categoryId: 2,
      name: '1+1',
    },
  ]
  const deliveryList = [
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
        <CategoryTab data={categoryList} type="today" />
      </div>
      <DeliveryTab data={deliveryList} />
      <div>
        {bundleItems.length ? (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px]">
            {bundleItems.map((itemId) => (
              <TwoItemBundleList
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
