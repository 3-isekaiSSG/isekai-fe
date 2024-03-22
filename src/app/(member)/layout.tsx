import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MemberLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <main className="absolute w-full">
      <Header />
      {children}
      <Footer />
      {modal}
    </main>
  )
}
