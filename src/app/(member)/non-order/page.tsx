import NonOrderForm from '@/containers/non-order/NonOrderForm'
import NonBottom from '@/containers/non-login/NonBottom'

export default function Page() {
  return (
    <main className="text-[#666] px-[30px] py-5">
      <NonOrderForm />
      <NonBottom />
    </main>
  )
}
