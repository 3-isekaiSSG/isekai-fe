import AppBar from '@/components/AppBar'
import Floating from '@/components/FloatingBtn'
import Footer from '@/components/Footer'
import BottomBtn from '@/components/product/BottomBtn'

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { code: number }
}) {
  return (
    <>
      <AppBar after={false} value="" />
      {children}
      <Footer />
      <Floating />
      <BottomBtn code={params.code} />
    </>
  )
}
