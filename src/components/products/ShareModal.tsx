'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { shareToKakao } from '@/utils/kakaoShareApi'

interface ShareProps {
  isOpen: boolean
  close: () => void
  title: string | undefined
  imgUrl: string | null
  redirectUrl: string
}

export default function ShareBtn({
  isOpen,
  close,
  title,
  imgUrl,
  redirectUrl,
}: ShareProps) {
  const elRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    elRef.current = document.createElement('div')
    if (elRef.current) {
      document.body.appendChild(elRef.current)
    }

    return () => {
      if (elRef.current) {
        document.body.removeChild(elRef.current)
      }
    }
  }, [])

  if (!isOpen || !elRef.current) return null

  return createPortal(
    <div
      className="block fixed z-[3100] box-border bg-[rgba(0,0,0,0.7)] pt-14 pb-[25px] px-5 inset-0"
      aria-hidden="false"
    >
      <div className="max-h-[587.645px] top-[223px] relative flex w-full max-h-full flex-col bg-white box-border">
        <h2 className="text-[22px] font-normal leading-tight text-black mx-2.5 my-0 pt-[18px] pb-1.5 px-0 border-b-black border-b border-solid bg-white">
          SNS 공유
        </h2>
        <div className="overflow-hidden max-h-full text-xs text-[#5d6065] pt-[15px] pb-0 px-[15px]">
          <div className="pb-[27px]">
            <ul className="text-center px-0 py-2.5">
              <li className="inline-block w-[35px] h-[35px] align-top mx-0.5">
                <button
                  type="button"
                  onClick={() => shareToKakao({ title, imgUrl, redirectUrl })}
                  className="block w-[35px] h-[35px] bg-[url(https://sui.ssgcdn.com/ui/m_ssg/img/common/sp_sns.png)] bg-no-repeat bg-[length:275px_100px] bg-[0_0]"
                  title="카카오톡"
                >
                  <span className="overflow-hidden absolute w-px h-px leading-[0] text-[0px]">
                    카카오톡
                  </span>
                </button>
              </li>
              <li className="inline-block w-[35px] h-[35px] align-top mx-0.5">
                <button
                  type="button"
                  // onClick="facebook_share_new('오랄비 칫솔 프로 엑스퍼트 프로 플렉스 4개입','[SSG.COM]','https://sitem.ssgcdn.com/69/43/43/item/0000008434369_i1_240.jpg','','https://m.ssg.com/item/itemView.ssg?itemId=0000008434369&amp;siteNo=6001&amp;salestrNo=2116','ITEM_VIEW')"
                  className="block w-[35px] h-[35px] bg-[url(https://sui.ssgcdn.com/ui/m_ssg/img/common/sp_sns.png)] bg-no-repeat bg-[length:275px_100px] bg-[-80px_0]"
                  title="페이스북"
                >
                  <span className="overflow-hidden absolute w-px h-px leading-[0] text-[0px]">
                    페이스북
                  </span>
                </button>
              </li>
              <li className="inline-block w-[35px] h-[35px] align-top mx-0.5">
                <button
                  type="button"
                  // onClick="twitter_share_new('[SSG.COM]','오랄비 칫솔 프로 엑스퍼트 프로 플렉스 4개입','','https://m.ssg.com/item/itemView.ssg?itemId=0000008434369&amp;siteNo=6001&amp;salestrNo=2116','ITEM_VIEW')"
                  className="block w-[35px] h-[35px] bg-[url(https://sui.ssgcdn.com/ui/m_ssg/img/common/sp_sns.png)] bg-no-repeat bg-[length:275px_100px] bg-[-120px_0]"
                  title="트위터"
                >
                  <span className="overflow-hidden absolute w-px h-px leading-[0] text-[0px]">
                    트위터
                  </span>
                </button>
              </li>
              <li className="inline-block w-[35px] h-[35px] align-top mx-0.5">
                <button
                  type="button"
                  // onClick="smsShare('오랄비 칫솔 프로 엑스퍼트 프로 플렉스 4개입','[SSG.COM]','https://sitem.ssgcdn.com/69/43/43/item/0000008434369_i1_240.jpg','https://m.ssg.com/item/itemView.ssg?itemId=0000008434369&amp;siteNo=6001&amp;salestrNo=2116','ITEM_VIEW')"
                  className="block w-[35px] h-[35px] bg-[url(https://sui.ssgcdn.com/ui/m_ssg/img/common/sp_sns.png)] bg-no-repeat bg-[length:275px_100px] bg-[-200px_0]"
                  title="SMS 발송"
                >
                  <span className="overflow-hidden absolute w-px h-px leading-[0] text-[0px]">
                    SMS 발송
                  </span>
                </button>
              </li>
              <li className="inline-block w-[35px] h-[35px] align-top mx-0.5">
                <button
                  type="button"
                  // onClick="snsUrl_new('오랄비 칫솔 프로 엑스퍼트 프로 플렉스 4개입','[SSG.COM]','https://sitem.ssgcdn.com/69/43/43/item/0000008434369_i1_240.jpg','https://m.ssg.com/item/itemView.ssg?itemId=0000008434369&amp;siteNo=6001&amp;salestrNo=2116','ITEM_VIEW', this);"
                  className="block w-[35px] h-[35px] bg-[url(https://sui.ssgcdn.com/ui/m_ssg/img/common/sp_sns.png)] bg-no-repeat bg-[length:275px_100px] bg-[-240px_0]"
                  title="URL복사"
                >
                  <span className="overflow-hidden absolute w-px h-px leading-[0] text-[0px]">
                    URL복사
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="absolute top-[-41px] w-9 h-9 rounded-[50%] right-0 bg-white flex justify-center items-center"
          onClick={close}
        >
          <IoClose className="w-[80%] h-[80%]" />
          <span className="overflow-hidden absolute w-px h-px leading-[0] text-[0px]">
            닫기
          </span>
        </button>
      </div>
    </div>,
    elRef.current,
  )
}
