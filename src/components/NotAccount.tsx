'use client'
import { Login, Register } from "@/components"
import { useState } from "react"
import { NotAccountType } from "@/types/global"

export default function NotAccount() {
  const [notAccountType, setNotAccountType] = useState<NotAccountType>('login')
  return (
    <div className="container">
      {notAccountType === 'login' ? <Login setNotAccountType={setNotAccountType} /> : <Register setNotAccountType={setNotAccountType} />}
    </div>
  )
}