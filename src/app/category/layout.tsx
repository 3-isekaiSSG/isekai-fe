import AppBar from '@/components/AppBar'
import TabBar from '@/components/TabBar'
import Footer from '@/components/Footer/MiniFooter'
import Floating from '@/components/FloatingBtn'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AppBar after />
      {children}
      <Footer />
      <TabBar />
      <Floating />
    </>
  )
}
