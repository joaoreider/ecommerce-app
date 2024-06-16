'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (productId: number, quantity: number) => void
  removeItem: (productId: number) => void
  updateItem: (productId: number, quantity: number) => void
  clearItems: () => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(productId: number, quantity: number) {
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

  function removeItem(productId: number) {
    setCartItems((items) =>
      items.filter((item) => item.productId !== productId),
    )
  }

  function updateItem(productId: number, quantity: number) {
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
