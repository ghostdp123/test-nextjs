
// import { Product } from "@/types/global"
// import Image from "next/image";

export default async function Products() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  // const products: { code: number; data: Product[] } = await res.json()
  return (
    <div className="flex-1">
      <h1 className="mb-8 text-4xl">All products</h1>
      {/* <div className="grid grid-cols-3 gap-4">
        {products.data.map((product) => (
          <div key={product.id} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer">
            <Image src={product.image} alt={product.name} width={300} height={300} />
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-2xl text-slate-700">{product.name}</h2>
              <p className="text-lg font-bold text-red-400">${product.price}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}