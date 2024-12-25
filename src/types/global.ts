export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  variant: string[]
}

export type ProductsAPI = {
  status: number
  body: string
  data: Product[]
}

export type ProductAPI = {
  status: number
  body: string
  data: Product
}

export type SortValue = 'latest' | 'low' | 'high'

export type CartItem = {
  product: Product
  quantity: number
  selectedVariant: string
}

export type NotAccountType = 'login' | 'register'
/* 
export type Auth = {
  status: number
  body: string
  email: string 
  name: string
  userid: number
} */

export type Address = {
  id: number
  name: string
  city: string
  address: string
  phone: string
  userid: number
}