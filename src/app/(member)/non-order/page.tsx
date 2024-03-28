import NonBottom from '@/containers/non-login/NonBottom'
import NonOrderForm from '@/containers/non-order/NonOrderForm'

export default function Page() {
  return (
    <main className="text-[#666] px-[30px] py-5">
      <NonOrderForm />
      <NonBottom />
    </main>
  )
}
