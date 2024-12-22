import { Separator } from "@/components/ui/separator"
import Link from "next/link";
export default async function Footer() {
  return (
    <footer className="border-t w-full mt-6">
      <div className="py-32 flex justify-between w-[1140px] mx-auto">
        <h2 className="text-2xl">
          <Link href="/">DUYI Store</Link>
        </h2>
        <div className="gap-10 grid-cols-3 flex">
          <div>
            <span>Categories</span>
            <ul className="m-4 space-y-3">
              <li>Clothing</li>
              <li>Audio</li>
              <li>Furniture</li>
            </ul>
          </div>
          <Separator orientation="vertical" />
          <div>
            <span>Collections</span>
            <ul className="m-4 space-y-3">
              <li>Latest Drops</li>
              <li>Weekly Picks</li>
              <li>Sale</li>
            </ul>
          </div>
          <Separator orientation="vertical" />
          <div>
            <span>Code</span>
            <ul className="m-4 space-y-3">
              <li>GitHub</li>
              <li>Documentation</li>
              <li>Source code</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}