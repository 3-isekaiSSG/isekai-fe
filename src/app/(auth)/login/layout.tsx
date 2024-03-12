import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <Footer />
      <TabBar />
    </>
  )
}
