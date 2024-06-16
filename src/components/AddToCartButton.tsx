import { useCart } from '@/contexts/CartContext'
import React from 'react'

interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addItem } = useCart()
  function handleAddProductToCart() {
    addItem(productId, 1)
  }
  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold"
      onClick={handleAddProductToCart}
    >
      Add to cart
    </button>
  )
}
