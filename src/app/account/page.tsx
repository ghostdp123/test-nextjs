import { Account, NotAccount } from "@/components"
import { authAction, addressesAction } from "@/lib/actions"

export default async function Page() {
  const auth = await authAction()
  const addresses = await addressesAction(auth.data?.userid)
  return (
    <div className="container">
      {auth.status === 200 && auth.data ? <Account authData={auth.data} addressesData={addresses.data} /> : <NotAccount />}
    </div>
  )
}