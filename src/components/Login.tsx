'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { NotAccountType } from "@/types/global"
import { Dispatch, SetStateAction } from "react"
import { loginAction } from "@/lib/actions"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
})

export default function Login({ setNotAccountType }: { setNotAccountType: Dispatch<SetStateAction<NotAccountType>> }) {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await loginAction(values.email, values.password)
    toast({
      description: res.body,
      duration: 2000,
      style: { 
        backgroundColor: res.status === 200 ? '#d4edda' : '#f8d7da', 
        color: res.status === 200 ? '#155724' : '#721c24',
      }
    })
    
    if (res.status === 200) {
      router.refresh()
    }
  }
  return (
    <div className="container2 my-20">
      <h1 className="text-xl mb-3 text-center font-bold">Welcome back</h1>
      <p className="text-center mb-6">Sign in to access an enhanced shopping experience.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Please enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">Sign in</Button>
        </form>
      </Form>
      <p className="text-center text-sm mt-3">Not a member? <span className="underline text-orange-400 cursor-pointer" onClick={() => setNotAccountType('register')}>Join us.</span></p>
    </div>
  )
}