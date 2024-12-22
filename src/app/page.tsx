import { Sort, Products } from "@/components"
import { Product } from "@/types/global"

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/products`)
  const products: { code: number; data: Product[] } = await res.json()
  return (
    <div className="flex mx-auto py-6 w-[1140px]">
      <Sort />
      <Products products={products} />
    </div>
  )
}