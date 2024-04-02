import AppBar from '@/components/AppBar'
import Floating from '@/components/FloatingBtn'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppBar after={false} value="" />
      {children}
      <Footer />
      <Floating />
    </>
  )
}
