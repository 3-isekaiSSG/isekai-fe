import { SpecialItemType } from '@/types/productType'
import SpecialItem from '../home/SpecialItem'
import NoItem from './NoItem'
import DeliveryList from './DeliveryList'
import SpecialCategoryList from './SpecialCategoryList'

export default function SpecialAll() {
  // TODO: 특가 리스트 API 받아오기
  // 그런데, 무한스크롤;

  //   const data = [
  //     {
  //       id: 0,
  //       bundleId: 111,
  //       imageUrl:
  //         'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
  //       vender: '자연맛남',
  //       title: `인기 과일/채소 행사
  // ~32% 할인`,
  //       minPrice: 18900,
  //       isLiked: false,
  //       buyNow: 10000,
  //     },
  //     {
  //       id: 1,
  //       bundleId: 222,
  //       imageUrl:
  //         'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
  //       vender: '자연맛남',
  //       title: `클렌징 오일 / 폼+토너+앰플
  // 쓱1DAY, ~58% OFF`,
  //       minPrice: 18900,
  //       isLiked: false,
  //       isSale: {
  //         rate: 54,
  //         rawPrice: 47700,
  //         salePrice: 21900,
  //       },
  //     },
  //     {
  //       id: 2,
  //       bundleId: 333,
  //       imageUrl:
  //         'https://sitem.ssgcdn.com/75/70/76/spclprc/1000049767075_sp.jpg',
  //       vender: '자연맛남',
  //       title: `온 가족 신발로 추천
  // 추가 쿠폰 혜택`,
  //       minPrice: 18900,
  //       isLiked: false,
  //     },
  //   ]

  const data: SpecialItemType[] | [] = []

  const CategoryList = [
    {
      id: 0,
      title: '전체',
    },
    {
      id: 1,
      title: '패션의류',
    },
    {
      id: 2,
      title: '패션잡화',
    },
    {
      id: 3,
      title: '명품',
    },
    {
      id: 4,
      title: '뷰티',
    },
    {
      id: 5,
      title: '스포츠/레저',
    },
    {
      id: 6,
      title: '생활/주방',
    },
    {
      id: 7,
      title: '가구/인테리어',
    },
    {
      id: 8,
      title: '유아동',
    },
    {
      id: 9,
      title: '디지털/렌탈',
    },
    {
      id: 10,
      title: '여행/e쿠폰/문구/도서',
    },
    {
      id: 11,
      title: '신선식품',
    },
    {
      id: 12,
      title: '가공/건강식품',
    },
    {
      id: 13,
      title: '반려동물',
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
    {
      id: 4,
      title: '백화점 상품',
      url: 'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/department_gray.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
      selectUrl:
        'https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/delivery/oval/stroke_department.svg?q=d0e074aad3aee3ba776c3af1f3848117a67005b4',
    },
  ]
  return (
    <>
      <div className="sticky z-[100] top-[46px] ">
        <SpecialCategoryList data={CategoryList} isMore />
      </div>
      <div className="flex items-center justify-between my-2.5 pr-4">
        <DeliveryList data={DeleveryList} />
      </div>
      <div>{data.length ? <SpecialItem data={data} /> : <NoItem />}</div>
    </>
  )
}
