import { Account, NotAccount } from "@/components"
import { authAction } from "@/lib/actions"

export default async function Page() {
  const auth = await authAction()
  return (
    <div className="container">
      {auth.status === 200 ? <Account email={auth.email} name={auth.name} /> : <NotAccount />}
    </div>
  )
}