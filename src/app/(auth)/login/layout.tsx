import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar'
import AuthSession from '@/components/provider/AuthProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AuthSession>{children}</AuthSession>
      <Footer />
      <TabBar />
    </>
  )
}
