import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="absolute w-full">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
