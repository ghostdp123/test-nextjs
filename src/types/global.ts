export type Product = {
  id: string
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
