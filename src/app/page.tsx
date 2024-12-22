import { Sort, Products } from "@/components"

export default async function Page() {
  return (
    <div className="flex mx-auto py-6 w-[1140px]">
      <Sort />
      <Products />
    </div>
  )
}