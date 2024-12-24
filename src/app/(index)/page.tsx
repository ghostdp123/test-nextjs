import { Sort, Products } from "@/components"
import { ProductsAPI } from "@/types/global"

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/products`)
  const result: ProductsAPI = await response.json()
  return (
    <div className="container flex py-6">
      <Sort />
      <Products result={result} />
    </div>
  )
}