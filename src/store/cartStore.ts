import { create } from 'zustand'

import { CartItem } from '@/types/global'

type CartState = {
  cartList: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (index: number) => void
  updateQuantity: (index: number, quantity: number) => void
  // 判断购物车中是否已经存在某个商品 cartItem.product.name + cartItem.selectedVariant 作为条件
  isItemInCart: (name: string, selectedVariant: string) => number
}

const useCartStore = create<CartState>((set) => ({
  cartList: [],
  addToCart: (product) => set((state) => ({ cartList: [...state.cartList, product] })),
  removeFromCart: (index) => set((state) => {
    const newCartList = [...state.cartList]
    newCartList.splice(index, 1)
    return { cartList: newCartList }
  }),
  updateQuantity: (index, quantity) => set((state) => {
    const newCartList = [...state.cartList]
    newCartList[index].quantity = quantity
    return { cartList: newCartList }
  }),
  isItemInCart: (name, selectedVariant): number => {
    return useCartStore.getState().cartList.findIndex(
      (item: CartItem) =>
        item.product.name === name &&
        item.selectedVariant === selectedVariant)
  },
}));

export default useCartStore