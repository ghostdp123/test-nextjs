'use client'
import { Button } from './ui/button'
import { logoutAction } from '../lib/actions'
import { useRouter } from 'next/navigation'
export default function Account({ email, name }: { email: string; name: string; }) {
  const router = useRouter()
  const handleClick = async () => {
    const res = await logoutAction()
    if (res.status === 200) {
      router.refresh()
    }
  }
  return (
    <div>
      Account
      <div>{email}</div>
      <div>{name}</div>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  )
}