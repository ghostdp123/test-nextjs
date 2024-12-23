'use client'
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store"

export default function Header() {
  const { cartList } = useCartStore()
  return (
    <header className="relative flex justify-between h-16 px-10 border-b bg-white">
      <div className="container flex items-center justify-between h-full">
        <h1 className="flex items-center h-full text-2xl">
          <Link href="/">DUYI Store</Link>
        </h1>  
        <ul className="flex items-center justify-end h-1/3 space-x-4 text-sm">
          <Link href="/search">Search</Link>
          <Separator orientation="vertical" />
          <Link href="/account">Account</Link>
          <Separator orientation="vertical" />
          <Link href="/cart">Cart { cartList.length ? '(' + cartList.length + ')' : '' }</Link>
        </ul>
      </div>
    </header>
  )
}