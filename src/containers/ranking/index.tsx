/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useEffect, useState } from 'react'
import useQuery from '@/hooks/useQuery'
import { CategoryLType, CategoryType } from '@/types/categoryType'
import { CategoryTabType, DeliveryType, IdListType } from '@/types/productType'
import { getCategoryL } from '@/utils/categoryApi'
import CategoryTab from '../../components/CategoryTab'
import DeliveryList from '../../components/special-price/DeliveryList'
import NoItem from '../../components/special-price/NoItem'
import ProductItem from '../../components/ui/TwoItemProductList'
import Realtime from './Realtime'

// TODO: query에 따라 베스트 상품 가져오기
// 전체 all | 실시간 realtime | 장보기 grocery | 백화점 depart

export default function Ranking() {
  const queryResult = useQuery('ranking')
  const query = queryResult === null ? 'all' : queryResult

  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  useEffect(() => {
    async function fetchDate() {
      const data = await getCategoryL()
      setCategoryList(data)
    }

    fetchDate()
  }, [])

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
            <CategoryTab data={categoryList} type="large" />
          </div>
          {deliveryList[query] && <DeliveryList data={deliveryList[query]} />}
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
