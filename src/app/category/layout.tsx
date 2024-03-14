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
      <header className="after:content-[''] after:block after:h-0.5 after:bg-header-gradient w-full">
        <AppBar />
      </header>
      {children}
      <Footer />
      <TabBar />
      <Floating />
    </>
  )
}
