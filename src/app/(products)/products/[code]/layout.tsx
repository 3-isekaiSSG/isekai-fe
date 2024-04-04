import Floating from '@/components/FloatingBtn'
import Footer from '@/components/Footer'
import BottomBtn from '@/components/products/BottomBtn'

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { code: number }
}) {
  return (
    <>
      {children}
      <Footer />
      <Floating />
      <BottomBtn code={params.code} />
    </>
  )
}
