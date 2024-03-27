import AuthModal from '@/containers/join-auth/AuthModal'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
