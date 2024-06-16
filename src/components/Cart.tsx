'use client'
import { useCart } from '@/contexts/CartContext'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export default function Cart() {
  const { items } = useCart()
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4 text-sm" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
