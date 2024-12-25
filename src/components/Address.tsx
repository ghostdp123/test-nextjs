'use client'
import { JwtPayload } from 'jsonwebtoken'
import { Plus, Trash2, Edit } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from './ui/button'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { addAddressAction, removeAddressAction } from '@/lib/actions'
import { Address as AddressType } from '@/types/global'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }).trim(),
  city: z.string().min(1, { message: 'City cannot be empty' }).trim(),
  address: z.string().min(1, { message: 'Address cannot be empty' }).trim(),
  phone: z.string().min(1, { message: 'Phone cannot be empty' }).trim(),
})

export default function Address({ authData, addressesData }: { authData: JwtPayload; addressesData: AddressType[] }) {
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      city: '',
      address: '',
      phone: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addAddressAction(values.name, values.city, values.address, values.phone, authData.userid)
    setOpen(false)
    form.reset()
  }
  const handleClick = async (id: number) => {
    await removeAddressAction(id)
  }
  return (
    <div className="grid grid-cols-2 gap-4 mt-6 mb-4">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <div className="border rounded-sm h-40 cursor-pointer relative text-slate-600">
            <p className="m-3">New address</p>
            <div className="absolute bottom-2 left-3">
              <Plus width={14} />
            </div>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-5">Add address</AlertDialogTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormLabel className="w-20">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Please enter your name" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormLabel className="w-20">City</FormLabel>
                        <FormControl>
                          <Input placeholder="Please enter your city" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormLabel className="w-20">Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Please enter your address" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormLabel className="w-20">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Please enter your phone" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button type="submit">Save</Button>
                </AlertDialogFooter>
              </form>
            </Form>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      {addressesData.map(item => (
        <div key={item.id} className="border rounded-sm h-40 relative text-slate-600">
          <p className="m-3">{item.name}</p>
          <div className="text-sm ml-5">
            <p>{item.city}</p>
            <p>{item.address}</p>
            <p>{item.phone}</p>
          </div>
          <div className="absolute bottom-2 left-3 flex text-xs gap-2">
            <div className="flex items-center cursor-pointer"><Edit width={14} /> Edit</div>
            <div className="flex items-center cursor-pointer" onClick={() => handleClick(item.id)}><Trash2 width={14} /> Remove</div>
          </div>
        </div>
      ))}
    </div>
  )
}
