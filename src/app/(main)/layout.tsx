import TabBar from '@/components/TabBar'
import Footer from '@/components/Footer'
import Floating from '@/components/FloatingBtn'
import AppBar from '@/components/AppBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppBar after={false} />
      {children}
      <Footer />
      <TabBar />
      <Floating />
    </>
  )
}
