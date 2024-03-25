import AllCategoryDrop from '@/containers/category/[categoryName]/AllCategoryDrop'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AllCategoryDrop />
      {children}
    </>
  )
}
