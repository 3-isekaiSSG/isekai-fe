import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <TabBar />
    </>
  )
}
