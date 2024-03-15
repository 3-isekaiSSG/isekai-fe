import Image from 'next/image'
import styles from './home.module.css'
import MiniTitle from './MiniTitle'

export default function CardSale() {
  const Cards = [
    {
      style: 'ssg',
      title: ['~6.5', '만원'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi76.png&w=40&h=0',
      description: '멤버십가입 3만원할인 ',
      type: 'SSG.COM카드 Edition2 ',
    },
    {
      style: 'samsung',
      title: ['5%'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi06.png&w=40&h=0',
      description: 'SSGPAY 청구할인 ',
      type: '삼성카드 ',
    },
    {
      style: 'hyundai',
      title: ['10%'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi08.png&amp;w=40&amp;h=0',
      description: '록시땅 청구할인 ',
      type: '현대카드 ',
    },
    {
      style: 'shinhan',
      title: ['10%'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi07.png&amp;w=40&amp;h=0',
      description: '추천 브랜드 청구할인 ',
      type: '신한카드 ',
    },
    {
      style: 'kb',
      title: ['10%'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi02.png&amp;w=40&amp;h=0',
      description: '라이브쇼핑 청구할인 ',
      type: 'KB국민카드 ',
    },
    {
      style: 'samsung',
      title: ['5%'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi75.png&amp;w=40&amp;h=0',
      description: '즉시할인 (~2만원) ',
      type: 'SSG.COM 삼성카드 ',
    },
    {
      style: 'samsung',
      title: ['', 'SSG머니 적립'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi75.png&amp;w=40&amp;h=0',
      description: '~10% 적립 혜택 ',
      type: 'SSG.COM 삼성카드 ',
    },
    {
      style: 'shinhan',
      title: ['10', '만원'],
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/common/cmitem_card_bi07.png&amp;w=40&amp;h=0',
      description: '캐시백 혜택 ',
      type: '신세계아울렛 신한카드 ',
    },
  ]
  return (
    <div className="my-2.5 px-4 py-0">
      <MiniTitle
        title="카드 할인받고 즐겁게 쇼핑해요"
        description="SSGPAY로 결제하셔도 혜택 받을 수 있어요"
      />
      <div className="overflow-x-auto flex items-stretch flex-row pt-2.5 pb-5 px-0">
        {Cards.map((card) => (
          <div
            key={card.description}
            className={`${styles.item} ${styles[`${card.style}`]}`}
          >
            <div className="flex items-center justify-between font-bold">
              <div className="max-h-7 overflow-hidden mr-2.5 pb-[3px]">
                <strong className="text-2xl break-all leading-[1.1] font-[bold] mr-0.5">
                  {card.title[0]}
                </strong>
                {card.title[1]}
              </div>
              <Image
                src={card.image}
                alt={card.description}
                width={24}
                height={24}
                priority
              />
            </div>
            <div className="break-all">
              <div className="leading-[17px] overflow-hidden h-[17px]">
                {card.description}
              </div>
              <div className="leading-[14px] overflow-hidden h-3.5 text-xs opacity-60 mt-1">
                {card.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
