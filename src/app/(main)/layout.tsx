import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <TabBar />
    </>
  )
}
