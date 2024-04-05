import CartFooter from '@/containers/cart/CartFooter'
import CartHeader from '@/containers/cart/CartHeader'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <CartHeader />
      {children}
      <CartFooter />
    </>
  )
}
