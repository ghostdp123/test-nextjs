'use client'
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useSortStore } from "@/store"
import { SortValue } from "@/types/global"

export default function Sort() {
  const { setValue } = useSortStore()
  const handleValueChange = (value: SortValue) => {
    if (value) {
      setValue(value)
    }
  }
  return (
    <div className="flex w-64 gap-12 py-4 mb-8 px-0 pl-6">
      <div className="flex gap-x-3 flex-col gap-y-3">
        <p className="font-normal font-sans txt-medium">Sort by</p>
        <ToggleGroup defaultValue="latest" className="flex-col gap-3" type="single" onValueChange={handleValueChange}>
          <ToggleGroupItem value="latest">Latest Arrivals</ToggleGroupItem>
          <ToggleGroupItem value="low">Price: Low -&gt High</ToggleGroupItem>
          <ToggleGroupItem value="high">Price: High -&gt Low</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}