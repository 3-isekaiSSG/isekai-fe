'use client'

import useQuery from '@/hooks/useQuery'
import { CategoryL, CategoryGrocery, CategoryDepart } from '@/states/category'
import { CategoryType, DeliveryType, IdListType } from '@/types/productType'
import CategoryTab from '../CategoryTab'
import DeliveryList from '../special-price/DeliveryList'
import NoItem from '../special-price/NoItem'
import ProductItem from '../ui/TwoItemProductList'
import Realtime from './Realtime'

// TODO: query에 따라 베스트 상품 가져오기
// 전체 all | 실시간 realtime | 장보기 grocery | 백화점 depart

export default function Ranking() {
  const queryResult = useQuery('ranking')
  const query = queryResult === null ? 'all' : queryResult

  const categoryList: {
    [key: string]: CategoryType[] | []
  } = {
    all: CategoryL,
    grocery: CategoryGrocery,
    depart: CategoryDepart,
  }
  const isMore: {
    [key: string]: boolean
  } = {
    all: true,
    grocery: false,
    depart: false,
  }
  const deliveryList: {
    [key: string]: DeliveryType[] | []
  } = {
    all: [
      {
        id: 1,
        title: '쓱배송 보기',
        url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/emart_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
        selectUrl:
          'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_emart.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      },
      {
        id: 4,
        title: '백화점 상품',
        url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/department_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
        selectUrl:
          'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_department.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      },
    ],
    grocery: [
      {
        id: 1,
        title: '쓱배송 보기',
        url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/emart_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
        selectUrl:
          'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_emart.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      },
    ],
    depart: [],
  }

  // const productItems: IdListType[] | [] = []
  const productItems: IdListType[] | [] = [
    {
      id: 0,
      productId: 0,
    },
    {
      id: 1,
      productId: 1,
    },
    {
      id: 2,
      productId: 2,
    },
  ]

  return (
    <>
      {query === 'realtime' ? (
        <div>
          <Realtime />
        </div>
      ) : (
        <>
          <div className="sticky z-[100] top-[46px] ">
            <CategoryTab data={categoryList[query]} isMore={isMore[query]} />
          </div>
          {deliveryList[query] && (
            <div className="flex items-center justify-between my-2.5 pr-4">
              <DeliveryList data={deliveryList[query]} />
            </div>
          )}
        </>
      )}

      <div>
        {productItems.length ? (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px]">
            {productItems.map((itemId) => (
              <ProductItem key={itemId.id} itemId={itemId.productId} tag="" />
            ))}
          </div>
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
