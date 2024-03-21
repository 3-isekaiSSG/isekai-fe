import Search from '@/app/search/page'
import { Modal } from './modal'

export default function page() {
  return (
    <Modal>
      <Search />
      나는 모달
    </Modal>
  )
}
