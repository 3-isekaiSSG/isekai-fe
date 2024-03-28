import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
