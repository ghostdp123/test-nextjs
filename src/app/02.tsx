import { MailOpen } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default async function Page() {
  return (
    <div>
      hello page 02
      <Button>Click me</Button>
      <Button variant="outline">Click me</Button>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>Click here</Link>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
       &#34;After all,&#34; he said, &#34;everyone enjoys a good joke, so it&#39;s only fair that
        they should pay for the privilege.&#34;
      </blockquote>
    </div>
  )
}