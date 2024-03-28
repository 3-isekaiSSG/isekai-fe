import AppBar from '@/components/AppBar'
import Floating from '@/components/FloatingBtn'
import Footer from '@/components/Footer/MiniFooter'
import TabBar from '@/components/TabBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AppBar after value="" />
      {children}
      <Footer />
      <TabBar />
      <Floating />
    </>
  )
}
