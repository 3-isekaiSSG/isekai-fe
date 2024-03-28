// import styles from './bottom.module.css'
import { Modal } from './modal'

interface Props {
  title: string
  isClose: boolean
}

export function BottomSheet({ title, isClose }: Props) {
  return (
    <>
      <header className="flex flex-col items-center relative h-[52px] bg-[color:var(--m-colors-white)] border-b-[color:var(--m-colors-gray350)] rounded-t-2xl border-b before:content-[''] before:w-10 before:min-h-[4px] before:max-h-1 before:bg-[color:var(--m-colors-gray300)] before:border-[color:var(--m-colors-gray150)] before:mt-1 before:mb-2 before:rounded-[0.625rem]">
        <div className="flex items-center justify-center flex-[1_1_9%] w-full min-h-[36px] max-h-9 relative pb-1">
          <h3 className="text-base font-bold overflow-hidden text-ellipsis leading-[19px] h-[19px]">
            {title}
          </h3>
          {isClose && (
            <button
              type="button"
              className="inline absolute font-normal h-8 min-w-[2rem] text-sm w-8 m-0 p-0 rounded-none right-2.5"
              aria-label="닫기"
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
          )}
        </div>
      </header>
      <div>ㅁㅅㅁ</div>
    </>
  )
}

export default function index({ title }: Props) {
  return (
    <Modal>
      <BottomSheet title={title} isClose />
    </Modal>
  )
}
