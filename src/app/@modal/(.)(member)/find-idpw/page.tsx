import AuthModal from '@/components/AuthModal'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Modal } from './modal'

export default function page() {
  return (
    <Modal>
      <Header />
      <AuthModal />
      <Footer />
    </Modal>
  )
}
