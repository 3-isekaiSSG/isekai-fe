export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div>카테고리위에 공통</div>
      {children}
    </>
  )
}
