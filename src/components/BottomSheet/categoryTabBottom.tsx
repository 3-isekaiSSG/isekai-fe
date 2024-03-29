import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import { animateSheetState } from '@/states/bottomSheetAtom'
import { CategoryType } from '@/types/categoryType'
import styles from './categoryTabBottom.module.css'

interface Props {
  title: string
  data: CategoryType[]
  setIsToggle: Dispatch<SetStateAction<boolean>>
  handleClick: (item: CategoryType) => void
  selectCategory: number
}

export default function BottomSheet({
  title,
  data,
  setIsToggle,
  handleClick,
  selectCategory,
}: Props) {
  const setAnimate = useSetRecoilState<string>(animateSheetState)
  const selectedRef = useRef<HTMLDivElement | null>(null)

  const handleClose = () => {
    setAnimate('slide-down')
    setTimeout(() => {
      setIsToggle(false)
    }, 200)
  }

  useEffect(() => {
    setIsToggle(true)
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: 'start',
      })
    }
  }, [setIsToggle])

  return (
    <>
      <header className="flex flex-col items-center relative h-[52px] bg-[color:var(--m-colors-white)] border-b-[color:var(--m-colors-gray350)] rounded-t-2xl border-b before:content-[''] before:w-10 before:min-h-[4px] before:max-h-1 before:bg-[color:var(--m-colors-gray300)] before:border-[color:var(--m-colors-gray150)] before:mt-1 before:mb-2 before:rounded-[0.625rem] box-border mb-1">
        <div className="flex items-center justify-center flex-[1_1_9%] w-full min-h-[36px] max-h-9 relative pb-1">
          <h3 className="text-base font-bold overflow-hidden text-ellipsis leading-[19px] h-[19px]">
            {title}
          </h3>
          <button
            type="button"
            className="inline absolute font-normal h-8 min-w-[2rem] text-sm w-8 m-0 p-0 rounded-none right-2.5"
            aria-label="닫기"
            onClick={handleClose}
          >
            <svg
              className="w-6 h-6 inline-block leading-[1em] text-[color:var(--m-colors-current)] align-middle"
              viewBox="0 0 24 24"
              focusable="false"
              name="CloseIcon"
            >
              <path
                d="M4.36304 18.788L18.7879 4.36319L19.6364 5.21171L5.21156 19.6365L4.36304 18.788Z"
                fill="currentColor"
              />
              <path
                d="M4.36304 5.21136L5.21156 4.36284L19.6364 18.7877L18.7879 19.6362L4.36304 5.21136Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>
      <article className="max-h-[calc(-64px_+_84vh)] relative overflow-y-auto overscroll-y-contain bg-[color:var(--m-colors-white)] box-border px-[15px]">
        <div className="relative pr-6 pt-2 pb-[60px]">
          {data.map((item) => (
            <div
              onClick={() => {
                handleClick(item)
                handleClose()
              }}
              aria-hidden="true"
              key={item.id}
              className="flex items-center flex-row w-full h-11"
              ref={selectCategory === item.id ? selectedRef : null}
            >
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                htmlFor={`category-radio-${item.id}`}
                className="inline-flex items-center align-top relative"
              >
                <input
                  type="radio"
                  name="category-radio"
                  id={`category-radio-${item.id}`}
                  value={item.id}
                  className="h-px w-px overflow-hidden absolute -m-px p-0 border-0"
                  style={{ clip: 'rect(0px, 0px, 0px, 0px)' }}
                  checked={selectCategory === item.id}
                />
                <span
                  className={`box-border transition-shadow duration-[250ms] ease-[ease] delay-[0s] inline-flex items-center justify-center w-5 h-5 border rounded-full border-solid bg-[color:var(--m-colors-white)] 
                  
                  ${selectCategory === item.id ? styles.checked : styles.notChecked}`}
                />
              </label>
              <span
                className={`text-sm text-[color:var(--m-colors-gray900)] ml-3 mr-0 my-0 ${selectCategory === item.id ? 'font-bold' : ''}`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
