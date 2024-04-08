import Floating from '@/components/FloatingBtn'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
      <Floating />
    </>
  )
}
