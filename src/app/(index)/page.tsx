import { Sort, Products } from "@/components"
import { productsAction } from "@/lib/actions"
import { ProductsAPI } from "@/types/global"

export default async function Page() {
  // const response = await fetch(`${process.env.NEXT_BASE_URL}/api/products`)
  // const result: ProductsAPI = await response.json()

  const result = await productsAction()

  return (
    <div className="container flex py-6">
      <Sort />
      <Products result={result} />
    </div>
  )
}