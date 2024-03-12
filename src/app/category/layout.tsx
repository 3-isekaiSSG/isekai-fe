import AppBar from '@/components/Header/AppBar'
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
      <header className="w-full">
        <AppBar />
      </header>
      {children}
      <Footer />
      <TabBar />
      <Floating />
    </>
  )
}
