'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  updateItem: (productId: string, quantity: number) => void
  clearItems: () => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(productId: string, quantity: number) {
    setCartItems((items) => {
      const index = items.findIndex((item) => item.productId === productId)
      if (index === -1) {
        return [...items, { productId, quantity }]
      }

      const newItems = [...items]
      newItems[index].quantity += quantity
      return newItems
    })
  }

  function removeItem(productId: string) {
    setCartItems((items) =>
      items.filter((item) => item.productId !== productId),
    )
  }

  function updateItem(productId: string, quantity: number) {
    setCartItems((items) =>
      items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    )
  }

  function clearItems() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addItem, removeItem, updateItem, clearItems }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
