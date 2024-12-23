
export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  variant: string[]
}

export type SortValue = 'latest' | 'low' | 'high'

export type CartItem = {
  product: Product
  quantity: number
  selectedVariant: string
}

export type AccountType = 'login' | 'register'