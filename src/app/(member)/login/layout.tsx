import Header from '@/components/Header'
import Footer from '@/components/Footer'
import style from '@/components/Login/login.module.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className={(style.body, style.body_and, style.body_ssg)}>
      <Header />
      {children}
      <Footer />
    </body>
  )
}
