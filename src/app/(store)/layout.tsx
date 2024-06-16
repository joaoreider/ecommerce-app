import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/CartContext'

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max_content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
