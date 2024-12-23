import { Skeleton } from "@/components/ui/skeleton"

export default async function Loading() {
  return (
    <div className="container flex items-center space-x-4 my-20">
      <div className="w-64 space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Skeleton className="flex-1 h-48 rounded-md" />
      <div className="w-80 space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}