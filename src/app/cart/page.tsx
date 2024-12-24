import { Cart } from "@/components"
import { authAction } from "@/lib/actions"
export default async function Page() {
  const auth = await authAction()
  return (
    <div className="container">
      <Cart status={auth.status} />
    </div>
  )
}