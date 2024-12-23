'use client'
import { Login, Register } from "@/components"
import { useState } from "react"
import { AccountType } from "@/types/global"

export default function Page() {
  const [accountType, setAccountType] = useState<AccountType>('login')
  return (
    <div className="container">
      {accountType === 'login' ? <Login setAccountType={setAccountType} /> : <Register setAccountType={setAccountType} />}
    </div>
  )
}