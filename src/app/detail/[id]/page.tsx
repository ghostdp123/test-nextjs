
import { ProductAPI, ProductsAPI } from "@/types/global"
import Image from "next/image"
import { AddCart } from "@/components"

export const dynamicParams = false

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/products`)
  const result: ProductsAPI = await response.json()
  return result.data.map((product) => ({
    id: product.id + '',
  }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/products/${id}`)
  const result: ProductAPI = await response.json()
  const product = result.data
  return (
    <div className="container flex py-6">
      <div className="w-64">
        <h2 className="font-sans text-3xl leading-10 font-bold my-8">{product.name}</h2>
        <p className="leading-10">{product.description}</p>
      </div>
      <div className="mx-10 flex-1 bg-slate-50 p-4 rounded-lg shadow-md relative h-[500px]">
        <Image src={product.image} alt={product.name} fill priority sizes="300" style={{
          objectFit: 'cover',
        }} />
      </div>
      <AddCart product={product} />
    </div>
  );
}