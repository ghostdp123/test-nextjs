import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default async function Header() {
  return (
    <header className="relative flex justify-between h-16 px-10 border-b bg-white">
      <div className="w-[1140px] mx-auto flex items-center justify-between h-full">
        <h1 className="flex items-center h-full text-2xl">
          <Link href="/">DUYI Store</Link>
        </h1>  
        <ul className="flex items-center justify-end h-1/3 space-x-4 text-sm">
          <Link href="/search">Search</Link>
          <Separator orientation="vertical" />
          <Link href="/account">Account</Link>
          <Separator orientation="vertical" />
          <Link href="/cart">Cart</Link>
        </ul>
      </div>
    </header>
  )
}