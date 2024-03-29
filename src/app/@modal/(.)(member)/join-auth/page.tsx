import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AuthModal from '@/containers/join-auth/AuthModal'
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
