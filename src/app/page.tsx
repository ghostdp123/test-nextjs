import { Sort, Products } from "@/components"
import { Product } from "@/types/global"

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/products`)
  const result: { code: number; data: Product[] } = await response.json()
  return (
    <div className="container flex py-6">
      <Sort />
      <Products result={result} />
    </div>
  )
}