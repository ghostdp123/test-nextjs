'use client'

import Image from "next/image"
import { useSortStore } from "@/store"
import { ProductsAPI } from "@/types/global"
import { useRouter } from "next/navigation"

export default function Products({ result }: { result: ProductsAPI }) {
  const { value } = useSortStore()
  const products = [...result.data]
  if (value !== 'latest') {
    products.sort((a, b) => value === 'low' ? a.price - b.price : b.price - a.price)
  }
  const router = useRouter()
  const handleClick = (id: number) => {
    router.push(`/detail/${id}`)
  }
  return (
    <div className="flex-1">
      <h1 className="mb-8 text-4xl">All products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleClick(product.id)}>
            <Image src={product.image} alt={product.name} width={300} height={300} priority />
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-2xl text-slate-700">{product.name}</h2>
              <p className="text-lg font-bold text-red-400">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}