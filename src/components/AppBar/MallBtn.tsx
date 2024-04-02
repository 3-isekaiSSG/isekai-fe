import Image from 'next/image'
import { useState } from 'react'
import { Modal } from '@/components/BottomSheet/modal'

export function MallModal() {
  const data = [
    {
      id: 0,
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024020810502359658504423950_576.png&w=120&h=120&edit=c',
      title: '이마트몰',
      desc: '원하는 상품을 원하는 시간에 쓱',
    },
    {
      id: 1,
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024020810505742367755772875_848.png&w=120&h=120&edit=c',
      title: '신세계백화점',
      desc: '신세계의 프리미엄을 그대로 온라인에서',
    },
    {
      id: 2,
      image:
        'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024020810512792523134600413_388.png&w=120&h=120&edit=c',
      title: '신세계몰',
      desc: '다채로운 라이프스타일의 시작',
    },
  ]
  return (
    <>
      <header className="flex flex-col items-center relative bg-[color:var(--m-colors-white)]  rounded-t-2xl before:content-[''] before:w-10 before:min-h-[4px] before:max-h-1 before:bg-[color:var(--m-colors-gray300)] before:border-[color:var(--m-colors-gray150)] before:mt-1 before:mb-2 before:rounded-[0.625rem] mb-1" />
      <div className="max-h-[calc(-64px_+_84vh)] overflow-y-auto overscroll-y-contain px-6 py-0">
        <div className="flex flex-col h-full box-border">
          <div className="py-5">
            <h3 className="leading-[1.2] font-bold text-base">
              어떤 쇼핑을 원하시나요?
            </h3>
            <ul className="pt-1">
              {data.map((item) => (
                <li
                  className="after:content-[''] after:block after:h-px after:bg-[color:var(--m-colors-gray200)] after:m-0"
                  key={item.id}
                >
                  <div className="flex items-center justify-between  py-4">
                    <div className="flex">
                      <div className="mr-3 rounded-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={44}
                          height={44}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-[color:var(--m-colors-gray900)] font-bold">
                          {item.title}
                        </p>
                        <p className="text-[13px] text-[color:var(--m-colors-gray700)] overflow-hidden break-all pt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-8 h-8 leading-[1em] text-[color:var(--m-colors-current)] align-middle m-1"
                      viewBox="0 0 24 24"
                      focusable="false"
                      name="ChevronRightSmallIcon"
                    >
                      <path
                        d="M10.4521 16.536L9.6001 15.684L13.4161 11.868L9.6001 8.05201L10.4521 7.20001L15.1081 11.868L10.4521 16.536Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default function MallBtn() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className="leading-[inherit] h-10 "
        type="button"
        aria-label="몰 목록 보기"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="m-1"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.375 5.68701L7 8.31201L9.625 5.68701"
            stroke="black"
            strokeWidth="1.5"
          />
          <circle cx="7" cy="7" r="6.5" stroke="#FAFAFA" />
        </svg>
      </button>

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <MallModal />
        </Modal>
      )}
    </>
  )
}
