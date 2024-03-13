import MainNav from '@/components/MainNav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainNav />
      {children}
    </>
  )
}
